import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';


export default function Header(){
    return  (
        <header>
            <div>
                
            </div>
            <Link to="/list">
                <h1>Movie Catalog</h1>
            </Link>
            <Link to="/register">
                <h3>Incluir</h3>
            </Link>
            <Link to="/list">
                <h3>Lista</h3>
            </Link>
            <Link to="/search">
                <h3>Buscar </h3>
            </Link>
            <Link to="/">
            <h3>Logout </h3>
            </Link>
            

        </header>
        
    );
}