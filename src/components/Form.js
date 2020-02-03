import React from 'react';
import Select from 'antd/es/select';
import 'antd/es/select/style/index.css';

const {Option} = Select;

function Form(props) {
    return(
        <form className = "body-header" onSubmit = {props.handleSubmit}> 
            <input 
                id = "searchBox"
                className = "search-box"
                type = "text" 
                name = "searchBox" 
                placeholder = "Search for a country..."
                onChange = {props.handleSearchChange}
            />

            <Select 
                className = "filter-box" 
                defaultValue="Filter by Region"  
                style= {{width: 165}}
                size = {"large"}
                onChange = {props.handleFilterChange}
            >
                <Option value="Africa">Africa</Option>
                <Option value="Americas">Americas</Option>
                <Option value="Asia">Asia</Option>
                <Option value="Europe">Europe</Option>
                <Option value="Oceania">Oceania</Option>
            </Select>
        </form>
    );
}

export default Form;