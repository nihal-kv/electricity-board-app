import React, { useState, useEffect } from 'react';

const Table = ({ data, handleDelete, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Applicant ID</th>
          <th>Name</th>
          <th>Connection Type</th>
          <th>Status</th>
          <th>Load Applied (KV)</th>
          <th>Date of Application</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.applicantId}>
            <td>{item.applicantId}</td>
            <td>{item.name}</td>
            <td>{item.connectionType}</td>
            <td>{item.status}</td>
            <td>{item.loadApplied}</td>
            <td>{item.dateOfApplication}</td>
            <td>
              <button onClick={() => handleEdit(item)}>Edit</button>
              {item.status === "Rejected" && (
                <button onClick={() => handleDelete(item.applicantId)}>Delete</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
