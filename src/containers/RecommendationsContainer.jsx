import React from 'react';
import EventCard from '../components/EventCard'
import { Segment } from 'semantic-ui-react'

class RecommendationsContainer extends React.Component {

    state = {
        topThreeEvents: null,
        recommendedEvents: []
    }

    componentDidMount(){
        this.getRecommendations()
    }

    getRecommendations=()=>{
        const token = localStorage.getItem("token")
        fetch("http://localhost:3000/api/v1/me/recommendations", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
          })
        .then(resp => resp.json())
        .then(resp => {
            if(resp.top_three_events){
                this.setState({topThreeEvents: resp}, ()=> this.generateRecommendations())
            }else {console.log("bad response")}
        })
    }


    generateRecommendations=()=>{
        if(this.state.topThreeEvents){
            const recommendedEvents = []
            const topThreeEvents = this.state.topThreeEvents.top_three_events
    
    
            topThreeEvents.forEach((eventCategory)=>{
                const events = this.props.events.filter(event => event.category === eventCategory)
                recommendedEvents.push(events)
            })
    
            this.setState({recommendedEvents: recommendedEvents.flat()})
        }
    }
    

    renderRecommendations=()=>{
        if(this.state.topThreeEvents){
                return this.state.recommendedEvents.map(event => {
                    return (<EventCard
                    key={event.id} 
                    event={event}
                    events={this.props.events}
                    joinedEvents={this.props.joinedEvents} 
                    learnMore={this.props.learnMore} 
                    joinEvent={this.props.joinEvent}
                    user={this.props.user}
                    deleteUserEvent={this.props.deleteUserEvent}
                    />)
                })
                
            }
        }
        
    



    render() {
        return (
            <div>

                    <h1>Recommended events</h1>  
                    <Segment className="ui grid container">
                    {this.state.topThreeEvents && this.state.topThreeEvents.top_three_events.length !== 0 ?
                    this.renderRecommendations() 
                    :
                    <p>To get recommendations, please RSVP yes to an event!</p>}
                    </Segment>    
            
            </div>
        )
    }

}

export default RecommendationsContainer;