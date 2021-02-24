import React, {useState} from 'react'
const DisplayConfiguration=({localDisplayConfiguation, setDisplayConfiguration, toggleDisplayConfiguration, updateDisplay})=>{
    const setValue=(e)=>{
        let localDisplayConfigCopy=localDisplayConfiguation
        localDisplayConfigCopy[e.target.name]=e.target.value
        setDisplayConfiguration(localDisplayConfigCopy)
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
                        <button name="font" value="12" className="scale check" onClick={setValue} ></button>
                        <button name="font" value="14" className="scale check" onClick={setValue} ></button>
                        <button name="font" value="16" className="scale" onClick={setValue} ></button>
                        <button name="font" value="18" className="scale" onClick={setValue} ></button>
                        <button name="font" value="19" className="scale" onClick={setValue} ></button>
                        <p>Aa</p>
                    </div>
                </div>
                <h4>Color</h4>
                <div className="colorSelector">
                    <div className="colors">
                        <button name="color" value="Schema0" className="color select" onClick={setValue} ></button>
                        <button name="color" value="Schema1" className="color" onClick={setValue} ></button>
                        <button name="color" value="Schema2" className="color" onClick={setValue} ></button>
                        <button name="color" value="Schema3" className="color" onClick={setValue} ></button>
                        <button name="color" value="Schema4" className="color" onClick={setValue} ></button>
                        <button name="color" value="Schema5" className="color" onClick={setValue} ></button>
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
                    <button name="background" value="backWhite" className="backColor select" onClick={setValue} >
                        Default
                    </button>
                    <button name="background" value="backDim" className="backColor" onClick={setValue} >
                        Dim
                    </button>
                    <button name="background" value="backBlack" className="backColor" onClick={setValue} >
                        Lightsout
                    </button>
                </div>
                <button onClick={()=>{
                    updateDisplay()
                    toggleDisplayConfiguration(false)
                }} >Done</button>
            </div>
        </div>
    )
}
export default DisplayConfiguration