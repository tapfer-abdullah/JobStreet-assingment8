import React from 'react';

const JCList = ({list}) => {
    return (
        <div className='bg-gray-100 text-left p-10 rounded-md'>
            <div className=' bg-gray-200 w-16 rounded-md'>
                <img src={list.logo} alt="JobCLogo" className='w-full rounded-md'/>
            </div>
            <h4 className='text-lg font-semibold mb-2 mt-8'>{list.name}</h4>
            <p className='text-base text-slate-600'>{list.jobs_available} Jobs Available</p>
        </div>
    );
};

export default JCList;