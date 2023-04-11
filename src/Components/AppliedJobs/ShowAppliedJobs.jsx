import React from 'react';
import ShowJobs from './ShowJobs';

const ShowAppliedJobs = ({savedCart}) => {
    // console.log(savedCart)
    return (
        <div className='mb-20'>
            {
                savedCart.map(job => <ShowJobs job = {job}></ShowJobs>)
            }
        </div>
    );
};

export default ShowAppliedJobs;