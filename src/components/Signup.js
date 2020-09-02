import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

class Signup extends React.Component {

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

    render () {
        return (
        
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='grey' textAlign='center'>
                <Image src='' /> Signup for a new account
              </Header>
              <Form size='large' onSubmit={this.submitHandler}>
                <Segment stacked>
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

                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        
        )
    }
}

export default Signup