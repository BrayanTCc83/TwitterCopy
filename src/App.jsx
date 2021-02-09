import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

//Routers and routes
import { Switch, Route } from 'react-router-dom'
import MainRouter from "./routes/mainRouter"
import routes from "./routes/routes"

//Context
import { GlobalProvider } from "./context/globalContext"

//Styles
import './global/index.css';

const App=()=>{
    return (
        <Switch>
            <Route path={routes.pages} >
                <MainRouter/> 
            </Route>
        </Switch>
    )
}

export default ()=><GlobalProvider>
    <App/>
</GlobalProvider>