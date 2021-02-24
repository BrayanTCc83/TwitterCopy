import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

//Routers and routes
import { Switch, Route } from 'react-router-dom'
import MainRouter from "./routes/mainRouter"
import routes from "./routes/routes"

//Landing
import Landing from "./views/landing"
import Login from "./components/login"
import SignUp from "./views/auth/register"

//Context
import { GlobalProvider } from "./context/globalContext"

import "./App.css"
const App=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Landing} />

            <Route exact path={routes.login} render={()=><Login sign />} />

            <Route exact path={routes.register}>
                <Landing/>
                <SignUp/>
            </Route>

            <Route path={routes.pages} >
                <MainRouter/>
            </Route>
        </Switch>
    )
}

export default ()=><GlobalProvider>
    <App/>
</GlobalProvider>