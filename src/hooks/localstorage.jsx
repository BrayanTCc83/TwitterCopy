import React, { useState } from 'react'
const useLocalStorage=(key, initialValue)=>{
    const  [storageValue, setValue]=useState(()=>{
        try{
            const item=window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        }catch(error){
            return initialValue
        }
    })
    const setStorageValue=(value)=>{
        try{
            setValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        }catch(error){
            console.log("error")
        }
    }
    return [storageValue, setStorageValue]
}
export default useLocalStorage