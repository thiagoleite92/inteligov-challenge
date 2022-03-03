import React, { useContext } from 'react';
import { parse } from 'papaparse';
import MainContext from '../../context/MainContext';
import DropZone from './DropZone';

export default function index() {
  const { setGlobalFileContent } = useContext(MainContext);
  return (
    <DropZone
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        Array.from(e.dataTransfer.files).filter((file) => file.type === 'text/csv')
          .forEach(async (file) => {
            const text = await file.text();
            const result = parse(text);
            setGlobalFileContent(result);
          });
      }}
    >
      <h3>Arraste o arquivo</h3>
    </DropZone>
  );
}
