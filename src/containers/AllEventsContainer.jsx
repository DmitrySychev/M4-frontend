import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Container, Segment, Button } from 'semantic-ui-react'
import RecommendationsContainer from './RecommendationsContainer.jsx';
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

class AllEventsContainer extends React.Component {



    renderAllEvents=()=>{
        return this.props.events.map(event => {
            return <EventCard 
                key={event.id} 
                event={event}
                events={this.props.events}
                joinedEvents={this.props.joinedEvents} 
                learnMore={this.props.learnMore} 
                joinEvent={this.props.joinEvent}
                deleteUserEvent={this.props.deleteUserEvent}
                />
        })
    }


    render() { 
        return (
        <>
            

            <Segment className="ui grid container" attached="bottom"> 
                <br></br>
                <h1>All Events - Visible if signed in or not - path /events</h1>
                    <Segment className="ui grid container">
                        {this.renderAllEvents()} 
                    </Segment>      
            </Segment>
       

            <Footer />

            </>
        )
    }

}

export default AllEventsContainer;

