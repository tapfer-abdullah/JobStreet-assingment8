import React from 'react';
import "./JobCategory.css";
import JCList from './JCList';


const JobCategory = ({JobCList}) => {
    // console.log(JobCList)
    return (
        <div className='md:py-8 md:px-40 p-4 my-28 text-center'>
            <h3 className='text-3xl font-semibold mb-4'>Job Category List</h3>
            <p className='jobCategory-p text-base mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                    JobCList ? JobCList.map(list => <JCList key = {list.id} list = {list}></JCList>) : ""
                }
            </div>
        </div>
    );
};

export default JobCategory;