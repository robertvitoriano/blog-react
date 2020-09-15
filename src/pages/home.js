import React from "react";
import trending  from './../assets/mocks/trending'
import PostMansory from '../components/common/post-mansory'
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
