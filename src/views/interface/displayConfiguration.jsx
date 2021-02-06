import React, {useState} from 'react'
import useLocalStorage from "../../hooks/localstorage"
const displayConfiguration=()=>{
    const [localDisplayConfiguation,setDisplayConfiguration]=useLocalStorage("TwitterAppDisplayConfiguration",{color:"",background:"",font:""})
    const setColors=(color)=>{
        let root=document.getElementById("root")
        root.classList.forEach(async(classItem)=>{
            if(classItem.substr(0,6)=="Schema"){
                await root.classList.remove(classItem)
            }
        })
        root.classList.add(color)
    }
    const setBackground=(background)=>{
        let root=document.getElementById("root")
        root.classList.forEach(async(classItem)=>{
            if(classItem=="backWhite"||classItem=="backDim"||classItem=="backBlack"){
                await root.classList.remove(classItem)
            }
        })
        root.classList.add(background)
    }
    const setFontSize=(font)=>{
        let root=document.getElementById("root")
        root.style.fontSize=`${font}px`
    }
    return(
        <div id="displayConfiguration">
            <div>
                <h3>Customize your view</h3>
                <p>Manage your font size, color and background. These settings affect all the Twitter accounts on this browser.</p>
                <div className="userInfo" >
                    <i id="twitterIcon"></i>
                    <p>
                        <b>Twitter</b>
                        <span>At the heart of Twitter are short messages called Tweets -- just like one --which can include photos, videos, links, texts, and #hastags</span>
                    </p>
                </div>
                <h4>Font size</h4>
                <div className="fontConfiguration">
                    <div className="setFont">
                        <p>Aa</p>
                        <div className="scale check" onClick={()=>setFontSize(12)} ></div>
                        <div className="scale check" onClick={()=>setFontSize(14)} ></div>
                        <div className="scale" onClick={()=>setFontSize(16)} ></div>
                        <div className="scale" onClick={()=>setFontSize(18)} ></div>
                        <div className="scale" onClick={()=>setFontSize(19)} ></div>
                        <p>Aa</p>
                    </div>
                </div>
                <h4>Color</h4>
                <div className="colorSelector">
                    <div className="colors">
                        <div className="color select" onClick={()=>setColors('Schema0')} ></div>
                        <div className="color" onClick={()=>setColors('Schema1')} ></div>
                        <div className="color" onClick={()=>setColors('Schema2')} ></div>
                        <div className="color" onClick={()=>setColors('Schema3')} ></div>
                        <div className="color" onClick={()=>setColors('Schema4')} ></div>
                        <div className="color" onClick={()=>setColors('Schema5')} ></div>
                    </div>
                    <div className="icons">
                        <div className="loveIcon"></div>
                        <div className="loveIcon"></div>
                        <div className="loveIcon"></div>
                        <div className="loveIcon"></div>
                        <div className="loveIcon"></div>
                        <div className="loveIcon"></div>
                    </div>
                </div>
                <h4>Background</h4>
                <div className="backgroundSelector">
                    <div className="backColor select" onClick={()=>setBackground('backWhite')} >
                        <span>Default</span>
                    </div>
                    <div className="backColor" onClick={()=>setBackground('backDim')} >
                        <span>Dim</span>
                    </div>
                    <div className="backColor" onClick={()=>setBackground('backBlack')} >
                        <span>Lightsout</span>
                    </div>
                </div>
                <button>Done</button>
            </div>
        </div>
    )
}
export default displayConfiguration