import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/MainContext';
import DropZone from './DropZone';

export default function index() {
  const [localFileContent, setLocalFileContent] = useState([]);
  const { setFileContent } = useContext(MainContext);

  useEffect(() => {
    setFileContent(localFileContent);
  }, [localFileContent]);

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
            setLocalFileContent(text);
          });
      }}
    >
      <h3>Arraste o arquivo</h3>
    </DropZone>
  );
}
