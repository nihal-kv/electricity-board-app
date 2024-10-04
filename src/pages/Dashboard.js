import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = ({ data }) => {
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredData = data.filter(item =>
    statusFilter === 'All' ? true : item.status === statusFilter
  );

  const chartData = filteredData.reduce((acc, item) => {
    const month = new Date(item.dateOfApplication).getMonth();
    if (!acc[month]) acc[month] = { month, count: 0 };
    acc[month].count += 1;
    return acc;
  }, []).map((_, i) => ({ month: `Month ${i + 1}`, count: _[i]?.count || 0 }));

  return (
    <div>
      <label>Status Filter: </label>
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
