import React from 'react';
import Select from 'antd/es/select';
import "./filter.css";

const {Option} = Select;

function Form(props) {
    return(
        <form className = "body-header" onSubmit = {props.handleSubmit}> 
            <input 
                id = "wc-search-box"
                className = "search-box"
                type = "text" 
                name = "searchBox" 
                placeholder = "Search for a country..."
                onChange = {props.handleSearchChange}
            />

            <select className = "dropdown-box" id = "wc-dropdown-box">
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