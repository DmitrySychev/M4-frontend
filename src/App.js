import React from 'react';
import './App.css';
import LoginForm from './components/Login.jsx'
import SignupForm from './components/Signup.jsx'
import CreateEvent from './components/CreateEvent.jsx'
import Navbar from './components/Navbar.jsx'
import EventsContainer from './containers/EventsContainer.jsx'
import EventShowPage from './components/EventShowPage.jsx'
import AllEventsContainer from './containers/AllEventsContainer.jsx'
import {  
  Switch,
  Route,
  withRouter } from 'react-router-dom';


class App extends React.Component{

  state = {
    events: [],
    user: null,
    joinedEvents: [],
    createdEvents: [],
    eventId: '',
    eId: '',
    userEvents: [],
    userId: null
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

  getEvents = () => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(data => this.setState({ events: data.events}))
      .catch((error) => {console.log(error)})
  }

  componentDidMount() {
    this.getEvents()
    //gets profile information
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(resp => resp.json())
      .then(data => this.setState({ user: data.user }))
      .catch((error) => {console.log(error)})
    }  else {
      this.props.history.push("/login")
    }
    // gets events by user, joined and created
      fetch('http://localhost:3000/me/events', {
          method: "GET",
          headers: { Authorization: `Bearer ${token}`},
        })
      .then(resp => resp.json())
      .then(resp => this.setState({joinedEvents: resp.joined_events, createdEvents: resp.created_events}))
      .catch((error) => {console.log(error)})
  }


  createEvent = (event) => {
    const token = localStorage.getItem("token")
      fetch("http://localhost:3000/events/", { 
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ event })
      })
      .then(res => res.json())
      .then(data => {this.setState({...this.state.events, data })})
      .catch((error) => {console.log(error)})
      this.props.history.push('/');
      
  }

  newUserEvent=(eventId)=>{
    const userEventObj = {event_id: eventId}
    console.log("event id in newuserevent", eventId)
    console.log(this.state.joinedEvents)
  // need to get current_user dynamically from backend in order to create the user_event
  const token = localStorage.getItem("token")
      fetch("http://localhost:3000/user_events/", { 
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(userEventObj)
      })
        .then(res => res.json())

    }

    learnMore=(id)=>{
      this.setState({ eId: id})
    
    }

findUserEvent=(eventId)=>{
  const filteredByEventId = this.state.userEvents.filter(userEvent => userEvent.event_id === eventId)
  const userEventToDelete = filteredByEventId.filter(userEvent => userEvent.user_id === this.state.userId )
  const idOfUserEventIdToDelete =  userEventToDelete[0].id
  const newJoinedEventsArray = this.state.joinedEvents.filter(event=> event.id !== idOfUserEventIdToDelete)
  const newUserEventsArray = this.state.userEvents.filter(event=> event.id !== idOfUserEventIdToDelete)
  
  
  fetch("http://localhost:3000/user_events/"+idOfUserEventIdToDelete, {method: "DELETE"})
  .then(this.setState({joinedEvents: newJoinedEventsArray, userEvents: newUserEventsArray}, ()=> this.componentDidMount()))
  
}

  deleteUserEvent=(eventId)=>{
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/user_events", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`},
    })
    .then(resp=> resp.json())
    .then(resp => this.setState({userEvents: resp.user_events, userId: resp.user_id}, ()=> this.findUserEvent(eventId)))
    
  }
  
  
  deleteEvent=(eventObjId)=>{
    const newEventsArray = this.state.events.filter(event => event.id !== eventObjId)
    fetch("http://localhost:3000/events/"+eventObjId, {method: "DELETE"})
      .then(this.setState({ events: newEventsArray})) //working
  }

  render() {
    return (
      <>
        <Navbar data={this.props.history}/>
        <Switch>
         

          <Route path="/login" render={() => <LoginForm submitHandler={this.loginHandler}/>} />
          <Route path="/signup" render={() => <SignupForm submitHandler={this.signupHandler}/>} />

          <Route path="/createevent" render={() => <CreateEvent 
                                                    user={this.state.user} 
                                                    submitHandler={this.createEvent}/>}/>

          <Route path="/me/events" render={() => <EventsContainer 
                                                user={this.state.user} 
                                                joinedEvents={this.state.joinedEvents} 
                                                createdEvents={this.state.createdEvents} 
                                                events={this.state.events} 
                                                deleteUserEvent={this.deleteUserEvent}
                                                deleteEvent={this.deleteEvent}
                                                learnMore={this.learnMore} 
                                                joinEvent={this.newUserEvent}/>}/> 

          {/* I think because it's all one container it may not be trigger correct refreshing of the page. Tested and verified  */}
          <Route path='/events/:id' render={() => <EventShowPage />}  />
          
          <Route path="/events" render={() => <AllEventsContainer 
                                                user={this.state.user} 
                                                joinedEvents={this.state.joinedEvents} 
                                                createdEvents={this.state.createdEvents} 
                                                events={this.state.events} 
                                                deleteUserEvent={this.deleteUserEvent}
                                                deleteEvent={this.deleteEvent} 
                                                learnMore={this.learnMore} 
                                                joinEvent={this.newUserEvent}/>}/> 

          

          <Route path="/" render={() => <EventsContainer 
                                                user={this.state.user} 
                                                joinedEvents={this.state.joinedEvents} 
                                                createdEvents={this.state.createdEvents} 
                                                events={this.state.events} 
                                                deleteEvent={this.deleteEvent} 
                                                learnMore={this.learnMore} 
                                                joinEvent={this.newUserEvent}/>}/> 

        </Switch>
        </>
      )
  };
}

export default withRouter(App);
