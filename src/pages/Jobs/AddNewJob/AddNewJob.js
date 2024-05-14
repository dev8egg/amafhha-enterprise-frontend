// AddNewJob.js
import React, { useState } from 'react';

const AddNewJob = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [by, setBy] = useState('');

  const handleAdd = () => {
    // Perform validation if required
    const newJob = {
      name,
      by,
      created_at: new Date().toDateString(), // assuming you want to add current time as created at
    };
    onAdd(newJob);
    setName('');
    setBy('');
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Job Name:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter job name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="by">Job By:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="by"
          type="text"
          placeholder="Enter job by"
          value={by}
          onChange={e => setBy(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAdd}
        >
          Add Job
        </button>
      </div>
    </div>
  );
};

export default AddNewJob;
