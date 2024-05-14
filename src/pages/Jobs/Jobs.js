import React, { useState } from 'react';
import AddNewJob from './AddNewJob/AddNewJob';
import ViewJobDetail from './ViewJobDetail/ViewJobDetail';
import ViewJobs from './ViewJobs/ViewJobs';
import Modal from '../../components/Modal';

const Jobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'test job', by: "Monis", created_at: new Date().toDateString() },
    { id: 2, name: 'test job 2', by: "Monis", created_at: new Date().toDateString() },
    { id: 3, name: 'test job 3', by: "Monis", created_at: new Date().toDateString() },
    { id: 4, name: 'test job 4', by: "Monis", created_at: new Date().toDateString() }
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
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setShowAddModal(false);
  };

  return (
    <div className="container mx-auto px-4">
      {/* View Jobs */}
      <ViewJobs
        jobs={jobs}
        onViewDetail={handleViewDetail}
        onDelete={handleDelete}
      />

      {/* Add New Job Modal */}
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <AddNewJob onAdd={handleAddJob} />
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
