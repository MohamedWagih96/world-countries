import React from 'react';
import colors from "../styles/modules/_colors.scss";

function handleClick() {
    document.getElementById("wc-body").style.background = colors.darkModeBackground;

    document.getElementById("wc-header").style.background = colors.darkModeElements;
    document.getElementById("wc-header").style.color = colors.darkModeText;

    let searchBox = document.getElementById("wc-search-box");
    searchBox.style.background = colors.darkModeElements;
    searchBox.style.borderColor = colors.darkModeElements;
    searchBox.style.color = colors.darkModeText;
    
    let dropdownBox = document.getElementById("wc-dropdown-box");
    dropdownBox.style.backgroundColor = colors.darkModeElements;

    let dropdownBoxOptions = dropdownBox.options;
    for(let i = 0; i < dropdownBoxOptions.length; i++) {
        dropdownBoxOptions[i].style.backgroundColor = colors.darkModeElements;
    }

    dropdownBox.style.borderColor = colors.darkModeElements;
    dropdownBox.style.color = colors.darkModeText;

    
    let cards = document.getElementsByClassName("card");
    for(let i = 0; i < cards.length; i++) {
        cards[i].style.background = colors.darkModeElements;
        cards[i].style.color = colors.darkModeText;
    }
}

function Header() {
    return(
        <div className = "header-component-style" id = "wc-header">
            <h3 className = "header-title">Where in the world?</h3>
            <button className = "theme-mode" onClick = {handleClick}>
                <span><i className="far fa-moon"></i></span>&nbsp;Dark Mode
            </button>
        </div>
    );
}

export default Header;