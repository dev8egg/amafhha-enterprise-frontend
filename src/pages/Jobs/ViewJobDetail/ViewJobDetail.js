// ViewJobDetail.js
import React from 'react';

const ViewJobDetail = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Job Detail</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-700 mb-2"><strong>Job ID:</strong> {job.id}</p>
        <p className="text-sm text-gray-700 mb-2"><strong>Job Name:</strong> {job.name}</p>
        <p className="text-sm text-gray-700 mb-2"><strong>Job By:</strong> {job.by}</p>
        <p className="text-sm text-gray-700 mb-2"><strong>Created At:</strong> {job.createdAt}</p>
      </div>
    </div>
  );
};

export default ViewJobDetail;
