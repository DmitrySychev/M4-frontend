import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
      }
    
      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
      }
    
    
      submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
      }
  

render() {
    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.submitHandler}>
              <Form.Input 
              fluid 
              icon='user' 
              iconPosition='left' 
              placeholder='Username'
              onChange={this.changeHandler}
              value={this.state.username} 
              name='username'
            />

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={this.changeHandler}
              value={this.state.password}
              name='password'
            />

                  <Button color='grey' fluid size='large' type='submit'>
                    Login
                  </Button>
              </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>

    )
}}

export default LoginForm