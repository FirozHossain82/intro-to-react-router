import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div className='border border-solid border-lime-400 rounded-lg p-6'>
            <h2 className='text-xl font-bold text-center text-emerald-400'>Everything about this person is here</h2>
            <h2 className='text-2xl font-bold text-orange-600'>Name:{friend.name}</h2>
            <h3 className='text-lg font-semibold text-lime-700'>Email:{friend.email}</h3>
        </div>
    );
};

export default FriendDetail;