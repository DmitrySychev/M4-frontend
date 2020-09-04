import React from 'react';
import './App.css';
import Home from './components/Home.jsx'
import LoginForm from './components/Login.jsx'
import SignupForm from './components/Signup.jsx'
import CreateEvent from './components/CreateEvent.jsx'
import Navbar from './components/Navbar.jsx'
import EventsHomeContainer from './containers/EventsHomeContainer.jsx'
import { Container, Segment } from 'semantic-ui-react';
import {  
  Switch,
  Route,
  withRouter } from 'react-router-dom';


class App extends React.Component{

  state = {
    events: [],
    user: null,
    redirected: false
  }


  signupHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
      .then(res => res.json())
      .then(console.log)
  }

  loginHandler = (userInfo) => {
    console.log("user obj from login form", userInfo)
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ userInfo })
    })
      .then(res => res.json())
      .then(data => {
        // console.log("token:", data.jwt)
        console.log("data.user", data.user)
        localStorage.setItem("token", data.jwt)
        this.setState({ user: data.user }, () => this.props.history.push("/") )
      })
  }

  eventHandler = (event) => {
      fetch("http://localhost:3000/events/", { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ event })
      })
      .then(res => res.json())
      .then(data => {this.setState({...this.state.events, data, redirected: true }, () => this.getEvents())})
      this.props.history.push('/');
      
  }

  getEvents = () => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(data => this.setState({ events: data.events, redirected: false}))
  }

  componentDidMount() {
    this.getEvents()
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(resp => resp.json())
      .then(data => this.setState({ user: data.user }))
    }  else {
      this.props.history.push("/login")
    }
  }


  newUserEvent=(eventId, userId)=>{
    console.log("in app", eventId, userId)

    fetch("http://localhost:3000/user_events/", { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ event_id: eventId, user_id: userId })
      })
      .then(res => res.json())

  }
  
  deleteEvent=(eventObj)=>{
    const newEventsArray = this.state.events.filter(event => event.id !== eventObj.id)
    console.log("event obj ID in app", eventObj.id)
    fetch("http://localhost:3000/events/"+eventObj.id, {method: "DELETE"})
      .then(this.setState({ events: newEventsArray}, console.log("new events array", this.state.events))) //working
  }

  render() {
    const { redirected } = this.state
    if (redirected) {
      return <Route path="/" render={() => <Home events={this.state.events} deleteEvent={this.deleteEvent} joinEvent={this.newUserEvent}/>}/>
    }
    return (
      <>
      <Navbar user={this.state.user} />
        <Switch>
          <Route path="/login" render={() => <LoginForm submitHandler={this.loginHandler}/>} />
          <Route path="/signup" render={() => <SignupForm submitHandler={this.signupHandler}/>} />

          <Route path="/createevent" render={() => <CreateEvent user={this.state.user} submitHandler={this.eventHandler}/>}/>

          <Route path="/events" render={() => <EventsHomeContainer user={this.state.user} events={this.state.events} deleteEvent={this.deleteEvent} joinEvent={this.newUserEvent}/>}/>
          <Route path="/" render={() => <Home user={this.state.user} events={this.state.events} />}/>
        </Switch>

      </>
      )
  };
}

export default withRouter(App);