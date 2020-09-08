import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import CreatedEventCard from '../components/CreatedEventCard'
import { Container, Segment } from 'semantic-ui-react'
import RecommendationsContainer from './RecommendationsContainer.jsx';
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

class EventsContainer extends React.Component {

// it is the responsibility of the EventsContainer to render the event cards with the right props, which determine whether certain buttons are rendered




    renderJoinedEvents=()=>{
        // console.log("joined events", this.props.joinedEvents)
        // console.log("created events", this.props.createdEvents)
        // console.log("all events", this.props.events)
        if (this.props.joinedEvents) {
                return ( this.props.joinedEvents.map(event => {
                    return <EventCard 
                        key={event.id} 
                        event={event} 
                        events={this.props.events}
                        joinedEvents={this.props.joinedEvents} 
                        user={this.props.user}
                        deleteUserEvent={this.props.deleteUserEvent} />
          
            })

            )
        }
    }

   
    renderCreatedEvents=()=>{ //renders events created by user
        if (this.props.createdEvents !== undefined) {
            
            return ( this.props.createdEvents.map(event => {
                return <CreatedEventCard 
                        key={event.id} 
                        deleteEvent={this.props.deleteEvent} 
                        event={event} 
                        events={this.props.events}
                        createdEvents={this.props.createdEvents} 
                        learnMore={this.props.learnMore}
                        user={this.props.user}
                        deleteUserEvent={this.props.deleteUserEvent} />
        })
        )
    }
}


    render() { 
        console.log(this.props)
        return (
                <>

            <Container inverted style={{ marginTop: '7em' }}>

                
                <h1>Events I'm Attending</h1>  
                    <Segment className="ui grid container">
                    {this.renderJoinedEvents()}
                    </Segment>    
          
                
            
                
                <h1>Events I'm Hosting</h1>
                    <Segment className="ui grid container">
                        { this.renderCreatedEvents() }            
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

