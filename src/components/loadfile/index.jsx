import React, { useState } from 'react';
import CsvContent from '../csvcontent';
import LoadFile from './LoadFile';

export default function index() {
  const [fileInfo] = useState([{ id: 1, name: 'thiago', email: 'test@example.com' }]);
  return (
    <LoadFile>
      {
        !fileInfo
          ? null
          : <CsvContent />
    }
    </LoadFile>
  );
}
