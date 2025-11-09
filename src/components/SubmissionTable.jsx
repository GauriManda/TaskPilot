import React from 'react';

const SubmissionTable = ({ submissions, tableRef }) => {
  if (submissions.length === 0) return null;

  return (
    <div className="submission-table container" ref={tableRef}>
      <h2>Submitted Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.phone}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;