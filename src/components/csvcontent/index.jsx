import React from 'react';
import CsvContent from './CsvContent';

function index({ fileInfo }) {
  console.log(fileInfo);
  return (
    <CsvContent>
      <thead>
        {fileInfo[0].name}
      </thead>
    </CsvContent>
  );
}

export default index;
