import React, { useState } from 'react';
import CsvContent from './CsvContent';
import AddNewRow from './AddNewRow';

function index({ globalFileContent }) {
  const [newRender, setNewRender] = useState(0);
  console.log(globalFileContent.data, 'csvcontent');

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
      <AddNewRow newRender={newRender} setNewRender={setNewRender} />
    </CsvContent>
  );
}

export default index;
