import React, { useState } from 'react';

const AddUserForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    applicantId: '',
    name: '',
    connectionType: '',
    loadApplied: '',
    dateOfApplication: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      applicantId: '',
      name: '',
      connectionType: '',
      loadApplied: '',
      dateOfApplication: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Applicant ID"
        value={formData.applicantId}
        onChange={(e) => setFormData({ ...formData, applicantId: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Load Applied (KV)"
        value={formData.loadApplied}
        onChange={(e) => setFormData({ ...formData, loadApplied: e.target.value })}
        required
        max="200"
      />
      <input
        type="date"
        value={formData.dateOfApplication}
        onChange={(e) => setFormData({ ...formData, dateOfApplication: e.target.value })}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
