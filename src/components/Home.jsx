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

      <div>
      <Menu fixed='top' inverted >
        <Container>
          <Menu.Item as={Link} to='/' header left floated>
            <Image size='mini' src='' style={{ marginRight: '1.5em' }} />
            Project Name
          </Menu.Item>
          <div class='right item'>
          <Menu.Item as={Link} to='/signup' >Signup</Menu.Item>
          <Menu.Item as={Link} to='/login' >Login</Menu.Item>
          </div>
        </Container>
      </Menu>
  
  
  
      <Container text style={{ marginTop: '7em' }}>
  
  
      </Container>
  
      <Container inverted style={{ marginTop: '7em' }}>
      
          <Segment className="ui grid container">       
          {this.renderEvents()}
          </Segment>
      </Container>
  
  
  
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
         
          <Image centered size='mini' src='' />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>

    )
  }

}
export default Home;