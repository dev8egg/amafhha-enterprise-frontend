import React from 'react';

const ViewRequests = ({ requests, onView, onEdit, onDelete }) => {
  return (
    <div>
      {requests?.length === 0 ? (
        <p>No cutting requests available</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Cutting Request ID</th>
              <th className="py-2">Job ID</th>
              <th className="py-2">Product Name</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{request.CuttingRequestID}</td>
                <td className="border px-4 py-2">{request.JobID}</td>
                <td className="border px-4 py-2">{request.ProductName}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => onView(request)}
                  >
                    View
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => onEdit(request)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => onDelete(request.CuttingRequestID)}
                  >
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

export default ViewRequests;
