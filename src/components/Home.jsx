import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import EventCard from './EventCard'


class Home extends React.Component{


// it is the responsibility of Home to render the event cards with the right props, which determine whether certain buttons are rendered

  renderEvents=()=>{
    if(this.props.user){return this.props.events.map(event=> {
                                                    return <EventCard
                                                    loggedIn="true" 
                                                    joined="true"
                                                    key={event.id} 
                                                    event={event} 
                                                    joinEvent={this.props.joinEvent} 
                                                    deleteEvent={this.props.deleteEvent}
                                                    />
                                                      })
    } else{
      return this.props.events.map(event=> {
      return <EventCard 
          key={event.id} 
          event={event} 
          joinEvent={this.props.joinEvent} 
          deleteEvent={this.props.deleteEvent}
          joined="true" />
    })
  }
  }



  render(){
    return (
        <>
        <Navbar />

      <Container text style={{ marginTop: '7em' }}>
      <Container> 
      <Segment>
        <button onClick={this.props.logoutHandler}>Logout</button>
      </Segment>
    </Container>
      </Container>



      <Container inverted style={{ marginTop: '7em' }}>
          <Segment className="ui grid container">       
            {this.renderEvents()}
          </Segment>
      </Container>

    <Footer />
    </>
    )
  }

}

export default Home;