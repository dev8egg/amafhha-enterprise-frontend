// CuttingRequest.js
import React, { useState } from 'react';
import ViewRequests from './ViewRequests/ViewRequest';


const CuttingRequest = () => {
  const [requests, setRequests] = useState([
    {
      CuttingRequestID: 1,
      JobID: 2,
      ProductName: "1KG Mithai Box",
      sheet: {
        material: "",
        GSM: "",
        packets: "",
        cuttingSize: ""
      }
    },{
      CuttingRequestID: 2,
      JobID: 2,
      ProductName: "1KG Mithai Box",
      sheet: {
        material: "",
        GSM: "",
        packets: "",
        cuttingSize: ""
      }
    }
  ]);

  const handleViewRequest = (request) => {
    // Handle viewing the request details
    console.log('Viewing request:', request);
  };

  const handleEditRequest = (request) => {
    // Handle editing the request details
    console.log('Editing request:', request);
  };

  const handleDeleteRequest = (cuttingRequestID) => {
    // Handle deleting the request
    setRequests(requests.filter(request => request.CuttingRequestID !== cuttingRequestID));
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cutting Request</h2>
      <ViewRequests
        requests={requests}
        onView={handleViewRequest}
        onEdit={handleEditRequest}
        onDelete={handleDeleteRequest}
      />
    </div>
  );
};

export default CuttingRequest;
