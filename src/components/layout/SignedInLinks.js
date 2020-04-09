import React from 'react';
import { NavLink } from 'react-router-dom';

const SingedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>KM</NavLink></li>
        </ul>
    )
}

export default SingedInLinks;