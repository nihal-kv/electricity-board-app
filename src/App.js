// App.js

import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import AddUserForm from './components/AddUserForm';
import EditUser from './pages/EditUser';
import DateFilter from './components/DateFilter';
import Dashboard from './pages/Dashboard';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/storage';
import initialData from './data.json';

const App = () => {
  const [data, setData] = useState(loadFromLocalStorage('userData') || initialData);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    saveToLocalStorage('userData', data);
  }, [data]);

  const handleAddUser = (newUser) => {
    setData([...data, newUser]);
  };

  const handleDeleteUser = (id) => {
    setData(data.filter((user) => user.applicantId !== id));
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = (updatedUser) => {
    setData(
      data.map((user) => (user.applicantId === updatedUser.applicantId ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const handleDateChange = (date, type) => {
    if (type === 'start') setStartDate(date);
    else setEndDate(date);
  };

  const filteredData = data.filter((item) => {
    const date = new Date(item.dateOfApplication);
    return (!startDate || date >= startDate) && (!endDate || date <= endDate);
  });

  return (
    <div>
      <h1>Electricity Board Connection Requests</h1>
      {editingUser ? (
        <EditUser
          selectedUser={editingUser}
          onSave={handleSaveUser}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <AddUserForm onAdd={handleAddUser} />
          <DateFilter startDate={startDate} endDate={endDate} handleDateChange={handleDateChange} />
          <Table data={filteredData} handleDelete={handleDeleteUser} handleEdit={handleEditUser} />
          <Dashboard data={filteredData} />
        </>
      )}
    </div>
  );
};

export default App;
