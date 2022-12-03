import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div>
            {
                posts.map(post => <Link
                    to={`/posts/${post.id}`}
                    key={post.id}
                > {post.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts; <h1>this is posts</h1>