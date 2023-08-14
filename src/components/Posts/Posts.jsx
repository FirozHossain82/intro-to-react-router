import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post.jsx';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h3 className='text-3xl font-bold text-orange-400 mb-6'>This is Single Posts Component: {posts.length}</h3>
            <div className='grid   md:grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    posts.map(post => <Post
                    key={post.id}
                    post = {post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;