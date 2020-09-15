import React from 'react';
import MansoryPost from './mansory-post'

export default function PostMansory({posts, columns, tagsOnTop}){
    return (
      <section
        className="mansory"
        style={{ gridTemplateColumns: `repeat(${columns},minmax(275px, 1fr))` }}
      >
        {posts.map((post, index) => 
          <MansoryPost {...{ post, index, tagsOnTop, key: index }} />
        )}
      </section>
    );






}