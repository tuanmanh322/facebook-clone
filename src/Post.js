import {Avatar, Button} from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import db from './firebase';
function Post({Key,profilePic, image, username, timestamp, message}) {



    const deletePost = () => {
        if(Key !== undefined){
           db.collection('posts').doc(Key).delete().then(() =>{
           }).catch((error) => {
                alert(error.message);
           })
        }
    }

    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" alt={Key}/>
                <div className="post_topinfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    {/* <p>{timestamp}</p> */}
                    <div>
                         <Button variant="contained" onClick={() => deletePost()}>Delete</Button>
                    </div>
                   
                </div>
                 
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    );
}

export default Post;