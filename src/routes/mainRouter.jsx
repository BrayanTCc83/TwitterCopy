import React, { Fragment, useState, useEffect } from 'react'

//Router and routes
import { Route } from 'react-router-dom'
import routes from "./routes"

//Components
import Header from "../components/header"
import Navigation from "../components/navigation"
import News from "../components/news"
import useLocalStorage from "../hooks/localstorage"

//Files and Views
import MainPage from "../views/interface/main"
import DisplayConfiguration from "../views/interface/displayConfiguration"

//Styles
import "../global/index.css"

const MainRouter=()=>{
    const displayConfigName="TwitterAppDisplayConfiguration"
    const [localDisplayConfiguation,setDisplayConfiguration]=useLocalStorage(displayConfigName,{color:"",background:"",font:""})
    const [showDisplayConfiguration, toggleDisplayConfiguration]=useState(false)
    const updateDisplay=()=>{
        if(localDisplayConfiguation.color){
            let root=document.getElementById("root")
            root.classList.forEach(async(classItem)=>{
                if(classItem.substr(0,6)=="Schema"){ 
                    root.classList.remove(classItem)
                }
            })
            root.classList.add(localDisplayConfiguation.color)
        }
        if(localDisplayConfiguation.background){
            let root=document.getElementById("root")
            root.classList.forEach(async(classItem)=>{
                if(classItem==="backWhite"||classItem==="backDim"||classItem==="backBlack"){
                    root.classList.remove(classItem)
                }
            })
            root.classList.add(localDisplayConfiguation.background)
        }
        if(localDisplayConfiguation.font){
            let root=document.getElementById("root")
            root.style.fontSize=`${localDisplayConfiguation.font}px`
        }
    }
    useEffect(()=>{  
        updateDisplay()
    })
    return(
        <Fragment>
            <div id="pages" >
                <Header/>
                <Navigation toggleDisplayConfiguration={toggleDisplayConfiguration} />
                <News/>
                {showDisplayConfiguration==true?<DisplayConfiguration 
                    setDisplayConfiguration={setDisplayConfiguration}
                    localDisplayConfiguation={localDisplayConfiguation}
                    toggleDisplayConfiguration={toggleDisplayConfiguration} 
                    updateDisplay={updateDisplay} />:null}
                <Route exact path={routes.main} >
                    <MainPage/>
                </Route>
            </div>
        </Fragment>
    )
}
export default MainRouter