import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import EventCard from './EventCard.jsx';


const Home = () => (
  <div>
    <Navbar />
    <Container text style={{ marginTop: '7em' }}>


    </Container>

    <Container inverted style={{ marginTop: '7em' }}>
        <Segment >       
            <EventCard />
            <EventCard />
            <EventCard />
        </Segment>
    </Container>

    <Footer />
  </div>
)

export default Home;