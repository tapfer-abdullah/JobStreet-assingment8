import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign, faPhone, faEnvelope, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'

const ViewDetails = () => {
  const jobs = useLoaderData();
  const { jobID } = useParams();

  let jobDetails = jobs.find((job) => job.id == jobID);
  console.log(jobDetails);

//   console.log(jobDetails);
  return (
    <>
      <div className="banner-div header-container py-8 px-40 bg-gray-100">
        <div className="banner-contents mt-20 order-last md:order-first">
          <h3 className="text-center mb-5 font-bold text-3xl">Job Details</h3>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-flow-col mb-10 w-3/4 mx-auto mt-32" >
        <div className="text-zinc-400 col-span-2">
          <p className="mb-6">
            <spam className="text-base font-bold text-black">Job Description:</spam> {jobDetails.job_description}
          </p>
          <p className="mb-6">
            <spam className="text-base font-bold text-black">Job Responsibility:</spam> {jobDetails.job_responsibility}
          </p>
          <p className="mb-6">
            <spam className="text-base font-bold text-black">Educational Requirements:</spam><br />{jobDetails.educational_requirements}
          </p>
          <p className="mb-6">
            <spam className="text-base font-bold text-black">Experiences:</spam><br /> {jobDetails.experiences}
          </p>
        </div>

        <div className="">
            <div className="bg-slate-100 rounded-lg mb-6 p-8 text-n">
                <h4 className="text-xl font-bold mb-6">Job Details</h4>
                <hr />
                <p className="mb-6">
                <FontAwesomeIcon className="text-gray-500" icon={faDollarSign} /><spam className="text-base font-bold ml-2">Salary:</spam> {jobDetails.salary}
                </p>
                <p className="mb-6">
                <FontAwesomeIcon className="text-gray-500" icon={faCalendarMinus} /><spam className="text-base font-bold ml-2">Job Title:</spam> {jobDetails.job_title}
                </p>

                <h4 className="text-xl font-bold mb-6">Contact Information</h4>
                <hr />

                <p className="mb-6 mt-6">
                <FontAwesomeIcon className="text-gray-500" icon={faPhone} /><spam className="text-base font-bold ml-2">Phone: </spam> {jobDetails.contact_information.phone}
                </p>
                <p className="mb-6">
                <FontAwesomeIcon className="text-gray-500" icon={faEnvelope} /><spam className="text-base font-bold ml-2">Email: </spam> {jobDetails.contact_information.email}
                </p>
                <p className="mb-6">
                <FontAwesomeIcon className="text-gray-500" icon={faLocationDot} /><spam className="text-base font-bold ml-2">Address: </spam> {jobDetails.location}
                </p>

            </div>
            <button className="bg-slate-500 py-5 w-full rounded-lg text-white font-bold text-xl"><Link>Apply Now</Link></button>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
