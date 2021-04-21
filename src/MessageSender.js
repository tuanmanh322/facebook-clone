import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./MessageSender.css";
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
import db from './firebase';

function MessageSender(props) {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) =>{
          // cancel reload if input change
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamps: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageUrl,
            username: user.displayName
        })

        // some clever db stuff
        setInput("");
        setImageUrl("");

    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input}
                    onChange={e => setInput(e.target.value)}
                    className="messageSender_input"
                     type="text" 
                     placeholder={`what 's on your mind?, ${user.displayName}`}/> 
                      <input value={imageUrl}
                      onChange={e=> setImageUrl(e.target.value)}
                     type="text" 
                     placeholder={`image URL (Optinal)`}/> 
                    <button onClick={handleSubmit} type="submit">Hide submit</button>

                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"oranger"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;