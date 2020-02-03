import React from 'react';
import { Button } from 'antd';
import 'antd/es/button/style/index.css';

import './Header.css'

function Header() {
    return(
        <div className = "header-component-style">
            <h3 className = "header-title">Where in the world?</h3>
            <Button className = "theme-mode" type="link"><span><i className="far fa-moon">
                </i></span>&nbsp;Dark Mode
            </Button>
        </div>
    );
}

export default Header;