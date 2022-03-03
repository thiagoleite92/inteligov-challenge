import React from 'react';
import CsvContent from './CsvContent';

function index({ globalFileContent }) {
  return (
    <CsvContent>
      {globalFileContent.data.map((row) => (
        <div>
          {
          row.map((cell) => (
            <span>{cell}</span>
          ))
          }
        </div>
      ))}
    </CsvContent>
  );
}

export default index;
