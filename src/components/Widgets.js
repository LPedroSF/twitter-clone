import React from 'react'
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>Whats happening?</h2>
        <TwitterTweetEmbed tweetid={"858551177860055040"} />
        <TwitterTimelineEmbed sourceType = "profile" screenName="elonmusk" options={{height: 600}} />
        <TwitterShareButton url={"luisfaria.co.uk"} options={{text: "Tweeting via ", via: ""}} />
      </div>
    </div>
  );
}

export default Widgets;