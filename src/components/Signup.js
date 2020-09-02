import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Signup = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='gray' textAlign='center'>
        <Image src='' /> Signup for a new account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Bio' />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Avatar' />
          {/* <Form.Input fluid icon='envelope' iconPosition='left' placeholder='Email' /> */}
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='gray' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default Signup