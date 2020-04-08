import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';
import List from './pages/List';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={Main}/>
                <Route path="/register" exact component ={Register}/>
                <Route path="/list" exact component ={List}/>
            </Switch>
        </BrowserRouter>
    );
}
