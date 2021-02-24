import React from 'react'
import { Link } from 'react-router-dom'

import LoginForm from "../../components/login"

import routes from "../../routes/routes"

import "./index.css"
const Landing = () => {
    return(
        <div id="landing" >
            <section id="sec" >
                <i id="twitterIcon" className="mascara mainIcon" />
            </section>
            <main>
                <LoginForm/>
                <i id="twitterIcon" className="mascara" />
                <h1 className="landingImpactText" >Happening now</h1>
                <h2>Join Twitter today</h2>
                <Link to={routes.register}><button>Sign up</button></Link>
                <Link to={routes.login}><button className="style2" >Log in</button></Link>
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default Landing