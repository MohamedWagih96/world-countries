import React from 'react';
import Form from './Form';
import Countries from './Countries';
import './Body.css';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            countriesData: [],
        }
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => {
            this.setState({
                countriesData: data
            });
        })
        .catch(error => console.log("ERROR: Data retrieving failed!"))
    }

    render() {
        return(
            <div className = "body-component-style">
                <Form />

                <Countries 
                    data = {this.state.countriesData}
                />
            </div>
        );
    }
}

export default Body;