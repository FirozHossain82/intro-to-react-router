import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header.jsx';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {/* <div>{navigation.state === "loading" ? "Loading....": ""} </div> */}
            <div className='text-center'>{navigation.state === 'loading' && 'Loading.....'}</div>
            <div className='text-center text-lg my-8'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;