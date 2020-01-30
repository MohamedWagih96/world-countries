import React from 'react';

function Form(props) {
    return(
        <form className = "body-header"> 
            <input 
                className = "search-box"
                type = "text" 
                name = "searchText" 
                placeholder = "Search for a country..." 
            />

            <select className = "filter-box">
                <option enabled = "false">Filter by Region</option>
                <option value = "opt1">opt1</option>
                <option value = "opt2">opt2</option>
                <option value = "opt3">opt3</option>
            </select>
        </form>
    );
}

export default Form;