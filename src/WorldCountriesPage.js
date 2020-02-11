import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import colors from "./styles/modules/_colors.scss";

class WorldCountriesPage extends React.Component {
    constructor() {
        super();
        this.state = {
            countriesData: [],
            displayedCountries: [],
            savedCountriesData: [],
            theme: {
            	textColor: colors.lightModeText,
            	elementsColor: colors.lightModeElements
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
            	textColor: textColor,
            	elementsColor: elementsColor
            }
		});

	    document.getElementById("wc-body").style.background = backgroundColor;

	    let header = document.getElementById("wc-header");
	    header.style.background = elementsColor;
	    header.style.color = textColor;

	    let themeButton = document.getElementById("wc-theme-button");
	    themeButton.style.background = elementsColor;
	    themeButton.style.color = textColor;

	    document.getElementById("wc-theme-button-text").innerHTML = mode;

	    document.getElementById("regular-moon").style.display = moonIconVisibility;
	    document.getElementById("solid-sun").style.display = sunIconVisibility;

	    let searchBox = document.getElementById("wc-search-box");
	    searchBox.style.backgroundColor = elementsColor;
	    searchBox.style.borderColor = elementsColor;
	    searchBox.style.color = textColor;
	    
	    let dropdownBox = document.getElementById("wc-dropdown-box");
	    dropdownBox.style.backgroundColor = elementsColor;

	    let dropdownBoxOptions = dropdownBox.options;
	    for(let i = 0; i < dropdownBoxOptions.length; i++) {
	        dropdownBoxOptions[i].style.backgroundColor = elementsColor
	    }

	    dropdownBox.style.borderColor = elementsColor;
	    dropdownBox.style.color = textColor;

	    
	    let cards = document.getElementsByClassName("card");
	    for(let i = 0; i < cards.length; i++) {
	        cards[i].style.background = elementsColor;
	        cards[i].style.color = textColor;
	    }
	}

	handleClick() {
	    const mode = document.getElementById("wc-theme-button-text").innerHTML;

	    if(mode === "Dark Mode")
	        this.toggleThemeMode("Light Mode", colors.darkModeBackground, 
	        colors.darkModeText, colors.darkModeElements, "none", "inline");

	    else if(mode === "Light Mode")
	        this.toggleThemeMode("Dark Mode", colors.lightModeBackground, 
	        colors.lightModeText, colors.lightModeElements, "inline", "none");     
	}

    render() {
        return(
            <div>
                <Header
                    handleClick = {this.handleClick}
                />
                <Body
                    handleSubmit = {this.handleSubmit}
                    handleChange = {this.handleChange}
                    data = {this.state}
                />
            </div>
            );
      }
}

export default WorldCountriesPage;