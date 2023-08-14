import React from 'react';

const Friend = ({friend}) => {
    console.log(friend)
    const {email, name, id, phone, username} = friend;
    return (
        <div className='border border-solid border-lime-400 rounded-lg p-6  '>
            <h2 className='text-2xl font-bold text-orange-600'>{name}</h2>
            <h3 className='text-lg font-semibold text-lime-700'>Email:{email}</h3>
            <h4>Phone: {phone}</h4>
            <p>Username: {username}</p>
            <p><LInk to={``}>Show Me Details</LInk></p>
        </div>
    );
};

export default Friend;