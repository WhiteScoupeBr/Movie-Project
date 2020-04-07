import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';


export default function Header(){
    return  (
        <header>
            <Link to="/">
                <h1>Movie Catalog</h1>
            </Link>
            <Link to="/register">
                <h3>Incluir</h3>
            </Link>
            

        </header>
        
    );
}