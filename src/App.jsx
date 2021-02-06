import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

//Routers and routes
import { Link, BrowserRouter, Switch } from 'react-router-dom'
import MainRouter from "./routes/mainRouter"

//Styles
import './App.css';

const App=()=>{
    return (
        <BrowserRouter>
            <Switch>
                <MainRouter/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
