import React, { useState } from 'react';
import DropZone from './DropZone';

export default function index() {
  const [fileInfo, setFileInfo] = useState([]);
  console.log(fileInfo);
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
            setFileInfo(text);
          });
      }}
    >
      <h3>Arraste o arquivo</h3>
    </DropZone>
  );
}
