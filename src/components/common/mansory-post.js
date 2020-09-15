import React from 'react';

function MansoryPost({post,tagsOnTop}){
    const style  = {backgroundImage:`url("${require(`../../assets/img/${post.image}`)}")`} 

    return(
        <a className="mansory-post overlay" style={style} href={post.link}>
            <div className="image-text">

                <div>
                    <h className="image-title">{post.title}</h>
                </div>
            </div>
        </a>
    )



}

export default MansoryPost

