import React, { useEffect, useRef, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender.js';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    const mountedRef = useRef(true);

    useEffect(() => {

        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        ))

        return () => {mountedRef.current = false}

    }, []);
    // const timestamp = new Date();
    // const username = "One punch man";

    return <div className="feed">
        {/* Story reef */}
        <StoryReel/> {/* MessageSender*/}
        <MessageSender/> {/* Post*/}
         {posts.map((post) => (
             <Post 
             Key={post.id}
             profilePic={post.data.profilePic}
             message = {post.data.message}
             timestamp ={post.data.timestamp}
             username = {post.data.username}
             image = {post.data.image}
             />
         ))}
    </div>
}

export default Feed;