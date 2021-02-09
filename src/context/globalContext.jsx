import React, { useState, useEffect, useMemo, useContext } from 'react'
import { useLocation } from 'react-router-dom'

const GlobalContext = React.createContext()

export const GlobalProvider=(props)=>{
    const currentPath= useLocation().pathname
    
    useEffect(()=>{

    },[])

    const value=useMemo(()=>{
        return({
            currentPath
        })
    },[currentPath])

    return <GlobalContext.Provider value={value} {...props} />
}

export const useGlobalContext=()=>{
    const context=useContext(GlobalContext)
    if(!context){
        throw new Error("Solo puede ser usado el contexto en una aplicación envuelta en él")
    }
    return context
}