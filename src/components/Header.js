import React from 'react';
import './Header.css'

function Header() {
    return(
        <div className = "header-component-style">
            <h3 className = "header-title">Where in the world?</h3>
            <button className = "theme-mode">Dark Mode</button>
        </div>
    );
}


export default Header;