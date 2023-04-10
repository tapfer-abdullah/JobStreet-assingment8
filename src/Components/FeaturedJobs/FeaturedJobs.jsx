import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FJob from './FJob';

const FeaturedJobs = () => {
    // let fourJobs = [];
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch("FeaturedJobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[]);


    
    // const seeAllJobs = () =>{
    //     fourJobs = jobs;
    //     console.log("c")
    // }

    
    // for(let i=0; i<4; i++){
    //     fourJobs.push(jobs[i]);
    // }

    // setJobs(jobs.slice(0, 3));

    // console.log(fourJobs)
    return (
        <div className='py-8 px-40 my-28 text-center'>
            <h3 className='text-3xl font-semibold mb-4'>Featured Jobs</h3>
            <p className='jobCategory-p text-base mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.map(job => <FJob key={job.id} job={job}></FJob>)
                }
                {/* <button onClick={seeAllJobs}>see more</button> */}
            </div>
        </div>
    );
};

export default FeaturedJobs;