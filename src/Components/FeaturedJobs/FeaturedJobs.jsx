import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FJob from './FJob';

const FeaturedJobs = () => {

    let isClicked = 0;
    const seeAllJobs = () =>{
        isClicked = isClicked+1;
        console.log(isClicked)
    }

    let [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch("FeaturedJobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[]);

    if(!isClicked){
        jobs = jobs.slice(0,4);
        // seeMoreBtn(true);
    }
    

    // useEffect( () =>{
    //     fetch("FeaturedJobs.json")
    //     .then(res => res.json())
    //     .then(data => setJobs(data));
    // } ,[])
    return (
        <div className='py-8 px-40 my-28 text-center'>
            <h3 className='text-3xl font-semibold mb-4'>Featured Jobs</h3>
            <p className='jobCategory-p text-base mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.map(job => <FJob key={job.id} job={job}></FJob>)
                }
            </div>
            <button className='mt-10 mb-32 py-2 px-3 bg-slate-500 rounded-md w-40 h-16 mx-auto' onClick={seeAllJobs}>
                <Link className='text-white font-bold bg-slate-500'>See All Jobs</Link>
            </button>
        </div>
    );
};

export default FeaturedJobs;