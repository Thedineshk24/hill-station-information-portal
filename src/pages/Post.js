import React from 'react';
import "./css/post.css";

const Post = ({imageUrl,placeName,description}) => {
    return (
        <div className="postCard">
            <img src={imageUrl} alt={placeName} className="postCard__Image" />
            <div className="post__info">
                {placeName}
                <div className="post__description">
                    {
                        description
                    }
                </div>
            </div>
        </div>
    )
}

export default Post
