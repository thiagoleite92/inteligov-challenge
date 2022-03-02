import React, { useState } from 'react';
import LoadFile from './LoadFile';

export default function index() {
  const [fileInfo, setFileInfo] = useState([{ id: 1, name: 'thiago', email: 'test@example.com' }]);
  console.log(setFileInfo);
  return (
    <LoadFile>
      {
        !fileInfo
          ? null
          : (
            <ul>
              {fileInfo.map(({ id, name, email }) => (
                <li>{`ID: ${id} Nome: ${name} Email: ${email}`}</li>
              ))}
            </ul>
          )
    }
    </LoadFile>
  );
}
