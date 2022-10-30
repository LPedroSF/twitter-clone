import { Avatar, Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src = "https://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png" />
                <input placeholder="What's happening?" type ="text"/>
                {/*<input placeholder="Enter image URL" type ="text"/>*/}
            </div>
            <input className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type ="text"/>
            <Button className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox;