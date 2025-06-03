import React, { useState } from 'react';
import Reports from '../components/Reports';

const ReportsContainer = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <Reports
      selectedReport={selectedReport}
      setSelectedReport={setSelectedReport}
      dateRange={dateRange}
      setDateRange={setDateRange}
    />
  );
};

export default ReportsContainer;
