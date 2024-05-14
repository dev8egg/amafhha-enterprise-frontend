// ViewJobs.js
import React from 'react';

const ViewJobs = ({ jobs, onViewDetail, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Job ID</th>
              <th className="border px-4 py-2">Job Name</th>
              <th className="border px-4 py-2">Job By</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.name}</td>
                <td className="border px-4 py-2">{job.by}</td>
                <td className="border px-4 py-2">{job.created_at}</td>
                <td className="border px-4 py-2">
                  <button className="mr-2 text-blue-500" onClick={() => onViewDetail(job.id)}>View Detail</button>
                  <button className="text-red-500" onClick={() => onDelete(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewJobs;
