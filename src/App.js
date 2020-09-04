import React from 'react';
import './App.css';
import Home from './components/Home.jsx'
import LoginForm from './components/Login.jsx'
import SignupForm from './components/Signup.jsx'
import CreateEvent from './components/CreateEvent.jsx'
import {  
  BrowserRouter as Router,
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
      this.props.history.push('/home');
      
  }

  getEvents = () => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(data => this.setState({ events: data.events}))
      .then(console.log(this.state))
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
      .then(data => this.setState({ user: data.user, redirected: false }))
    }  else {
      this.props.history.push("/login")
    }
  }

  
  deleteEvent=(eventObj)=>{
    fetch("http://localhost:3000/events/"+ eventObj.id, {method: "DELETE"})
    const newEventsArray = this.state.events.filter(event => event.id !== eventObj.id)
    this.setState({ events: newEventsArray}, console.log("new events array", this.state.events))
    console.log("event obj in app", eventObj)
  }

  render() {
    const { redirected } = this.state
    if (redirected) {
      window.location.reload()
    }
    return (
      <Router>

        <Switch>
          <Route path="/login">
            <LoginForm submitHandler={this.loginHandler}/>
          </Route>
          <Route path="/signup">
            <SignupForm submitHandler={this.signupHandler}/>
          </Route>
          <Route path="/createevent">
            <CreateEvent submitHandler={this.eventHandler}/>
          </Route>
          <Route path="/" >
            <Home events={this.state.events} deleteEvent={this.deleteEvent}/>
          </Route>
        </Switch>

      </Router>
      )
  };
}

export default withRouter(App);
