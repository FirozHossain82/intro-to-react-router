import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>This is home components </h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;