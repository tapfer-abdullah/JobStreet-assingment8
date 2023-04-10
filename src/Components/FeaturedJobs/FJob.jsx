import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const FJob = ({job}) => {
    // console.log(job)
    const {company_logo, company_name, job_title, remote_or_onsite, fulltime_or_parttime, salary, location} = job;
    return (
        <div className='mt-8 mr-6 rounded-lg p-10 border-2 border-slate-200 text-left'>
            <div>
                <img className='w-40 h-10' src={company_logo} alt="company logo" />
            </div>
            <h3 className='mt-8 mb-2 text-2xl'>{job_title}</h3>
            <p className='text-xl mb-4 text-slate-600'>{company_name}</p>
            <div className='mb-4'>
                <span className='mr-4 py-1 px-2 text-sm border-2 rounded border-emerald-100'>{remote_or_onsite}</span>
                <span className='mr-4 py-1 px-2 text-sm border-2 rounded border-emerald-100'>{fulltime_or_parttime}</span>
            </div>
            <div className='flex mb-6 text-slate-600'>
                <p><FontAwesomeIcon icon={faLocationDot} /><span className='ml-2'>{location}</span></p>
                <p className='ml-6'><FontAwesomeIcon icon={faDollarSign} /><span className='ml-2'>Salary: {salary}</span></p>
            </div>
            <button className='py-2 px-3 bg-slate-500 rounded-md'><Link className='text-white font-semibold bg-slate-500'>View Details</Link></button>
            
        </div>
    );
};

export default FJob;