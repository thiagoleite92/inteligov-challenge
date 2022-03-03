import React from 'react';
import CsvContent from './CsvContent';

function index({ fileContent }) {
  console.log(fileContent, 'table');
  return (
    <CsvContent>
      <thead>
        teste
      </thead>
    </CsvContent>
  );
}

export default index;
