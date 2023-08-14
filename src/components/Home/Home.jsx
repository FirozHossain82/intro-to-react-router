import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='text-center text-lg my-8'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;