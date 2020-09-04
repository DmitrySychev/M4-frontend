import React from 'react';
import EventsContainer from './EventsContainer.jsx';
import RecommendationContainer from './RecommendationContainer.jsx';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Redirect } from 'react-router-dom';

class EventsHomeContainer extends React.Component {


    render() {
        return (  
            <>
            { this.props.user ?
            <>
            <Navbar />
            <EventsContainer events={this.props.events} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>
            <RecommendationContainer />
            <Footer />
            </>
            :

            <Redirect to='/signup' />
            
            }
        </>
        )
    }

}

export default EventsHomeContainer;