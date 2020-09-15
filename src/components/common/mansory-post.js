import React from 'react';
import categoryColors from './styles'

function MansoryPost({post,tagsOnTop}){
    const style  = {backgroundImage:`url("${require(`../../assets/img/${post.image}`)}")`} 

    return(
        <a className="mansory-post overlay" style={style} href={post.link}>
            <div className="image-text">
             <div className="tags-container">
                 {post.categories.map((tag,index)=>
                 <span key={index} className="tag" style={{backgroundColor:categoryColors[tag]}}>
                     {tag.toUpperCase()}
                 </span>)}
             </div>
                <div>
                    <h2 className="image-title">{post.title}</h2>
    <span className="iamge-date">{post.date}</span>

                </div>
            </div>
        </a>
    )



}

export default MansoryPost

