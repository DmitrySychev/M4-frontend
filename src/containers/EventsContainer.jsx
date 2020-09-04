import React from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment } from 'semantic-ui-react'

class EventsContainer extends React.Component {


    renderEvents=()=>{
        return this.props.events.map(event=> {
           return <EventCard key={event.id} event={event} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>
           
        })

      }


    render() {
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