import React from 'react';
import "./Banner.css";
import { Link } from 'react-router-dom';
import IMG from "..//../../public/All Images/P3OLGJ1 copy 1.png"

const Banner = () => {
    return (
        <div className='md:text-left banner-div grid grid-cols-1 md:grid-cols-2 gap-5 header-container p-4 md:py-8 md:px-40 bg-gray-100'>
            <div className='banner-contents mt-20 order-last md:order-first'>
                <h3 className='banner-title text-5xl font-bolder mb-6'>One Step Closer To Your <span className='text-cyan-500'>Dream Job</span></h3>
                <p className='mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className=''><Link className='text-white font-semibold'>Get Started</Link></button>
            </div>
            <div className='banner-img'>
            {/* <img src="/public/All Images/P3OLGJ1 copy 1.png" alt="" /> */}
            <img src={IMG} alt="" />
            </div>
        </div>
    );
};

export default Banner;