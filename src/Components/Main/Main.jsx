import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import "./Main.css";
import JobCategory from '../JobCategory/JobCategory';

const Main = () => {
    return (
        <div className='main-div'>
            <Header></Header>
            <JobCategory></JobCategory>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;