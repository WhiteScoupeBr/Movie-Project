import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';
import List from './pages/List';
import UserRegister from './pages/UserRegister';
import Search from './pages/Search';
import MovieUpdate from './pages/MovieUpdate';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={Main}/>
                <Route path="/register" exact component ={Register}/>
                <Route path="/list" exact component ={List}/>
                <Route path="/userRegister" exact component ={UserRegister}/>
                <Route path="/search" exact component ={Search}/>
                <Route path="/movieUpdate" exact component ={MovieUpdate}/>
            </Switch>
        </BrowserRouter>
    );
}
