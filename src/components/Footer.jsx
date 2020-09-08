import React from 'react'
import {
    Container,
    Image,
    List,
    Segment,
  } from 'semantic-ui-react';


  const Footer = () => (

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign='center'>
     
      <Image centered size='mini' src='' />
      <List horizontal inverted divided link size='small'>
        <List.Item as='' href=''>
          Site Map
        </List.Item>
        <List.Item as='' href=''>
          Contact Us
        </List.Item>
        <List.Item as='' href=''>
          Terms and Conditions
        </List.Item>
        <List.Item as='' href=''>
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>
  )

  export default Footer