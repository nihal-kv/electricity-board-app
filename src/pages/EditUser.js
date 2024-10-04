// EditUser.js

import React, { useState, useEffect } from 'react';
import { validateUserData } from '../utils/validation';

const EditUser = ({ selectedUser, onSave, onCancel }) => {
  const [formData, setFormData] = useState(selectedUser);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(selectedUser);  // Set the initial data when the component mounts
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateUserData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSave(formData);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Applicant ID (Uneditable):
          <input
            type="text"
            name="applicantId"
            value={formData.applicantId}
            readOnly
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </label>
        <br />
        <label>
          Connection Type:
          <input
            type="text"
            name="connectionType"
            value={formData.connectionType}
            onChange={handleChange}
          />
          {errors.connectionType && <p>{errors.connectionType}</p>}
        </label>
        <br />
        <label>
          Load Applied (KV):
          <input
            type="number"
            name="loadApplied"
            value={formData.loadApplied}
            onChange={handleChange}
          />
          {errors.loadApplied && <p>{errors.loadApplied}</p>}
        </label>
        <br />
        <label>
          Date of Application (Uneditable):
          <input
            type="date"
            name="dateOfApplication"
            value={formData.dateOfApplication}
            readOnly
          />
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
