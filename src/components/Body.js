import React from "react";
import Form from "./Form";
import Countries from "./Countries";

function Body(props) {
    return(
        <div className = "body-component-style" id = "wc-body" style = {{backgroundColor: props.data.theme.backgroundColor}}>
            <Form 
                handleSubmit = {props.handleSubmit}
                handleChange = {props.handleChange}
                theme = {props.data.theme}
                searchText = {props.searchText}
                selectedRegion = {props.selectedRegion}
            />

            <Countries 
                data = {props.data}
            />
        </div>
    );
}

export default Body;