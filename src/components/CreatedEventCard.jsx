import React from 'react'
import { Card, Image, Button, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class CreatedEventCard extends React.Component{



  render(){
    console.log(this.props.createdEvents)
    return (
     
      <>
       
        <Card className="four wide column" >
          <Image src='https://ca-times.brightspotcdn.com/dims4/default/90f23c8/2147483647/strip/true/crop/2400x1600+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2F37%2Ff1c988db40109234e505b4891a05%2Fla-zoom-party-etiquette.jpg' />
          <Card.Content>
            <Card.Header>{this.props.event.title}</Card.Header>
            <div id="date">Date: {this.props.event.date}</div>
            <Card.Description >
              {this.props.event.description}
            </Card.Description>
 
            <Container >
              <Segment vertical='true'>
              <Button size='small' onClick={()=> this.props.deleteEvent(this.props.event.id)} >Delete Event</Button>
              <Button size='small' as={Link} to={'/events/' + this.props.event.id}   >Learn More</Button>

              </Segment>
            </Container>

          </Card.Content>
        </Card>
        </>
 
      )}
  
  
  }
  



export default CreatedEventCard;