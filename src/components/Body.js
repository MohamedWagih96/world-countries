import React from 'react';
import Form from './Form';
import Countries from './Countries';
import './Body.css';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            countriesData: [],
            displayedCountries: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => {
            this.setState({
                countriesData: data,
                displayedCountries: data
            });
        })
        .catch(error => console.log("ERROR: Data retrieving failed!"))
    }

    filterByRegion(region) {
        let allCountries = this.state.countriesData;
        let filteredCountries = allCountries.filter(country => {
            return country.region === region;
        });

        return filteredCountries;
    }

    handleChange(value) {
        let filteredCountries = this.filterByRegion(value);
        this.setState({
            displayedCountries: filteredCountries
        });
    }

    render() {
        return(
            <div className = "body-component-style">
                <Form 
                    handleChange = {this.handleChange}
                />

                <Countries 
                    data = {this.state.displayedCountries}
                />
            </div>
        );
    }
}

export default Body;