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
          <label htmlFor="select-row">
            <input type="checkbox" name="select-row" />
          </label>
        </div>
      ))}
      <div>
        <span />
        <label htmlFor="blank-row">
          <input
            type="button"
            name="blank-row"
            className="blank-row"
            onClick={() => console.log('oi')}
            value="ADD ROW"
          />
        </label>
      </div>
    </CsvContent>
  );
}

export default index;
