import React from 'react';
import Form from './Form';
import Countries from './Countries';

function Body(props) {
    return(
        <div className = "body-component-style" id = "wc-body">
            <Form 
                handleSubmit = {props.handleSubmit}
                handleChange = {props.handleChange}
            />

            <Countries 
                data = {props.data}
            />
        </div>
    );
}

export default Body;