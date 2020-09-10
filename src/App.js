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
    filteredEvents: [],
    eventId: '',
    eId: '',
    userEvents: [],
    userId: null,
    eventTypeSearchTerm: ''
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
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user }, () => {this.componentDidMount()})
      
    })
    this.props.history.push("/")
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
        localStorage.setItem("token", data.jwt)
        this.setState({ user: data.user }, () => {this.componentDidMount()})
        
      })
      this.props.history.push("/")
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
      .then(data => {this.setState({...this.state.createdEvents}, () => {this.componentDidMount()})})
      this.props.history.push('/me/events')
      
      
  }

  newUserEvent=(eventId)=>{
    const userEventObj = {event_id: eventId}
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
        .then(data => {this.setState({...this.state.joinedEvents}, () => {this.componentDidMount()})})
        .then(console.log('joined event'))
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
      .then(this.setState({ events: newEventsArray}, () => {this.componentDidMount()}))
  }

  searchHandler = (e, searchTerm) => {
    const filteredEvents = this.state.events.filter(event => event.category.toString() == searchTerm.value.toString())
    this.setState({ filteredEvents: filteredEvents})
  }

  render() {
    return (
      <>
        
        <Switch>
         

          <Route path="/login" render={() => 
                                            <div>
                                              <Navbar user={this.state} />
                                              <LoginForm submitHandler={this.loginHandler}/>
                                            </div>} />

          <Route path="/signup" render={() => 
                                            <div>
                                              <Navbar user={this.state.user} />
                                              <SignupForm submitHandler={this.signupHandler}/>
                                            </div>} />

          <Route path="/createevent" render={() => 
                                                    <div>
                                                    <Navbar user={this.state.user} />
                                                    <CreateEvent 
                                                    user={this.state.user} 
                                                    submitHandler={this.createEvent}/>
                                                    </div>}/>

          <Route exact path="/me/events" render={() =>
                                                <div>
                                                <Navbar user={this.state.user} />
                                                <EventsContainer 
                                                user={this.state.user} 
                                                joinedEvents={this.state.joinedEvents} 
                                                createdEvents={this.state.createdEvents} 
                                                events={this.state.events} 
                                                deleteUserEvent={this.deleteUserEvent}
                                                deleteEvent={this.deleteEvent}
                                                learnMore={this.learnMore} 
                                                joinEvent={this.newUserEvent}/>
                                                </div> }   
                                                /> 

          {/* I think because it's all one container it may not be trigger correct refreshing of the page. Tested and verified  */}
          <Route path='/events/:id' render={() => 
                                                <div>
                                                <Navbar user={this.state.user} />
                                                <EventShowPage 
                                                  data={this.state.events}
                                                  user={this.state.user} 
                                                  joinEvent={this.newUserEvent}
                                                  joinedEvents={this.state.joinedEvents}
                                                  deleteUserEvent={this.deleteUserEvent}
                                                />
                                                
                                                </div>}  />
          
          <Route path="/events"   render={() => 
                                                <div>
                                                  <Navbar user={this.state.user} />
                                                  <AllEventsContainer 
                                                  user={this.state.user} 
                                                  joinedEvents={this.state.joinedEvents} 
                                                  createdEvents={this.state.createdEvents} 
                                                  events={this.state.events} 
                                                  deleteUserEvent={this.deleteUserEvent}
                                                  deleteEvent={this.deleteEvent} 
                                                  learnMore={this.learnMore} 
                                                  joinEvent={this.newUserEvent}
                                                  searchHandler={this.searchHandler}
                                                  filteredEvents={this.state.filteredEvents}
                                                  />
                                                  
                                                </div>}
                                                /> 

          

          <Route path="/"          render={() => 
                                                <div>
                                                  <Navbar user={this.state.user} />
                                                  <AllEventsContainer 
                                                  user={this.state.user} 
                                                  joinedEvents={this.state.joinedEvents} 
                                                  createdEvents={this.state.createdEvents} 
                                                  events={this.state.events} 
                                                  deleteEvent={this.deleteEvent} 
                                                  learnMore={this.learnMore} 
                                                  joinEvent={this.newUserEvent}
                                                  searchHandler={this.searchHandler}
                                                  filteredEvents={this.state.filteredEvents}
                                                  />
                                                  
                                                </div> }
                                                /> 

        </Switch>
        </>
      )
  };
}

export default withRouter(App);
