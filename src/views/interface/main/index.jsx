import React from 'react'
const MainPage=()=>{
    return(
        <main>
            <form action="" id="userTweet" >
                <i className="userIcon"></i>
                <textarea name="" className="tweetContent" id="" cols="30" rows="10" placeholder="¿Que está pasando?" maxLength="250" ></textarea>
                <div className="addElement">
                    <i className="mascara" id="imageIcon"></i>
                    <i className="mascara" id="gifIcon">GIF</i>
                    <i className="mascara" id="graphicIcon"></i>
                    <i className="mascara" id="laughIcon"></i>
                    <i className="mascara" id="calendarIcon"></i>
                </div>
                <input type="submit" value="Tweet"/>
            </form>
            <div id="posts">
                <article className="postWithoutImage">
                    <i className="userIcon"></i>
                    <p>
                        <b>User</b>
                        <span>@Nick</span>
                        <span>1h</span>
                    </p>
                    <div className="postContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi! Quo quidem nostrum odit, velit labore quam laborum! Obcaecati ullam excepturi iusto error odio expedita unde nulla, enim sit. Corrupti?
                    </div>
                    <div className="actions">
                        <i className="commentIcon"></i>
                        <span>Comment</span>
                        <i className="retweetIcon"></i>
                        <span>Retweet</span>
                        <i className="loveIcon"></i>
                        <span>Like</span>
                        <i className="uploadIcon"></i>
                    </div>
                </article>
                <article className="postWithImage">
                    <i className="userIcon"></i>
                    <p>
                        <b>User</b>
                        <span>@Nick</span>
                        <span>1h</span>
                    </p>
                    <div className="postContent">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora recusandae sit, quis rerum necessitatibus tenetur exercitationem, cum debitis quae inventore architecto libero quisquam. Error quis autem modi nihil praesentium? Accusamus?
                        <div className="imgContainer">
                            <img src="" alt="Not found image"/>
                        </div>
                    </div>
                    <div className="actions">
                        <i className="commentIcon"></i>
                        <span>Comment</span>
                        <i className="retweetIcon"></i>
                        <span>Retweet</span>
                        <i className="loveIcon"></i>
                        <span>Like</span>
                        <i className="uploadIcon"></i>
                    </div>
                </article>
            </div>
        </main>
    )
}
export default MainPage