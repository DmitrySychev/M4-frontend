import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Button, Form, Grid, Header } from 'semantic-ui-react'

class SignupForm extends React.Component {

    state = {
        open: false,
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
            <>
            <Navbar/>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  SIGNUP
                </Header>
                <Form size='large' onSubmit={this.submitHandler}>
              <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='Username' 
                    name='username'
                    value={this.state.username}
                    onChange={this.changeHandler}
                  />
                  <Form.Input 
                    fluid 
                    icon='envelope' 
                    iconPosition='left' 
                    placeholder='Email' 
                  />
                  <Form.Input
                    fluid 
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.changeHandler}
                  />
                  <Button color='grey' fluid size='large' type='submit'>
                    Signup
                  </Button>
              </Form>


              </Grid.Column>
            </Grid>
            <Footer />
            </>
          )

        
    }
}

export default SignupForm