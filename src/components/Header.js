import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = (props)=>{
    return (
        <header>
            <NavLink exact activeclassname="active" to="/calculator">Calculator</NavLink>
            <NavLink exact activeclassname="active" to="/dashboard">Dashboard</NavLink>
        </header>
    );
};
export default Header