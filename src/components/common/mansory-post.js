import React from 'react';

function MansoryPost({post,tagsOnTop}){
    const style  = {backgroundImage:`url("${require(`../../assets/img/${post.image}`)}")`} 

    return(
        <a className="mansory-post overlay" style={style} href={post.link}>
            <div className="image-text"></div>
        </a>
    )



}

export default MansoryPost

