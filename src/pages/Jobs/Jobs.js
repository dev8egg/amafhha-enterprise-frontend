import React, { useState } from 'react';
import AddNewJob from './AddNewJob/AddNewJob';
import ViewJobDetail from './ViewJobDetail/ViewJobDetail';
import ViewJobs from './ViewJobs/ViewJobs';
import Modal from '../../components/Modal';

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: 'Design website layout',
      description: '',
      order_in_sheet:50,
      order_in_pieces:100,
      deliver_date: '2024-05-20',
      costing_req: false,
      account_of: "tester",
      client_name: "Kababjees",
      updated_by: "monis",
      created_by: 'John Doe',
      updated_at: '2024-05-11',
      created_at: '2024-05-18'
    },
    {
      id: 2,
      name: 'Develop backend API',
      description: '',
      order_in_sheet: 15, 
      order_in_pieces: 30,
      deliver_date: '2024-05-20',
      costing_req: false,
      account_of: "tester",
      client_name: "Kababjees",
      updated_by: "monis",
      created_by: 'Jane Smith',
      updated_at: '2024-05-11',
      created_at: '2024-05-17'
    },
    {
      id: 3,
      name: 'Create marketing campaign',
      description: '',
      order_in_sheet: 5, 
      order_in_pieces: 10,
      deliver_date: '2024-05-20',
      costing_req: false,
      account_of: "tester",
      client_name: "Kababjees",
      updated_by: "monis",
      created_by: 'Emily Johnson',
      updated_at: '2024-05-11',
      created_at: '2024-05-16'
    }
  ]);


  const [selectedJob, setSelectedJob] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  // Function to handle viewing a job detail
  const handleViewDetail = (jobId) => {
    const selected = jobs.find(job => job.id === jobId);
    setSelectedJob(selected);
    setShowViewModal(true);
  };

  // Function to handle deleting a job
  const handleDelete = (jobId) => {
    const updatedJobs = jobs.filter(job => job.id !== jobId);
    setJobs(updatedJobs);
    // Clear selected job if it's the one being deleted
    if (selectedJob && selectedJob.id === jobId) {
      setSelectedJob(null);
    }
  };

  // Function to handle adding a new job
  const handleAddJob = (newJob) => {
    console.log({ id: jobs.length + 1, ...newJob })
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setShowAddModal(false);
  };

  return (
    <div className="container">
      {/* View Jobs */}
      <ViewJobs
        jobs={jobs}
        onViewDetail={handleViewDetail}
        onDelete={handleDelete}
      />

      {/* Add New Job Modal */}
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <AddNewJob onAdd={handleAddJob} newJobId={jobs.length + 1} />
        </Modal>
      )}

      {/* View Job Detail Modal */}
      {showViewModal && (
        <Modal onClose={() => setShowViewModal(false)}>
          <ViewJobDetail job={selectedJob} />
        </Modal>
      )}

      {/* Button to toggle Add New Job Modal */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setShowAddModal(true)}
      >
        Add New Job
      </button>
    </div>
  );
};

export default Jobs;