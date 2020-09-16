import React from "react";
import trending  from './../assets/mocks/trending'
import PostMansory from '../components/common/post-mansory'
import featured from '../assets/mocks/featured';

const trendingConfig = {
    1:{
        gridArea:'1 / 2 / 3 / 3'
    },
    
}
const mergeStyles = function(posts,config){
    posts.forEach((post,index) => {
        post.style = config[index]
        
    });
}
mergeStyles(trending, trendingConfig);
export default function Home() {
  return (
  <section className="container home">
      <div className="row">
          <h2>Trending Posts</h2>
          <PostMansory posts = {trending} columns={3}/> 
      </div>
  </section>
    );
}
