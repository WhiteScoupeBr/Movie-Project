import React from 'react';

import './styles.css';
import Header from '../Header'

export default function Main(){

    return (
        <div className="wrap">
            <div className="head">
                <Header/>
            </div>
            <div>
                <form>
                    <input placeholder="Título" type="text"/>
                </form>
            </div>
        </div>
    );
}