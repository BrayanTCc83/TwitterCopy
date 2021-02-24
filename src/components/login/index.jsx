import React from 'react'
import { Link } from 'react-router-dom'

import routes from "../../routes/routes"

import { checkContent } from "../../functions"
import "./index.css" 
const LoginForm = (props) => {
    return(
        <form id="log-in" >
            <input className="checkContent" type="text" name="log-user" id="log-user" onInput={checkContent} />
            <span>Phone, email or username</span>
            <input className="checkContent" type="password" name="log-password" id="log-password" onInput={checkContent} />
            <span>Password</span>
            <div id="log-redirect" >
                <a>I forget My Password</a>
                {props.sign?<Link to={routes.register} > - Sign up</Link>:null}
            </div>
            <input type="submit" id="log-submit" className="style2" value="Log in" />
        </form>
    )
}
export default LoginForm