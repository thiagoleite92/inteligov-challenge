import React from 'react';
import CsvContent from './CsvContent';

function index({ globalFileContent }) {
  console.log(globalFileContent);
  return (
    <CsvContent>
      <thead>
        {
          globalFileContent.data[0].map((head) => (
            <th>{head}</th>
          ))
        }
      </thead>
    </CsvContent>
  );
}

export default index;
