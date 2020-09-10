import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Segment, Container } from 'semantic-ui-react'
import Footer from '../components/Footer.jsx'


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
                user={this.props.user}
                deleteUserEvent={this.props.deleteUserEvent}
                />
        })
    }


    render() {
     
        return (
        <>
            
            <Container inverted='true' style={{ marginTop: '7em' }}>
            <Segment className="ui grid container" attached="bottom" > 
                <br></br>
                <h1>All Events </h1>
                    <Segment className="ui grid container">
                        {this.renderAllEvents()} 
                    </Segment>      
            </Segment>
       

            </Container>
            <Footer />

            </>
        )
    }

}

export default AllEventsContainer;

