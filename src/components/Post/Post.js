import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post
    return (
        <div>
            
            <h1><strong>Id : {id}</strong>{title}</h1>
            <p>{body}</p>
            <button>Show Comments</button>
        </div>
    );
};

export default Post;