import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakeDB';
import ShowAppliedJobs from './ShowAppliedJobs';

const AppliedJobs = () => {
    let storedCart = getShoppingCart();
    // console.log(storedCart);

    let [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch("/FeaturedJobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[]);

    // console.log(jobs)

    let savedCart = [];
    useEffect(() => {

        for (let id in storedCart) {
          const addedProduct = jobs.find((job) => job.id === id);

        //   console.log(addedProduct)
            if(addedProduct){
                savedCart.push(addedProduct);
                // console.log(addedProduct)
            }
          
        }
      }, [jobs]);


    //   console.log(savedCart)
    return (
        <>
            <div className="banner-div header-container py-8 px-40 bg-gray-100">
                <div className="banner-contents mt-20 order-last md:order-first">
                  <h3 className="text-center mb-5 font-bold text-3xl">Applied Jobs</h3>
                </div>
            </div>
            <div>
                {/* <ShowAppliedJobs savedCart={savedCart}></ShowAppliedJobs> */}
                {
                    savedCart.map(a => console.log(a))
                }
            </div>
        </>
    );
};

export default AppliedJobs;