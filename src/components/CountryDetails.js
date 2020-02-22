import React from "react";

function getCountry(countries, name = "", code = "") {
	let data;

	//Return all the country's data
	if(name !== "" && code === "") data = countries.find(country => country.name === name);

	//Return only the country's name using it's Alpha3Code
	else if(name === "" && code !== "") {
		data = countries.map(country => {
			let countryName = country.name;
			let char = countryName.indexOf("(");
			if(country.alpha3Code === code) 
				return countryName.substring(0, char !== -1 ? char : countryName.length);
		});
	}

	return data;
}

function CountryDetails(props) {
	let country = getCountry(props.data, props.match.params.countryName, undefined);

	return(
		<div className = "country-details-layout">
			<div className = "country-details-image">
				<button>Back</button>
				<img src = {country.flag} alt = "Country's Flag"/>
			</div>
			
			<div className = "country-details-text">
				<div className = "country-details-text-column">
					<div className = "country-details-text-column-left">
						<h1>{country.name}</h1>
						<p><b>Native Name: </b>{country.nativeName}</p>
						<p><b>Population: </b>{country.population}</p>
						<p><b>Region: </b>{country.region}</p>
						<p><b>Sub Region: </b>{country.subregion}</p>
						<p><b>Capital: </b>{country.capital}</p>
					</div>

					<div className = "country-details-text-column-right">
						<p><b>Top Level Domain: </b>{country.topLevelDomain}</p>
						<p><b>Currencies: </b>{country.currencies.map(currency => <>{currency.name} </>)}</p>
						<p><b>Languages: </b>{country.languages.map(language => <>{language.name} </>)}</p>
					</div>
				</div>

				<div className = "country-details-text-borders-row">
					<label style = {{marginRight: "10px"}}><b>Border Countries: </b></label>
					{country.borders.map(borderCountry => {
						return(
							<button className = "borderCountriesLinks">
								{getCountry(props.data, undefined, borderCountry)}
							</button>
						);
					})}
				</div>
			</div>
		</div>
		);
}

export default CountryDetails;