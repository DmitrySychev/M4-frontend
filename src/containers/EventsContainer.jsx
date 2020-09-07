import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment } from 'semantic-ui-react'
import RecommendationsContainer from './RecommendationsContainer.jsx';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer.jsx'

class EventsContainer extends React.Component {



    componentDidMount=()=>{
        fetch('http://localhost:3000/me/events')
        .then(resp => resp.json())
        .then(console.log)
    }

    renderEventsByUser=()=>{
        return <h1> Events I'm attending </h1>
    }
   
    renderCreatedEvents=()=>{ //fetch request to backend
        return <h1>Events I've created</h1>
        const eventsCreatedByUser = this.props.events.filter(event => event.user_id !== this.props.user.id)
        return this.props.events.map(event=> {
            return <EventCard key={event.id} event={event} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>      
         })
    }


    // renderEvents=()=>{
    //     return this.props.events.map(event=> {
    //        return <EventCard key={event.id} event={event} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>
    //     })
    //   }


    render() {
        
        return (
            <>
            { this.props.user ?
            <Container inverted style={{ marginTop: '7em' }}>
                <Segment className="ui grid container"> 
                    {this.renderEventsByUser()}
                    {this.renderCreatedEvents()}


                    <RecommendationsContainer/>

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