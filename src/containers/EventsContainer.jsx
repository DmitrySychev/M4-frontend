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
    }
}


    render() { 
        return (
                <>

            <Container inverted='true' style={{ marginTop: '7em' }}>

                <Segment>
                <h1>Events I'm Attending</h1>  
                <Segment className="ui grid container segment centered" style={{ margin: 'auto' }}>
                    {this.renderJoinedEvents()}
                    </Segment>    
                </Segment>
          
                
            
                <Segment>
                <h1>Events I'm Hosting</h1>
                <Segment className="ui grid container segment centered" style={{ margin: 'auto' }}>
                        { this.renderCreatedEvents() }            
                    </Segment>
                </Segment>
               

                
                <RecommendationsContainer 
                    user = {this.props.user}
                    events={this.props.events} 
                    joinedEvents={this.props.joinedEvents} 
                    joinEvent={this.props.joinEvent}
                    createdEvents={this.props.createdEvents}/>
           

            </Container>

            <Footer />
            </>
            
        )
    }

}

export default EventsContainer;

