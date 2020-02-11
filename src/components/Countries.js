import React from 'react';

function Countries(props) {
    const styles = {
        background: props.data.theme.elementsColor,
        color: props.data.theme.textColor
    }
    
    return(
        <div className = "countries-layout">
            {
                props.data.displayedCountries.map(country => {
                    return(
                    <div className = "card" key = {country.numericCode} style = {styles}>
                        <img 
                            className = "card-flag-image"
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
        </div>
    );
}

export default Countries;