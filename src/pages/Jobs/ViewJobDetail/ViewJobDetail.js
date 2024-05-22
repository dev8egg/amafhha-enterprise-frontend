// ViewJobDetail.js
import React from 'react';
import { Link } from 'react-router-dom';

const ViewJobDetail = ({ job }) => {

  return (
    <div className="shadow-md rounded bg-white">
      <div className='px-6 py-6 bg-primary rounded'>
        <h2 className="text-2xl text-white font-bold">Job Detail</h2>
      </div>
      <div className='px-6 py-6 bg-white rounded'>
        <div className="flex flex-wrap justify-between lg:justify-start md:justify-center">
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Job Number:</strong>
              <span className="px-2">{job.id}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Job Name:</strong>
              <span className="px-2">{job.name}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Job Description:</strong>
              <span className="px-2">{job.description}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Delivery Date:</strong>
              <span className="px-2">{job.deliver_date}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Client Name:</strong>
              <span className="px-2">{job.client_name}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Account Of:</strong>
              <span className="px-2">{job.account_of}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Costing Required:</strong>
              <span className="px-2">{job.costing_req ? 'Yes' : 'No'}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Created Date:</strong>
              <span className="px-2">{job.created_at}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Inserted by:</strong>
              <span className="px-2">{job.created_by}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Modified by:</strong>
              <span className="px-2">{job.updated_by}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Order In Pieces:</strong>
              <span className="px-2">{job.order_in_pieces}</span>
            </p>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <p className="text-sm w-full text-gray-600 p-2"><strong className="text-primary">Order In Sheet:</strong>
              <span className="px-2">{job.order_in_sheet}</span>
            </p>
          </div>
          {/* Repeat the above structure for other job details */}
        </div>
      </div>
      <div className="flex justify-end py-6 px-6">
        <Link to={`/cuttingprogram/${job.id}`} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg">
          Create Cutting Program
        </Link>
      </div>
    </div>


    // <div className="shadow-md rounded bg-white">
    //   <div className='px-6 py-6 bg-blue-600 rounded' >
    //     <h2 className="text-2xl font-bold">Job Detail</h2>
    //   </div>
    //   <div className='px-6 py-6 bg-white rounded'>
    //     <div className="grid grid-cols-2 gap-4">
    //       <div>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Job Number:</strong>
    //           <span className="px-2">{job.id}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Job Name:</strong>
    //           <span className="px-2">{job.name}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Job Description:</strong>
    //           <span className="px-2">{job.description}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Delivery Date:</strong>
    //           <span className="px-2">{job.deliver_date}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Client Name:</strong>
    //           <span className="px-2">{job.client_name}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Order In Pieces:</strong>
    //           <span className="px-2">{job.order_in_pieces}</span>
    //         </p>
    //       </div>
    //       <div className="mb-4">
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Account Of:</strong>
    //           <span className="px-2">{job.account_of}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Costing Required:</strong>
    //           <span className="px-2">{job.costing_req ? 'Yes' : 'No'}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Created Date:</strong>
    //           <span className="px-2">{job.created_at}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Inserted by:</strong>
    //           <span className="px-2">{job.created_by}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Modified by:</strong>
    //           <span className="px-2">{job.updated_by}</span>
    //         </p>
    //         <p className="text-sm w-full text-gray-600 p-2 p-4"><strong className="text-blue-600">Order In Sheet:</strong>
    //           <span className="px-2">{job.order_in_sheet}</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-end py-6 px-6 ">
    //     <Link to={`/cuttingprogram/${job.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
    //       Create Cutting Program
    //     </Link>
    //   </div>
    // </div>
  );
};

export default ViewJobDetail;
