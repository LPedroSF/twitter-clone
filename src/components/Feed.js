import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);
  const postCollection = collection(db, "posts");

  useEffect (() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postCollection);
        const filteredData = data.docs.map((doc) => ({  
          ...doc.data(), 
          id: doc.id,     
        }));
        setPosts(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, []);
  
  return (
    <div className='feed'>
      <div className='feed__header'>
          <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post 
          key = {post.text}
          displayName = {post.displayName}
          username = {post.username}
          verified = {post.verified}
          text = {post.text}
          avatar = {post.avatar}
          image = {post.image}
        />
      ))}
    </div>
  )
}

export default Feed