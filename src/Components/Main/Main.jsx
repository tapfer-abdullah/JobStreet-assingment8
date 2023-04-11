import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import "./Main.css";
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Main = () => {
    // const JobCList = useLoaderData();
    // console.log(JobClist)
    return (
        <div className='main-div'>
            <Header></Header>
            {/* <JobCategory JobCList = {JobCList}></JobCategory>
            <FeaturedJobs></FeaturedJobs> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;