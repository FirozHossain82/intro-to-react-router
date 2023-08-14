import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend.jsx';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends)
    return (
        <div >
            <h3 className="mb-6">This is my friends page:{friends.length}</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;