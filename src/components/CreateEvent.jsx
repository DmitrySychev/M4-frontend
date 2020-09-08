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
      key: 'zoomparty',
      text: 'Zoom Party',
      value: 'zoomparty',
      image: { src: 'https://ca-times.brightspotcdn.com/dims4/default/9321c96/2147483647/strip/true/crop/2400x1350+0+125/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' },
    },
    {
      key: 'happyhour',
      text: 'Happy Hour',
      value: 'happyhour',
      image: { avatar: false, src: 'https://i.https://res.cloudinary.com/simpleview/image/upload/v1562609933/clients/palmsprings/HappyHour_shutterstock_9516081f-6dc6-4844-a64a-e8834ecf2831.jpg.com/236x/e9/9b/06/e99b06894c2ed43c0946092979b717a2--kawaii-marshmallow-cute-pics.jpg' },
    },
    {
      key: 'gamenight',
      text: 'Game Night',
      value: 'gamenight',
      image: { avatar: false, src: 'https://i.https://mk0snacknationnm0gwv.kinstacdn.com/wp-content/uploads/2020/08/virtual_game_night.png.com/236x/e9/9b/06/e99b06894c2ed43c0946092979b717a2--kawaii-marshmallow-cute-pics.jpg' },
    },
    {
      key: 'politicaldiscussion',
      text: 'Political Discussion',
      value: 'politicaldiscussion',
      image: { avatar: false, src: 'https://ourpolitics.net/wp-content/uploads/2018/02/pov620-twitter.jpg' },
    },
    {
      key: 'airbnb',
      text: 'AirBnb Experience',
      value: 'airbnb',
      image: { avatar: false, src: 'https://www.nsbuzz.ca/wp-content/uploads/2020/06/airbnbexperiences.jpg' },
    }
  ]


class CreateEvent extends React.Component {


    state = {
        title: '',
        description: '',
        date: '',
        category: '',
        thumbnail: ''
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
        return (
          <>
            { this.props.user ? 
            <>
     
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