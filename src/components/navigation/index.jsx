import React from 'react'
import PageLink from "../pageLink"
import routes from "../../routes/routes"
const Navigation=({toggleDisplayConfiguration})=>{
    const toggleSection=()=>{
        let section=document.getElementById("navigation")
        section.classList.toggle("show")
    }
    const toggleOptions=()=>{
        let extraOptionsMenu=document.getElementById("extraOptionsMenu")
        extraOptionsMenu.classList.toggle("showMenu")
    }
    return(
        <section id="navigation" >
            <i className="cross" onClick={()=>toggleSection()} ></i>
            <nav >
                <PageLink href={routes.main} className="listElement homeSelector" text={"Home"} >
                    <div className="listIconContainer" >
                        <div className="mascara" id="homeIcon"></div>
                    </div>
                </PageLink>
                <PageLink href={routes.explorePage} className="listElement" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="exploreIcon"></div>
                    </div>
                    <span>Explore</span>
                </PageLink>
                <PageLink href={routes.notificationPage} className="listElement notifySelector" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="notifyIcon"></div>
                    </div>
                    <span>Notifications</span>
                </PageLink>
                <PageLink href={routes.messagesPage} className="listElement messageSelector" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="messageIcon"></div>
                    </div>
                    <span>Messages</span>
                </PageLink>
                <PageLink href={routes.bookmarksPage} className="listElement" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="bookmarkIcon"></div>
                    </div>
                    <span>Bookmarks</span>
                </PageLink>
                <PageLink href="" className="listElement" >
                    <div className="listIconContainer" >
                        <div id="list">
                            <div className="mascara" id="listIcon"></div>
                        </div>
                    </div>
                    <span>List</span>
                </PageLink>
                <PageLink href={routes.profilePage} className="listElement" text="Profile" >
                    <div className="listIconContainer" >
                        <div className="mascara" id="profileIcon"></div>
                    </div>
                </PageLink>  
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
                <PageLink className="listVoid" text="Topics" >
                    <i className="mascara topics"></i>
                </PageLink>
                <PageLink className="listVoid" text="Moments" >
                    <i className="mascara moments"></i>
                </PageLink>
                <PageLink className="listVoid" text="Twitter Ads" >
                    <i className="mascara ads"></i>
                </PageLink>
                <PageLink className="listVoid" text="Analytics" >
                    <i className="mascara analitics"></i>
                </PageLink>
                <PageLink className="listVoid" text="Settings and privacity" >
                    <i className="mascara settings"></i>
                </PageLink>
                <PageLink className="listVoid" text="Help Center" >
                    <i className="mascara help"></i>
                </PageLink>
                <PageLink className="listVoid" text="Display" onClick={()=>toggleDisplayConfiguration(true)} >
                    <i className="mascara display"></i>
                </PageLink>
                <PageLink className="listVoid" text="Keyboard shotcuts" >
                    <i className="mascara shotcuts"></i>
                </PageLink>
            </div>
            <div id="outAction" onClick={()=>toggleOptions()} ></div>
        </section>
    )
}
export default Navigation