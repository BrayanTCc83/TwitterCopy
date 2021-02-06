import React from 'react'
const Navigation=()=>{
    const toggleSection=()=>{
        let section=document.getElementById("navigation")
        section.classList.toggle("show")
    }
    function toggleOptions(){
        let extraOptionsMenu=document.getElementById("extraOptionsMenu")
        extraOptionsMenu.classList.toggle("showMenu")
    }
    function toggleDisplayConfiguration(){
        let displayConfiguration=document.getElementById("displayConfiguration")
        displayConfiguration.classList.toggle("showMenu")
    }
    return(
        <section id="navigation" >
            <i className="cross" onClick={()=>toggleSection()} ></i>
            <nav >
                <a href="" className="listElement selected homeSelector" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="homeIcon"></div>
                    </div>
                    <span>Home</span>
                </a>
                <a href="" className="listElement" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="exploreIcon"></div>
                    </div>
                    <span>Explore</span>
                </a>
                <a href="" className="listElement notifySelector" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="notifyIcon"></div>
                    </div>
                    <span>Notifications</span>
                </a>
                <a href="" className="listElement messageSelector" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="messageIcon"></div>
                    </div>
                    <span>Messages</span>
                </a>
                <a href="" className="listElement" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="bookmarkIcon"></div>
                    </div>
                    <span>Bookmarks</span>
                </a>
                <a href="" className="listElement" >
                    <div className="listIconContainer" >
                        <div id="list">
                            <div className="mascara" id="listIcon"></div>
                        </div>
                    </div>
                    <span>List</span>
                </a>
                <a href="" className="listElement" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="profileIcon"></div>
                    </div>
                    <span>Profile</span>
                </a>
                <div className="listElement" onClick={()=>toggleOptions()} >
                    <div className="listIconContainer" >
                        <div id="more">
                            <div className="mascara" id="moreIcon"></div>
                        </div>
                    </div>
                    <span>More</span>
                </div>
            </nav>
            <div id="tweetButton">
            </div>
            <div className="userInfo" >
                <i className="userIcon"></i>
                <p>
                    <b>User name</b>
                    <span>@MiTwitter</span>
                </p>
            </div>
            <div id="extraOptionsMenu">
                <div className="listVoid"><i className="mascara topics"></i><span>Topics</span></div>
                <div className="listVoid"><i className="mascara moments"></i><span>Moments</span></div>
                <div className="listVoid"><i className="mascara ads"></i><span>Twitter Ads</span></div>
                <div className="listVoid"><i className="mascara analitics"></i><span>Analytics</span></div>
                <div className="listVoid"><i className="mascara settings"></i><span>Settings and privacity</span></div>
                <div className="listVoid"><i className="mascara help"></i><span>Help Center</span></div>
                <div className="listVoid" onClick={()=>toggleDisplayConfiguration()} ><i className="mascara display"></i><span>Display</span></div>
                <div className="listVoid"><i className="mascara shotcuts"></i><span>Keyboard shotcuts</span></div>
            </div>
            <div id="outAction" onClick={()=>toggleOptions()} ></div>
        </section>
    )
}
export default Navigation