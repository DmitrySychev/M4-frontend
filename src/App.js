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
    user: null
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

  eventHandler = (eventInfo) => {
    console.log(eventInfo)
  }

  getEvents = () => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(data => this.setState({ events: data.events}))
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

  

  render() {
    return (
      <Router>

   
        <Switch>
          <Route path="/login">
            <Home events={this.state.events} />
            <LoginForm submitHandler={this.loginHandler}/>
          </Route>
          <Route path="/signup">
            <Home events={this.state.events}/>
            <SignupForm submitHandler={this.signupHandler}/>
          </Route>
          <Route path="/createevent">
            <CreateEvent submitHandler={this.eventHandler}/>
          </Route>
          <Route path="/">
            <Home events={this.state.events}/>
          </Route>
        </Switch>
    


      </Router>
      )
  };
}

export default withRouter(App);
