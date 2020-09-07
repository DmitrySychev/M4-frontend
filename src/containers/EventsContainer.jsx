import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment } from 'semantic-ui-react'
import RecommendationsContainer from './RecommendationsContainer.jsx';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer.jsx'

class EventsContainer extends React.Component {


// it is the responsibility of the EventsContainer to render the event cards with the right props, which determine whether certain buttons are rendered




    renderEventsByUser=()=>{ //renders events joined by user
        return this.props.joinedEvents.map(event => {
            return <EventCard 
                    key={event.id} 
                    loggedIn="true"
                    joined="true" 
                    created="false" 
                    event={event} 
                    deleteUserEvent={this.props.deleteUserEvent}>
                    </EventCard>
        })
    }
   
    renderCreatedEvents=()=>{ //renders events created by user
        return this.props.createdEvents.map(event => {
            return <EventCard 
                    key={event.id} 
                    loggedIn="true"
                    joined="true" 
                    created="true" 
                    deleteEvent={this.props.deleteEvent} 
                    event={event} 
                    deleteUserEvent={this.deleteUserEvent}></EventCard>
        })    
    }


    render() {       
        return (
            <>
            { this.props.user ?
            <Container inverted style={{ marginTop: '7em' }}>
                <Segment className="ui grid container"> 
                    
                <div><h1>Events I'm attending</h1>{this.renderEventsByUser()}</div>
                <div><h1>Manage my created events</h1>{this.renderCreatedEvents()}</div>
                    


                    <RecommendationsContainer 
                    events={this.props.events} 
                    joinedEvents={this.props.joinedEvents} 
                    createdEvents={this.props.createdEvents}/>

                </Segment>
                <Footer />
            </Container>
            

            :

            <Redirect to='/signup' />

            }
            </>
        )
    }

}

export default EventsContainer;