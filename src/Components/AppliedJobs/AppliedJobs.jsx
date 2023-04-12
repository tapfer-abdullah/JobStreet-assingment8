import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakeDB';
import ShowAppliedJobs from './ShowAppliedJobs';
import ShowJobs from './ShowJobs';

const AppliedJobs = () => {

    let [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch("/FeaturedJobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[]);

    // console.log(jobs)

    let [savedCartItem, setSavedCartItem] = useState([]);
    useEffect(() => {
        let savedCart = [];
        let storedCart = getShoppingCart();

        for (let id in storedCart) {
          let addedProduct = jobs.find((job) => job.id === id);

        //   console.log(addedProduct)
            if(addedProduct){
                savedCart.push(addedProduct);
                // console.log(addedProduct)
            }
          
        }
        setSavedCartItem(savedCart);
      }, [jobs]);


    //   console.log(savedCartItem)
    return (
        <>
            <div className="banner-div header-container md:py-8 md:px-40 bg-gray-100">
                <div className="banner-contents mt-20 order-last md:order-first">
                  <h3 className="text-center mb-5 font-bold text-3xl">Applied Jobs</h3>
                </div>
            </div>
            <div className='mb-20'>
                {/* <ShowAppliedJobs savedCart={savedCart}></ShowAppliedJobs> */}
                {
                    savedCartItem.map(job => <ShowJobs job = {job}></ShowJobs>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;