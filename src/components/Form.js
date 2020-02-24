import React from 'react';

function Form(props) {
    let inputStyle = {backgroundColor: props.theme.elementsColor, color: props.theme.textColor};
    
    return(
        <form className = "body-header" onSubmit = {props.handleSubmit}> 
            <input 
                id = "wc-search-box"
                className = "search-box"
                type = "text" 
                name = "searchBox" 
                placeholder = "Search for a country..."
                onChange = {props.handleChange}
                style = {inputStyle}
            />

            <select 
                id = "wc-dropdown-box" 
                className = "dropdown-box" 
                name = "dropdownBox"
                onChange = {props.handleChange}
                style = {inputStyle}
            >
                <option value = "Africa">Africa</option>
                <option value = "Americas">Americas</option>
                <option value = "Asia">Asia</option>
                <option value = "Europe">Europe</option>
                <option value = "Oceania">Oceania</option>
            </select>
        </form>
    );
}

export default Form;