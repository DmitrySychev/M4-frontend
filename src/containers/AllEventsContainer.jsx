import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Segment, Container, Dropdown, Form } from 'semantic-ui-react'
import Footer from '../components/Footer.jsx'
import SearchForm from '../components/SearchForm.jsx'

// let dateFilteredEvents = []


class AllEventsContainer extends React.Component {



    state ={
        date: null
    }

    renderAllEvents=()=>{
        if (this.props.filteredEvents.length < this.props.events.length) {
            
            return this.props.filteredEvents.map(event => {
                return <EventCard 
                    key={event.id} 
                    event={event}
                    joinedEvents={this.props.joinedEvents}
                    learnMore={this.props.learnMore} 
                    joinEvent={this.props.joinEvent}
                    user={this.props.user}
                    deleteUserEvent={this.props.deleteUserEvent}
                    />})
        } else {
            
            return this.props.events.map(event => {
                return <EventCard 
                    key={event.id} 
                    event={event}
                    joinedEvents={this.props.joinedEvents}
                    learnMore={this.props.learnMore} 
                    joinEvent={this.props.joinEvent}
                    user={this.props.user}
                    deleteUserEvent={this.props.deleteUserEvent}
                    />})
        }

    }

    resetFilteredEventsArray=()=>{
        this.props.resetFilteredEventsArray()
    }

    render() {
        // console.log(this.props)
        return (
        <>
            
            <Container inverted='true' style={{ marginTop: '7em' }}>
           
            <Segment className="ui grid container" attached="bottom" > 
               
               <span>
                <h1>All Events </h1>
               </span>
              
           
                    <Segment className="ui grid container">
                        <SearchForm 
                        right='true' 
                        searchHandler={this.props.searchHandler}
                        dateHandler={this.props.dateHandler}
                        resetFilteredEventsArray={this.resetFilteredEventsArray}
                        searchDate={this.props.searchDate}
                        searchCategory={this.props.searchCategory}
                        />
                        <Segment className="ui grid container segment centered" style={{ margin: 'auto' }}>
                        {
                        this.renderAllEvents()
                        } 

                        </Segment>
                    </Segment>      
            </Segment>
       

            </Container>
            <Footer />

            </>
        )
    }

}

export default AllEventsContainer;

