import React from "react";
import { categoryColors } from "./styles";

function MansoryPost({ post, tagsOnTop }) {
    const windowWidth =  window.innerWidth
  const imageBackground = {
    backgroundImage: `url("${require(`../../assets/img/${post.image}`)}")`,
  };

  const style = window >900 ?{ ...imageBackground, ...post.style }:imageBackground;

  return (
    <a className="mansory-post overlay" style={style} href={post.link}>
      <div className="image-text" style = {{justifyContent:tagsOnTop ? 'space-between':'flex-end'}}>
        <div className="tags-container">
          {post.categories.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{ backgroundColor: categoryColors[tag] }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}

export default MansoryPost;
