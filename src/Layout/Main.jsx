import React from 'react';
import NavBar from '../Pages/SharedPage/NavBar';
import Footer from '../Pages/SharedPage/Footer';
import { Outlet } from 'react-router-dom';

import myImage from '../assets/image/logo.png'


const Main = () => {
    return (
        <div>
           <div className='py-10'>
           <img className='w-auto mx-auto' src={myImage} alt="new image" />

           </div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;