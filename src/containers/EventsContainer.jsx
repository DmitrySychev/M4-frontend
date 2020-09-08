import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment } from 'semantic-ui-react'
import RecommendationsContainer from './RecommendationsContainer.jsx';
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

class EventsContainer extends React.Component {

state ={
    username: '',
    events: []
}
// it is the responsibility of the EventsContainer to render the event cards with the right props, which determine whether certain buttons are rendered

componentDidMount(){

    if (this.props.user) {
        this.setState({ username: this.props.user.username })
    } else {
        console.log('')
    }
}
    // renderAllEvents=()=>{
    //     return this.props.events.map(event => {
    //         return <EventCard 
    //             key={event.id} 
    //             event={event} 
    //             joined="true" 
    //             created="false"
    //             deleteUserEvent={this.deleteUserEvent} 
    //             learnMore={this.props.learnMore} 
    //             joinEvent={this.props.joinEvent}/>
    //     })
    // }


    renderJoinedEvents=()=>{
        // console.log("joined events", this.props.joinedEvents)
        // console.log("created events", this.props.createdEvents)
        // console.log("all events", this.props.events)

            return this.props.joinedEvents.map(event => {
                return <EventCard 
                    key={event.id} 
                    event={event} 
                    joined="true" 
                    created="false"
                    user={this.props.user}
                    deleteUserEvent={this.props.deleteUserEvent} />
      
        })
    }

   
    renderCreatedEvents=()=>{ //renders events created by user

            return this.props.createdEvents.map(event => {
                return <EventCard 
                        key={event.id} 
                        joined="true" 
                        created="true" 
                        deleteEvent={this.props.deleteEvent} 
                        event={event} 
                        learnMore={this.props.learnMore}
                        deleteUserEvent={this.props.deleteUserEvent}></EventCard>

       
        }) 
    }


    render() { 
        return (
                <>
            <Navbar />

            <Container inverted style={{ marginTop: '7em' }}>

                <Segment className="ui grid container"> 
                <h1>Events I'm Attending</h1>  
                    <Segment className="ui grid container">
                    {this.renderJoinedEvents()}
                    </Segment>    
                </Segment>
                
            
                <Segment className="ui grid container">
                <h1>Events I'm Hosting</h1>
                    <Segment className="ui grid container">
                        { this.renderCreatedEvents() }            
        
                    </Segment>
                </Segment>


                <Segment className="ui grid container">
                <RecommendationsContainer 
                    events={this.props.events} 
                    joinedEvents={this.props.joinedEvents} 
                    createdEvents={this.props.createdEvents}/>
                </Segment>

            </Container>

            <Footer />
            </>
            
        )
    }

}

export default EventsContainer;

