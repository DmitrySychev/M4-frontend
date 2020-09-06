import React from 'react';
import EventsContainer from './EventsContainer.jsx';
import RecommendationContainer from './RecommendationContainer.jsx';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Redirect } from 'react-router-dom';

class EventsHomeContainer extends React.Component {


    render() {
        console.log("user", this.props.user)
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

            <div><h1>no user object on props</h1></div>
            /* <Redirect to='/signup' /> */
            
            }
        </>
        )
    }

}

export default EventsHomeContainer;