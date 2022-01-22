import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [id])
    return (
        <div>
            <h1>Detail Post: {id}</h1>
            <p>User posted: {post.id}</p>
            <h3>title: {post.title}</h3>
            <p>{post.body}</p>
            <p>Number Of Comments:{comments.length}</p>

            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;