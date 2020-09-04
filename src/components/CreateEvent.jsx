import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Dropdown, Segment } from 'semantic-ui-react';

const category = [
    { key: 'zoomparty', text: 'Zoom Party', value: 'zoomparty' },
    { key: 'happyhour', text: 'Happy Hour', value: 'happyhour' },
    { key: 'gamenight', text: 'Game Night', value: 'gamenight' },
    { key: 'politicaldiscussion', text: 'Political Discussion', value: 'politicaldiscussion' },
    { key: 'airbnb', text: 'AirBnb Experience', value: 'airbnb' },
]

const thumbs = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { src: 'https://i.pinimg.com/236x/e9/9b/06/e99b06894c2ed43c0946092979b717a2--kawaii-marshmallow-cute-pics.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: false, src: 'https://i.pinimg.com/236x/e9/9b/06/e99b06894c2ed43c0946092979b717a2--kawaii-marshmallow-cute-pics.jpg' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: false, src: 'https://i.pinimg.com/236x/e9/9b/06/e99b06894c2ed43c0946092979b717a2--kawaii-marshmallow-cute-pics.jpg' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: false, src: 'https://i.pinimg.com/236x/e9/9b/06/e99b06894c2ed43c0946092979b717a2--kawaii-marshmallow-cute-pics.jpg' },
    },
  ]


class CreateEvent extends React.Component {


    state = {
        title: '',
        description: '',
        date: '',
        category: '',
        thumbnail: '',
        user_id: 27
    }

    changeHandler = (e, {name}) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    changeHandlerDropdown = (e, {name}) => {
        this.setState({ [name]: e.target.innerText })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
      console.log(this.props.user)
        return (
          <>
            { this.props.user ? 
            <>
            <Navbar/>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='grey' textAlign='center'>
                  <Image src='' /> HOST AN EVENT
                </Header>
                <Form size='large' onSubmit={this.submitHandler}>
              <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='Title' 
                    name='title'
                    value={this.state.title}
                    onChange={this.changeHandler}
                  />
                  <Form.TextArea 
                    fluid 
                    icon='envelope' 
                    iconPosition='left'
                    placeholder='Description'
                    name='description'
                    value={this.state.description}
                    onChange={this.changeHandler}
                  />
                  <Form.Input
                    fluid 
                    icon='lock'
                    iconPosition='left'
                    placeholder='date'
                    type='date'
                    name='date'
                    value={this.state.date}
                    onChange={this.changeHandler}
                  />

                
                    <Segment>
                        <Dropdown 
                            placeholder='Category' 
                            fluid 
                            selection 
                            options={category}
                            name='category'
                            value={this.state.category.value}
                            onChange={this.changeHandlerDropdown} 
                        />
                    </Segment>

                <Segment>
                    <Dropdown 
                        placeholder='Thumbnails' 
                        fluid 
                        selection 
                        options={thumbs} 
                        name='thumbnail'
                        value={this.state.thumbnail}
                        onChange={this.changeHandlerDropdown} 
                    />
                </Segment>
        
                  <Button color='grey' fluid size='large' type='submit'>
                    Host it!
                  </Button>
              </Form>

              </Grid.Column>
            </Grid>
            <Footer />
            </>
            :
            <>
            <Redirect to='/signup' />
            </>
            }
          </>
          )

        
    }
}

export default CreateEvent