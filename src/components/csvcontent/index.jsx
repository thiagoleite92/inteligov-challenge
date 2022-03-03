import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import CsvContent from './CsvContent';

function index({ fileInfo }) {
  const { fileContent } = useContext(MainContext);
  console.log(fileContent, 'table');
  return (
    <CsvContent>
      <thead>
        {fileInfo[0].name}
      </thead>
    </CsvContent>
  );
}

export default index;
