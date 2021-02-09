import React from 'react'
import { useGlobalContext } from "../../context/globalContext"
import "./index.css"
const Header=()=>{
    let pageTitle=useGlobalContext().currentPath.split('/')[3]
    pageTitle=pageTitle.replace(pageTitle.charAt(0),pageTitle.charAt(0).toUpperCase())
    const toggleSection=()=>{
        let section=document.getElementById("navigation")
        section.classList.toggle("show")
    }
    return(
        <header>
            <div id="iconContainer" >
                <i className="mascara" id="twitterIcon"></i>
            </div>
            <div id="sectionTitle" >
                <i className="userIcon" onClick={()=>toggleSection()} ></i>
                <span>{pageTitle}</span>
            </div>
            <div id="searchContainer" >
                <form action="" id="searchForm" >
                    <input type="search" name="" id="" placeholder="Buscar en Twitter"/>
                    <span className="mascara" id="searchIcon"></span>
                </form>
            </div>
        </header>
    )
}
export default Header