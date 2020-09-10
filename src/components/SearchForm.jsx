import React from 'react';
import Footer from './Footer.jsx';
import { Redirect } from 'react-router-dom';
import { Input, Form, Grid, Header, Image, Dropdown, Segment } from 'semantic-ui-react';


const options = [
    { key: 1, text: 'Zoom Party', value: 'Zoom Party' },
    { key: 2, text: 'Happy Hour', value: 'Happy Hour' },
    { key: 3, text: 'Game Night', value: 'Game Night' },
    { key: 4, text: 'Political Discussion', value: 'Political Discussion' },
    { key: 5, text: 'AirBnB Experience', value: 'AirBnB Experience' },
]

  
class SearchForm extends React.Component{


    dateHandler=(e)=>{
        // console.log(e.target.value)
        this.props.dateHandler(e)
    }

    render() {

        console.log("props in search form", this.props)
        return (
            <>
            <Dropdown 
            clearable 
            options={options} 
            selection
            value={this.props.searchCategory}
            text=''
            onChange={(e, data) => this.props.searchHandler(e, data)}
            />

            <label for="start">Start date:</label>

            <input onChange={this.dateHandler} type="date" id="start" name="trip-start"
            min="2020-09-10" max="2020-09-20" value={this.props.searchDate}></input>
            <button onClick={this.props.resetFilteredEventsArray}>Reset Form</button>
            </>

        )
    }
}

export default SearchForm;