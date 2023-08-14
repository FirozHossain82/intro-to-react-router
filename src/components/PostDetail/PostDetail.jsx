import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const navigate = useNavigate();
    const {id, body, title, userId} = post;

    const handleGoBack = () =>{
            navigate(-1)
    }
    return (
        <div className='border-2 border-purple-400 rounded-lg  py-8 px-8 mx-8'>
           <h2 className='text-3xl text-orange-600 font-bold'>Details about your post od :{id}</h2> 
           <h3 className='text-xl font-bold '>{title}</h3>
           <p className='text-lg text-black'>{body}</p>
           <button onClick={handleGoBack} className='border-2 border-lime-500 rounded-lg p-2 '>Go Back</button>
        </div>
    );
};

export default PostDetail;