import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./TweetBox.css";
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

function TweetBox() {
  const [tweetText, setTweetText] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  const postCollection = collection(db, "posts");
  
  const setTweet = async () => {
    try{
      await addDoc(postCollection, {
        displayName: "Guest",
        username: "SmartGuest123",
        verified: true,
        text: tweetText,
        image: tweetImg,
      });
      window.location.reload()
    } catch(err){
      console.err(err);
    }
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar />
                <input
                  value={tweetText}
                  onChange={(e) => setTweetText(e.target.value)}
                  placeholder="What's happening?"
                  type ="text"
                />
            </div>
            <input 
              value={tweetImg}
              onChange = {(e) => setTweetImg(e.target.value)}
              className='tweetBox__imageInput' 
              placeholder="Optional: Enter image URL" 
              type ="text"
            />
            <Button onClick={setTweet} className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox;