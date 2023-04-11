import React from 'react';

const ShowAppliedJobs = ({savedCart}) => {
    console.log(savedCart)
    return (
        <div>
            {
                savedCart? savedCart.map(job => console.log(job)) : "a"
            }
        </div>
    );
};

export default ShowAppliedJobs;