import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Outlets = () => {
    const JobCList = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <JobCategory JobCList = {JobCList}></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Outlets;