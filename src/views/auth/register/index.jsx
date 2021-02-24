import React from 'react'
import { Link } from 'react-router-dom'
import DropDown from "../../../components/dropdown"
import { checkContent } from "../../../functions"
import "./index1.css"
const SignUp = () => {
    return (
        <div className="shadowLayout" >
            <form id="register-view" >
                <Link to="/" ><i id="twitterIcon" className="mascara" /></Link>
                <h2 id="register-create" >Create your account</h2>
                <input id="register-user" className="checkContent" onChange={checkContent} type="text"  />
                <span>Name</span>
                <input id="register-phone" className="checkContent" onChange={checkContent} type="number"/>
                <span>Phone</span>
                <p id="register-useEmail">Use email instead</p>
                <h3 id="register-date" >Date of birth</h3>
                <p id="register-info">
                    This will not be shown publicity. Confirm your own age, even this accounts is for a business, a pet, or something else
                </p>
                <DropDown options={["January"]} id="register-month"/>
                <span>Month</span>
                <DropDown options={["2020"]} id="register-day"/>
                <span>Day</span>
                <DropDown options={["2020"]} id="register-year"/>
                <span>Year</span>
                <input id="register-next" type="submit" value="Next"/>
            </form>
        </div>
    )
}

export default SignUp 