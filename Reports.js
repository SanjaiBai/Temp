import React from 'react';

const Reports = ({ selectedReport, setSelectedReport, dateRange, setDateRange }) => {
  const handleExport = () => {
    alert(`Exporting ${selectedReport} report from ${dateRange.start} to ${dateRange.end}`);
  };

  return (
    <div>
      <h2>Reports</h2>
      <select value={selectedReport} onChange={(e) => setSelectedReport(e.target.value)}>
        <option value="">Select Report</option>
        <option value="consented">Consented</option>
        <option value="roll-forward">Roll Forward</option>
        <option value="benefit-statement">Benefit Statement</option>
        <option value="pbi">PBI</option>
      </select>

      {selectedReport && (
        <>
          <br /><br />
          <label>Start Date: </label>
          <input type="date" onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} />
          <br />
          <label>End Date: </label>
          <input type="date" onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} />
          <br /><br />
          <button onClick={handleExport}>Export Report</button>
        </>
      )}
    </div>
  );
};

export default Reports;

