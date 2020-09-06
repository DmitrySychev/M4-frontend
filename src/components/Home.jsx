import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import HomeEventCard from './HomeEventCard.jsx';


class Home extends React.Component{

state = {
  user: null
}


  renderEvents=()=>{
    return this.props.events.map(event=> {
      return <HomeEventCard key={event.id} event={event} />
    })
  }



  render(){
    return (
        <>
    <Navbar />

      {/* <Container text style={{ marginTop: '7em' }}>
      <Container> 
      <Segment>
        <button onClick={this.props.logoutHandler}>Logout</button>
      </Segment>
    </Container>
      </Container> */}

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