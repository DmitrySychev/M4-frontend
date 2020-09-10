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



    render() {

        return (
            
            <Dropdown 
            clearable 
            options={options} 
            selection
            text=''
            onChange={(e, data) => this.props.searchHandler(e, data)}
            
            />
        )
    }
}

export default SearchForm;