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



      let [remote, setRemote] = useState(0);
      let [onside, setOnside] = useState(0);
      const remoteBtn = () =>{
        if(onside >0){
            setOnside(0);
        }
        setRemote(remote +1);
        // console.log("remote", remote);
        
      }
      const onsideBtn = () =>{
        if(remote > 0){
            setRemote(0);
        }
          setOnside(onside +1);
        //   console.log("onside", onside);
      }

      let [savedRemote, setSavedRemote] = useState([]);
      useEffect( ()=> {
        let Remote = [];
        Remote = savedCartItem.filter(r => r.remote_or_onsite == "Remote");

        if(remote > 0){
            setSavedRemote(Remote);
        }
      } , [remote])

      let [savedOnside, setSavedOnside] = useState([]);
      useEffect( ()=> {
        let Onside = [];
        Onside = savedCartItem.filter(r => r.remote_or_onsite == "Onsite");

        if(onside > 0){
            setSavedOnside(Onside)
        }
      } , [onside])

    return (
        <>
            <div className="banner-div header-container md:py-8 md:px-40 bg-gray-100">
                <div className="banner-contents mt-20 order-last md:order-first">
                  <h3 className="text-center mb-5 font-bold text-3xl">Applied Jobs</h3>
                </div>
            </div>

            <div className='bg-emerald-50 absolute right-64 my-10 px-4 py-2 rounded-lg'>
                <h4 className='text-center text-3xl font-semibold'>Filter By</h4>
                <button className="m-2 py-1 px-2 text-2xl border-2 rounded border-emerald-100 bg-teal-500 hover:bg-rose-400" onClick={remoteBtn}>Remote</button>
                <button className="m-2 py-1 px-2 text-2xl border-2 rounded border-emerald-100 bg-teal-500 hover:bg-rose-400" onClick={onsideBtn}>Onsite</button>

            </div>

            <div className='mb-20 mt-40'>
                {/* <ShowAppliedJobs savedCart={savedCart}></ShowAppliedJobs> */}
                {
                    onside == 0 && remote == 0 ? savedCartItem.map(job => <ShowJobs job = {job}></ShowJobs>) : 
                    
                    (onside > 0 ? savedOnside.map(job => <ShowJobs job = {job}></ShowJobs>) : 
                        savedRemote.map(job => <ShowJobs job = {job}></ShowJobs>))


                //    (onside) && savedOnside.map(job => <ShowJobs job = {job}></ShowJobs>)
                //    (remote) && savedRemote.map(job => <ShowJobs job = {job}></ShowJobs>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;