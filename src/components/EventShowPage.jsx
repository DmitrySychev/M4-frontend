import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

class EventShowPage extends React.Component{

  state = {
    event: ''
  }

  componentDidMount() {
    const eventId = window.location.href.split('/')[4]
    const foundEvent = this.props.data.find(ele => ele.id == eventId)
    this.setState({ event: foundEvent})
  }

  render() {
    console.log(this.state)
    return (

      this.state.event ? 
        <>
        <Container>
          <br></br>
          <br></br>
          <br></br>
            <Segment >
        
            </Segment>
              
            <Segment >
                <Header text='title'>{this.state.event.title}</Header>
            </Segment>

            <Segment >
                <Header>All Users Attending Event</Header>
            </Segment>

        </Container>

        <Footer />
        </>

        :

        <>
        </>
      )}
  }
  



export default EventShowPage;

