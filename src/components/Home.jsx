import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';
import CalendarLG from './CalendarLG.jsx';
import EventCard from './EventCard.jsx';
import { Route, Link, Switch, withRouter } from 'react-router-dom';

const Home = () => (
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
      <Header as='h1'></Header>
      <div class='calendar'>
          <CalendarLG />
      </div>

    </Container>

    <Container inverted style={{ marginTop: '7em' }}>
        <Segment >       
            <EventCard />
            <EventCard />
            <EventCard />
        </Segment>
    </Container>



    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Divider inverted section />
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

export default Home;