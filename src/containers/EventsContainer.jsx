import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment } from 'semantic-ui-react'

class EventsContainer extends React.Component {



// conditional logic will live inside render
    renderEvents=()=>{
        return this.props.events.map(event=> {
           return <EventCard key={event.id} event={event} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>
           
        })

      }

    renderCreatedEvents=()=>{
        const eventsCreatedByUser = this.props.events.filter(event => event.user_id !== this.props.user.id)
        return this.props.events.map(event=> {
            return <EventCard key={event.id} event={event} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>      
         })
    }

    renderEventsByUser=()=>{
        // how do we get joined events by user here?
    }


    render() {
        console.log("this.props.user inside events container", this.props.user)
        
        return (
      
            <Container inverted style={{ marginTop: '7em' }}>
                <Segment className="ui grid container"> 
                    {this.renderEvents()}
                </Segment>
            </Container>
        )
    }

}

export default EventsContainer;