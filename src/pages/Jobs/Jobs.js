import React, { useState } from 'react';
import AddNewJob from './AddNewJob/AddNewJob';
import ViewJobDetail from './ViewJobDetail/ViewJobDetail';
import ViewJobs from './ViewJobs/ViewJobs';
import Modal from '../../components/Modal';
import { jobs as jobsData } from '../../data/data';

const Jobs = () => {
  const [jobs, setJobs] = useState(jobsData);


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
        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setShowAddModal(true)}
      >
        Add New Job
      </button>
    </div>
  );
};

export default Jobs;
