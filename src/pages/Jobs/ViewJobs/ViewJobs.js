import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ViewJobs = ({ jobs, onViewDetail, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border px-4 py-2">View Job</th>
              <th className="border px-4 py-2">Job ID</th>
              <th className="border px-4 py-2">Job Name</th>
              <th className="border px-4 py-2">Job By</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Delete Job</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border px-4 py-2">
                  <button
                    className="mr-2 text-blue-500 hover:text-blue-700 flex items-center"
                    onClick={() => onViewDetail(job.id)}
                  >
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    View Detail
                  </button>
                </td>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.name}</td>
                <td className="border px-4 py-2">{job.created_by}</td>
                <td className="border px-4 py-2">{job.created_at}</td>
                <td className="border px-4 py-2">
                  <button
                    className="text-red-500 hover:text-red-700 flex items-center"
                    onClick={() => onDelete(job.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} className="mr-1" />
                    Delete
                  </button>
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