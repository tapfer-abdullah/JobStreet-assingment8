import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ShowJobs = ({ job }) => {
  console.log(job);
  return (
    <div className="border mt-6 px-8 flex items-center w-2/3 mx-auto rounded-md">
      <div className="w-36 h-14 mr-6"> 
        <img className="w-full h-full" src={job.company_logo} alt="" />
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="mt-8 mb-2 text-2xl">{job.job_title}</h3>
          <p className="text-xl mb-4 text-slate-600">{job.company_name}</p>
          <div className="mb-4">
            <span className="mr-4 py-1 px-2 text-sm border-2 rounded border-emerald-100 text-slate-500">
              {job.remote_or_onsite}
            </span>
            <span className="mr-4 py-1 px-2 text-sm border-2 rounded border-emerald-100 text-slate-500">
              {job.fulltime_or_parttime}
            </span>
          </div>
          <div className="flex mb-6 text-slate-600">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="ml-2">{job.location}</span>
            </p>
            <p className="ml-6">
              <FontAwesomeIcon icon={faDollarSign} />
              <span className="ml-2">Salary: {job.salary}</span>
            </p>
          </div>
        </div>
        <div>
          <button className='py-2 px-3 bg-slate-500 rounded-md mr-7'>
            <Link to= {`/view-details/${job.id}`} className='text-white font-semibold bg-slate-500'>View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ShowJobs;
