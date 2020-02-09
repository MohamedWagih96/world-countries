import React from 'react';
import Form from './Form';
import Countries from './Countries';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            countriesData: [],
            displayedCountries: [],
            savedCountriesData: []
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => {
            this.setState({
                countriesData: data,
                displayedCountries: data,
                savedCountriesData: data
            });
        })
        .catch(error => console.log("ERROR: Data retrieving failed!"))
    }
    
    findCountry(text) {
        //let displayedCountries = this.state.displayedCountries;
        let savedCountriesData = this.state.savedCountriesData;

        if(text === "") {
            return savedCountriesData;
        }
        else {
            return savedCountriesData.filter(country => {
                return country.name.startsWith(text);
            });
        }
    }

    filterByRegion(region) {
        let allCountries = this.state.countriesData;
        return allCountries.filter(country => {
            return country.region === region;
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleSearchChange(event) {
        const {value} = event.target;
        let data = this.findCountry(value);

        this.setState({
            displayedCountries: data
        });
    }

    handleFilterChange(value) {
        let data = this.filterByRegion(value);
        this.setState({
            displayedCountries: data,
            savedCountriesData: data
        });
    }

    render() {
        return(
            <div className = "body-component-style">
                <Form 
                    handleSubmit = {this.handleSubmit}
                    handleSearchChange = {this.handleSearchChange}
                    handleFilterChange = {this.handleFilterChange}
                />

                <Countries 
                    data = {this.state.displayedCountries}
                />
            </div>
        );
    }
}

export default Body;