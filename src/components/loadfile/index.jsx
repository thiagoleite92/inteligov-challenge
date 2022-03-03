import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import CsvContent from '../csvcontent';
import LoadFile from './LoadFile';

export default function index() {
  const { globalFileContent } = useContext(MainContext);
  console.log(globalFileContent, 'loadfile');
  return (
    <LoadFile>
      {
        globalFileContent.length === 0
          ? null
          : <CsvContent globalFileContent={globalFileContent} />
    }
    </LoadFile>
  );
}
