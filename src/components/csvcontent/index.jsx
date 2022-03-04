import React from 'react';
import CsvContent from './CsvContent';
import AddNewRow from './AddNewRow';

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
          <label htmlFor="select-row">
            <input type="checkbox" name="select-row" />
          </label>
        </div>
      ))}
      <AddNewRow />
    </CsvContent>
  );
}

export default index;
