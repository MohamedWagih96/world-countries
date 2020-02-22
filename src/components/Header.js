import React from 'react';

function Header(props) {
    return(
        <div className = "header-component-style" id = "wc-header">
            <h3 className = "header-title">Where in the world?</h3>
            <button className = "theme-button" id = "wc-theme-button" onClick = {props.handleClick}>
                <span>
                    <i className="far fa-moon" id = "regular-moon"></i>
                    <i className="fas fa-sun" id = "solid-sun"></i>
                </span>
                &nbsp;<span id = "wc-theme-button-text">Dark Mode</span>
            </button>
        </div>
    );
}

export default Header;