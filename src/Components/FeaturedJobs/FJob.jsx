import React from 'react';
import { Link } from 'react-router-dom';

const FJob = ({job}) => {
    console.log(job)
    const {company_logo, company_name, job_title, remote_or_onsite, fulltime_or_parttime, salary, location} = job;
    return (
        <div>
            <div>
                <img src={company_logo} alt="company logo" />
            </div>
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div>
                <span>{remote_or_onsite}</span><span>{fulltime_or_parttime}</span>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className=''><Link className='text-white font-semibold bg-slate-500'>View Details</Link></button>
            
        </div>
    );
};

export default FJob;