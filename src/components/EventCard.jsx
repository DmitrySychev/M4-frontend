import React from 'react'
import { Card, Image, Button, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import EventShowPage from '../components/EventShowPage.jsx'


class EventCard extends React.Component{


             //* first level of if function: if there is not a user object, render buttons but they reroute to signin 
            //* second level if: if this.props.created === true, display the delete event button
            //* second level if: if this.props.joined === false, display joinEvent button, else display deleteUserEvent button ("no longer attending")
  joinedAndNotCreated=()=>{
    // console.log(this.props)
    return this.props.joined === 'true' && this.props.created === 'false' ?
              
    <Button size="small" onClick={()=> this.props.deleteUserEvent(this.props.event.id)}>No longer attending</Button>
                                                      // looking for the wrong id, need user_event id, not event id
    :     
    <Button size="small" onClick={()=> this.props.joinEvent(this.props.event.id)}>Join Event</Button>
  }

  render(){
  
    return (
     
      <>
       
        <Card className="four wide column" >
          <Image src='https://ca-times.brightspotcdn.com/dims4/default/90f23c8/2147483647/strip/true/crop/2400x1600+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' />
          <Card.Content>
            <Card.Header>{this.props.event.title}</Card.Header>
            <div id="date">Date: {this.props.event.date}</div>
            <Card.Description>
              {this.props.event.description}
            </Card.Description>
 
            <Container >
              <Segment vertical='true'>

              { this.props.user ?
              
              this.joinedAndNotCreated()
                :
              <Button size="small" as={Link} to="/login">Join Event</Button>}

              {this.props.created === 'true' ?  
                  <Button size='small' onClick={()=> this.props.deleteEvent(this.props.event.id)} >Delete Event</Button>
                      
                    :

                  console.log('')
              }

                <Button size='small' as={Link} to={'/events/' + this.props.event.id}   >Learn More</Button>
              </Segment>
            </Container>

          </Card.Content>
        </Card>
        </>
 
      )}
  
  
  }
  



export default EventCard;



