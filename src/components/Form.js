import React from 'react';
import Select from 'antd/es/select';
import 'antd/es/select/style/index.css';

const { Option } = Select;

function Form(props) {
    return(
        <form className = "body-header"> 
            <input 
                className = "search-box"
                type = "text" 
                name = "searchBox" 
                placeholder = "Search for a country..." 
            />

        <Select 
            className = "filter-box" 
            defaultValue="Filter by Region" 
            onChange = {props.handleChange} 
            dropdownMatchSelectWidth = {false} 
            size = {"large"}
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