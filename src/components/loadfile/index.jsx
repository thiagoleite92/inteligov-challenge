import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import CsvContent from '../csvcontent';
import LoadFile from './LoadFile';

export default function index() {
  const { globalFileContent } = useContext(MainContext);

  return (
    <LoadFile>
      {
        globalFileContent.length === 0
          ? <h3>here will appear the csv content</h3>
          : <CsvContent globalFileContent={globalFileContent} />
    }
    </LoadFile>
  );
}
