import React from 'react'
import { checkContentList } from "../../functions"
const DropDown = (props) => {
    return (
        <div className="checkContent dropdownContainer dropdown " id={props.id} >
            <b id={`${props.id}-res`}></b>  
            <div className="dropdownMenu" >
            {
                props.options.map((option)=>
                    <div className="option" onClick={checkContentList} >{option}</div>
                )
            }
            </div>
        </div>
    ) 
}
export default DropDown