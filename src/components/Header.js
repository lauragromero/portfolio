import React from 'react';
import {Link} from 'react-router-dom';

const Header =()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./about">Sobre Mi</Link></li>
                    <li>Proyectos</li>
                    <li>Skills</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;