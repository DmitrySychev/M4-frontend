import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

class EventShowPage extends React.Component{


  render(){
      console.log(this.props)
    return (
        <>
        <Navbar />
        <Container>
            <Segment >
        
            </Segment>

            <Segment >
        
            </Segment>

            <Segment >
                <Header>{ this.props.event }</Header>
            </Segment>

        </Container>

        <Footer />
        </>
      )}
  }
  



export default EventShowPage;

