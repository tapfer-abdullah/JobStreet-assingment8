import React from 'react';
import "./Banner.css";
import { Link } from 'react-router-dom';
import IMG from "../../assets/assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
    return (
        <div className='banner-div mt-14'>
            <div className='banner-contents mt-20'>
                <h3 className='banner-title text-5xl font-bolder mb-6'>One Step Closer To Your <span className='text-cyan-500'>Dream Job</span></h3>
                <p className='mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className=''><Link className='text-white font-semibold'>Get Started</Link></button>
            </div>
            <div className='banner-img'>
            <img src={IMG} alt="" />
            </div>
        </div>
    );
};

export default Banner;