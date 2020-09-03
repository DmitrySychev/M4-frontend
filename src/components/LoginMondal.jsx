import React from 'react'
import { Button, Header, Icon, Modal, Form, Grid, Image, Segment } from 'semantic-ui-react'

class SignupMondal extends React.Component {

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
    <Modal
      basic
      onClose={() => this.setState({open: false})}
      onOpen={() => this.setState({open: true})}
      size='large'
      trigger={<Button>Login</Button>}
    >

      <Modal.Content>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='grey' textAlign='center'>
                <Image src='' /> Login
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
            </Grid.Column>
          </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => this.setState({open: false})}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => this.setState({open: false})}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>

  )
}}

export default SignupMondal