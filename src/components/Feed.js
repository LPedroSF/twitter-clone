import React from 'react';
import "./Feed.css";
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <TweetBox />
        <Post 
          displayName="Billy C."
          username="billx"
          verified
          text="I'm radiant!!!!!"
          avatar ="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"
          image ="https://media.giphy.com/media/QDvPya2RWexjL3MXWd/giphy.gif"
        />        
    </div>
  )
}

export default Feed