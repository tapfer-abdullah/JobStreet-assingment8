import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className='header-container py-8 px-40 bg-gray-100'>
            <nav className='header-div md:flex justify-between items-center'>
                <h3>JobStreet</h3>
                <div className='links'>
                    <Link to= "/">Home</Link>
                    <Link to= "/Statistics">Statistics</Link>
                    <Link to= "/Applied-Jobs">Applied Jobs</Link>
                    <Link to= "/Blog">Blog</Link>
                </div>
                <button className='apply-btn'><Link>Start Applying</Link></button>
            </nav>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Header;