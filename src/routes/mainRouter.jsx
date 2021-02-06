import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
//Router and routes
import { Link, Route } from 'react-router-dom'
import routes from "./routes"
//Components
import Header from "../components/header"
import Navigation from "../components/navigation"
import News from "../components/news"
//Files and Views
import MainPage from "../views/interface/main"
const MainRouter=()=>{
    return(
        <Fragment>
            <Route exact path={routes.main} render={()=>
                <div>
                    <Header pageTitle={"Home"} />
                    <Navigation/>
                    <MainPage/>
                    <News/>
                </div>}>
            </Route>
        </Fragment>
    )
}
export default MainRouter