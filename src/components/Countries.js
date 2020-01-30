import React from 'react';

function getCountries(data) {
   
    return data.map(country => {
        return(
            <div className = "card">
                <img 
                    className = "flag-image"
                    src = {country.flag} 
                    alt = "Country's Flag"
                />
                <div className = "card-info">
                    <h3><b>{country.name}</b></h3>

                    <p><b>Population:</b> {country.population}</p>
                    <p><b>Region:</b> {country.region}</p>
                    <p><b>Capital:</b> {country.capital}</p>
                </div>
            </div>
        );
    })
}

function Countries(props) {
    const countries = getCountries(props.data);

    return(
        <div className = "countries-layout">
            {countries}
        </div>
    );
}

export default Countries;