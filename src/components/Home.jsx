import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import EventCard from './EventCard.jsx';


class Home extends React.Component{

  renderEvents=()=>{
    return this.props.events.map(event=> {
      return <EventCard key={event.id} event={event}/>
    })
  }

  render(){
    console.log("this.props.events", this.props.events)
    return(
        <>
    <Navbar />
  
      <Container text style={{ marginTop: '7em' }}>
  
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