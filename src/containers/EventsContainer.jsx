import React from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment } from 'semantic-ui-react'
import {Switch, Route} from 'react-router-dom'

class EventsContainer extends React.Component {


    renderEvents=()=>{
        return this.props.events.map(event=> {
           return <EventCard key={event.id} event={event} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>
           
        })

      }


    render() {
        console.log("events", this.props.events)
        return (
    
            <>
            <h1>Events container</h1>
            {this.props.events.length === 0 ? <h1>Loading</h1> : 
                <Switch>
                <Route path="/events/:id" render={({match})=> {
                        let id = parseInt(match.params.id)
                        let foundEvent = this.props.events.find(event=> event.id === id)
                    return <EventCard event={foundEvent} />
                
                }}/>
            <Route path="/events" render={()=> {
                return (
                    
                    <Container inverted style={{ marginTop: '7em' }}>
                    <Segment className="ui grid container"> 
                        {this.renderEvents()}
                    </Segment>
                 </Container>
                )
                }}/>
                
                </Switch>
            }   
            </>
        )
    }

}

export default EventsContainer;