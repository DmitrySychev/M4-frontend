import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import CreatedEventCard from '../components/CreatedEventCard'
import { Container, Segment } from 'semantic-ui-react'
import RecommendationsContainer from './RecommendationsContainer.jsx';
import Footer from '../components/Footer.jsx'




class EventsContainer extends React.Component {


    renderJoinedEvents=()=>{

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
    }else {return <p>You have not created any events yet.</p>}
}


    render() { 
        return (
                <>

            <Container inverted='true' style={{ marginTop: '7em' }}>

                <Container>
                <center><h1>Events I'm Attending</h1></center>  
                <Container className="ui grid container centered" style={{ margin: 'auto' }}>
                    {this.renderJoinedEvents()}
                    </Container>    
                </Container>
          
                
            
                <Container>
                <hr></hr>
                <center><h1 className="centered">Events I'm Hosting</h1></center>
                <Container className="ui grid container centered" style={{ margin: 'auto' }}>
                        { this.renderCreatedEvents() }            
                    </Container>
                </Container>
               

                
                <RecommendationsContainer 
                    user = {this.props.user}
                    events={this.props.events} 
                    joinedEvents={this.props.joinedEvents} 
                    joinEvent={this.props.joinEvent}
                    createdEvents={this.props.createdEvents}
                    deleteUserEvent={this.props.deleteUserEvent}
                    />
           

            </Container>

            <Footer />
            </>
            
        )
    }

}

export default EventsContainer;

