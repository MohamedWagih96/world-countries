import React from "react";

function Header(props) {
    let headerStyle = {backgroundColor: props.theme.elementsColor, color: props.theme.textColor};
    let mode = props.theme.mode;

    return(
        <div className = "header-component-style" id = "wc-header" style = {headerStyle}>
            <h3 className = "header-title">Where in the world?</h3>
            <button className = "theme-button" id = "wc-theme-button" onClick = {props.handleClick} style = {headerStyle}>
                <span>
                    <i className = "far fa-moon" id = "regular-moon"></i>
                    <i className = "fas fa-sun" id = "solid-sun"></i>
                </span>
                &nbsp;{mode}
            </button>
        </div>
    );
}

export default Header;