import React from 'react';
import Select from 'antd/es/select'; // for js
import 'antd/es/select/style/index.css'; // for css

const { Option } = Select;

function Form(props) {
    return(
        <form className = "body-header"> 
            <input 
                className = "search-box"
                type = "text" 
                name = "searchText" 
                placeholder = "Search for a country..." 
            />

        <Select className = "filter-box" defaultValue="Filter by Region" style={{ width: 165 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
        </Select>
        </form>
    );
}

export default Form;