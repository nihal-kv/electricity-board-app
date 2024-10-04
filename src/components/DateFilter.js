import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ startDate, endDate, handleDateChange }) => {
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date, 'start')}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => handleDateChange(date, 'end')}
        placeholderText="End Date"
      />
    </div>
  );
};

export default DateFilter;
