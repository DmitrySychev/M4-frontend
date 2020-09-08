import React from 'react'
import { Segment, Container, Header, Image } from 'semantic-ui-react'
import Footer from '../components/Footer.jsx'


class EventShowPage extends React.Component{

  state = {
    event: '',
    eventCreator: null,
    attendees: null
  }

  componentDidMount() {
    const eventId = window.location.href.split('/')[4]
    const foundEvent = this.props.data.find(ele => ele.id == eventId)
    this.setState({ event: foundEvent})

    fetch("http://localhost:3000/events/"+eventId)
    .then(resp => resp.json())
    .then(resp => {
      // console.log("found event from DB", resp)
      this.setState({eventCreator: resp.created_by.username, attendees: resp.attendees}, ()=>console.log(this.state))
    })
  }

  mapAtendees=()=>{
    if (this.state.attendees) {
      
     return this.state.attendees.map(atendee => atendee.username.split(''))
        
    } else {

     return  "There's no one attending this event yet!"
    }

    
  }

  render() {
    // console.log(this.state.attendees.map(atendee => atendee.username))
    return (

      this.state.event ? 
        <div style={{paddingTop: 10 + 'em'}} >
        <Container className="ui very padded segment" >

          { this.state.event.thumbnail ?

            <Segment size='large'>
            <Image src={this.state.event.thumbnail} />
            </Segment>

            :

           <Segment size='large'>
              <Image src='https://ca-times.brightspotcdn.com/dims4/default/90f23c8/2147483647/strip/true/crop/2400x1600+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' />
            </Segment>
          }

            <Segment size='large'>
              <Header text='title' textAlign='center'>{this.state.event.title}</Header>
            </Segment>

            <Segment text textAlign='center'>
                {this.state.event.description}
            </Segment>

            <Segment size='large'>
                Here's everyone that's attendting this event: {this.mapAtendees()}
            </Segment>

        </Container>

        <Footer />
        </div>

        :

        <>
        </>
      )}
  }
  



export default EventShowPage;

