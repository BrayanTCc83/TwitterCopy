import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from "../../context/globalContext"
const PageLink=(props)=>{
    return(
        <Link className={`${props.className} ${useGlobalContext().currentPath===props.href?"selected":""}`} 
            to={props.href} onClick={props.onClick?props.onClick:null} >
            {props.children} 
            <span>{props.text}</span> 
        </Link>
    )
}
export default PageLink