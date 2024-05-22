import React, { useState } from 'react';

const AddNewJob = ({ onAdd, newJobId }) => {
  const [id] = useState(newJobId);
  const [name, setName] = useState('');
  const [deliver_date, setDeliveryDate] = useState('');
  const [client_name, setClientName] = useState('');
  const [account_of, setAccountOf] = useState('');
  const [costing_req, setCostingRequired] = useState(false);
  const [description, setJobDescription] = useState('');
  const [order_in_sheet, setOrderInSheet] = useState(0);
  const [order_in_pieces, setOrderInPieces] = useState(0);
  const [created_by] = useState('example');
  const [updated_by] = useState('example');
  // order_in_sheet

  const handleAdd = () => {
    const newJob = {
      id,
      name,
      created_at: new Date().toDateString(),
      deliver_date,
      client_name,
      account_of,
      costing_req,
      description,
      order_in_sheet,
      order_in_pieces,
      created_by,
      updated_by,
    };
    onAdd(newJob);
    // Clear the form fields
    setDeliveryDate('');
    setClientName('');
    setAccountOf('');
    setCostingRequired(false);
    setJobDescription('');
    setOrderInSheet(0);
    setOrderInPieces(0);
  };
  const handleSheetChange = (e) => {
    const value = e.target.value;
    setOrderInSheet(value);
    setOrderInPieces(value * 2);
  };

  const handlePiecesChange = (e) => {
    const value = e.target.value;
    setOrderInPieces(value);
    setOrderInSheet(Math.ceil(value / 2));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Add New Job</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="id">Job #:</label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="id"
            type="text"
            disabled={true}
            placeholder="Enter job number"
            value={id}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="created_at">Job Name:</label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="name"
            type="text"
            placeholder="Enter job name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="deliver_date">Delivery Date:</label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="deliver_date"
            type="date"
            value={deliver_date}
            onChange={e => setDeliveryDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="client_name">Client Name:</label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="client_name"
            type="text"
            placeholder="Enter client name"
            value={client_name}
            onChange={e => setClientName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="account_of">Account Of:</label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="account_of"
            type="text"
            placeholder="Enter account of"
            value={account_of}
            onChange={e => setAccountOf(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="costing_req">Costing Required:</label>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              id="costing_req"
              type="checkbox"
              checked={costing_req}
              onChange={e => setCostingRequired(e.target.checked)}
            />
            <span className="text-sm text-gray-600">T/F</span>
          </div>
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">Job Description:</label>
          <textarea
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="description"
            placeholder="Enter job description"
            value={description}
            onChange={e => setJobDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="order_in_pieces">Client Order In Pieces:</label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="order_in_pieces"
            type="number"
            value={order_in_pieces}
            onChange={handlePiecesChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="order_in_sheet">Client Order In Sheet:</label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="order_in_sheet"
            type="number"
            value={order_in_sheet}
            onChange={handleSheetChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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

