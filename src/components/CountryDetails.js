import React from "react";
import {Link} from "react-router-dom";

function getCountry(countries, name = "", code = "") {
	let data;

	//Return all the country's data
	if(name !== "" && code === "") data = countries.find(country => country.name === name);

	//Return only the country's name using it's Alpha3Code
	else if(name === "" && code !== "") {
		data = countries.map(country => {
			if(country.alpha3Code === code) return country.name;
		})
		.filter(country => country !== undefined); //Remove the empty items
	}

	return data;
}

function handleClick(props) {
	props.history.listen(props.clearDisplayedSearchResult);
	props.history.goBack();
}

function updateTheme(theme) {
	document.getElementById("wc-country-details-body").style.background = theme.backgroundColor;
}

function CountryDetails(props) {
	let country = getCountry(props.data, props.match.params.countryName, undefined);
	let history = props.history;
	let backgroundColor = props.theme.elementsColor;
	let textColor = props.theme.textColor;
	let elementsColor = props.theme.elementsColor;
	let buttonStyle = {backgroundColor: elementsColor, color: textColor};

	return(
		<div className = "country-details-layout" style = {{backgroundColor: backgroundColor}}>
			<div className = "country-details-left-column">
				<button className = "country-details-left-column-back-button" onClick = {() => handleClick(props)} style = {buttonStyle}>
						<i className = "fas fa-arrow-left"></i>&nbsp;&nbsp;Back
				</button>

				<div className = "country-details-left-column-image">
					<img src = {country.flag} alt = "Country's Flag"/>
				</div>
			</div>
			
			<div className = "country-details-text" style = {{color: textColor}}>
				<div className = "country-details-text-title"><p><b>{country.name}</b></p></div>
				<div className = "country-details-text-column">
					<div className = "country-details-text-column-left">
						<p><b>Native Name: </b>{country.nativeName}</p>
						<p><b>Population: </b>{country.population}</p>
						<p><b>Region: </b>{country.region}</p>
						<p><b>Sub Region: </b>{country.subregion}</p>
						<p><b>Capital: </b>{country.capital}</p>
					</div>
					<div className = "country-details-text-column-right">
						<p><b>Top Level Domain: </b>{country.topLevelDomain}</p>

						<p><b>Currencies: </b>{country.currencies.map(currency => {
							return(
								<React.Fragment key = {country.numericCode + currency.name}>
									{currency.name} </React.Fragment>
							);
						})}</p>

						<p><b>Languages: </b>{country.languages.map(language => {
							return(
								<React.Fragment key = {country.numericCode + language.name}>
									{language.name} </React.Fragment>
							);
						})}</p>
					</div>
					
				</div>

				<div className = "country-details-text-borders-row">
					<label style = {country.borders.length === 0 ? 
									{visibility: "hidden"} : 
									{visibility: "visible", marginRight: "10px"}}
					>
						<b>Border Countries:</b>
					</label>

					{country.borders.map(borderCountry => {
						let countryName = getCountry(props.data, undefined, borderCountry)[0];

						return(
							<Link  key = {countryName} to = {`/${countryName}`} style = {{textDecoration: "none"}}>
								<button className = "borderCountriesLinks" style = {buttonStyle}>
									{countryName}
								</button>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
		
		);
}

export default CountryDetails;