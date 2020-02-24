import React, {Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import CountryDetails from "./components/CountryDetails";
import colors from "./styles/modules/_colors.scss";

class WorldCountriesPage extends React.Component {
    constructor() {
        super();
        this.state = {
            countriesData: [],
            displayedCountries: [],
            savedCountriesData: [],
            theme: {
                mode: "Dark Mode",
                backgroundColor: colors.lightModeBackground,
            	textColor: colors.lightModeText,
                elementsColor: colors.lightModeElements,
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clearDisplayedSearchResult = this.clearDisplayedSearchResult.bind(this);
        this.toggleThemeMode = this.toggleThemeMode.bind(this);
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => {
            let cleanData = this.cleanData(data);

            this.setState({
                countriesData: cleanData,
                displayedCountries: cleanData,
                savedCountriesData: cleanData
            });
        })
        .catch(error => console.log("ERROR: Data retrieving failed!"))
    }

    clearDisplayedSearchResult() {
        this.setState({
            displayedCountries: this.state.savedCountriesData
        })
    }

    cleanData(countries) {
        return countries.map(country => {
            if(country.name.includes("(")){
                let modifiedCountry = country;
                modifiedCountry.name = country.name.replace(/ of( the|)/g, "");
				return modifiedCountry;
            }
			else
				return country;
        });
    }
    
    findCountry(text) {
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

    handleChange(event) {
        const {name, value} = event.target;

        if(name === "searchBox") {
            let text = value;
            let countryName = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

            let data = this.findCountry(countryName);
            this.setState({
                displayedCountries: data
            });
        }

        else if(name === "dropdownBox") {
            let data = this.filterByRegion(value);
            this.setState({
                displayedCountries: data,
                savedCountriesData: data
            });
        }
    }

	toggleThemeMode(mode, backgroundColor, textColor, elementsColor, moonIconVisibility, sunIconVisibility) {
		this.setState({
			theme: {
                mode: mode,
                backgroundColor: backgroundColor,
            	textColor: textColor,
            	elementsColor: elementsColor
            }
        });
        
        document.getElementById("regular-moon").style.display = moonIconVisibility;
	    document.getElementById("solid-sun").style.display = sunIconVisibility;
	}

	handleClick() {
	    const mode = this.state.theme.mode;

	    if(mode === "Dark Mode")
	        this.toggleThemeMode("Light Mode", colors.darkModeBackground, 
	        colors.darkModeText, colors.darkModeElements, "none", "inline");

	    else if(mode === "Light Mode")
	        this.toggleThemeMode("Dark Mode", colors.lightModeBackground, 
	        colors.lightModeText, colors.lightModeElements, "inline", "none");     
	}

    render() {
        return(
            <Router>
                <Switch>
                    <Fragment>
                        <Header
                            handleClick = {this.handleClick}
                            theme = {this.state.theme}
                        />
                        <Route 
                            exact path = "/" 
                            render = {
                                (props) => <Body 
                                                {...props} 
                                                data = {this.state}
                                                handleSubmit = {this.handleSubmit} 
                                                handleChange = {this.handleChange}
                                            />
                                    } 
                        />
                        <Route 
                            path = "/:countryName" 
                            render = {
                                (props) => <CountryDetails 
                                                {...props}
                                                data = {this.state.countriesData}
                                                theme = {this.state.theme}
                                                clearDisplayedSearchResult = {this.clearDisplayedSearchResult}
                                            />
                                    }
                        />
                    </Fragment>
                </Switch>
            </Router>
            );
      }
}

export default WorldCountriesPage;