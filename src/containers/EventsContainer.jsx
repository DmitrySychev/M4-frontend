import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment } from 'semantic-ui-react'
import RecommendationsContainer from './RecommendationsContainer.jsx';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

class EventsContainer extends React.Component {


// it is the responsibility of the EventsContainer to render the event cards with the right props, which determine whether certain buttons are rendered


renderJoinedEvents=()=>{
    console.log("joined events", this.props.joinedEvents)
    console.log("created events", this.props.createdEvents)
    console.log("all events", this.props.events)
    return this.props.joinedEvents.map(event => {
        return <EventCard 
            key={event.id} 
            event={event} 
            joined="true" 
            created="false"
            deleteUserEvent={this.deleteUserEvent} />
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
                    deleteUserEvent={this.deleteUserEvent}></EventCard>
        })    
    }


    render() {       
        return (
            <>
            { this.props.user ?
                <>
                <Navbar />

            <Container text style={{ marginTop: '7em' }}>
            <Container> 
            <Segment>
                <button onClick={this.props.logoutHandler}>Logout</button>
            </Segment>
            </Container>
            </Container>



            <Container inverted style={{ marginTop: '7em' }}>
                <Segment className="ui grid container"> 
                <h1>Events I'm Attending</h1>      
                    {this.renderJoinedEvents()}
                </Segment>
                

                <Segment>
                <h1>Events I'm Hosting</h1>
                    {this.renderCreatedEvents()}
                </Segment>


                <Segment>
                <RecommendationsContainer 
                    events={this.props.events} 
                    joinedEvents={this.props.joinedEvents} 
                    createdEvents={this.props.createdEvents}/>
                </Segment>

            </Container>

            <Footer />
            </>
            

            :

            <Redirect to='/signup' />

            }
            </>
        )
    }

}

export default EventsContainer;

