import React, { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { AiOutlinePlus } from 'react-icons/ai';
import MainContext from '../../../context/MainContext';
import { extractHeaderFields } from '../../../utils';
import DownloadCsv from './DownloadCsv';

function AddNewRow() {
  const { globalFileContent, setGlobalFileContent } = useContext(MainContext);
  const [headers, setHeaders] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    setHeaders(globalFileContent[0].data);
    setInputs(extractHeaderFields(globalFileContent[0].data));
  }, [globalFileContent]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs((oldState) => ({
      ...oldState, [name]: value,
    }));
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    const tempArray = globalFileContent.slice();
    const inputsValue = headers.map((head) => inputs[head]);

    const newRow = { data: inputsValue, id: nanoid() };

    tempArray.push(newRow);
    setGlobalFileContent(tempArray);
  };

  return (
    <>
      <form className="add-row">
        {headers.map((header) => (
          <label htmlFor={header}>
            {header}
            <input required type="text" name={header} onChange={(e) => handleChange(e)} />
          </label>
        ))}
        <button type="button" onClick={handleAddRow}>
          <AiOutlinePlus />
        </button>
      </form>
      <DownloadCsv />
    </>
  );
}

export default AddNewRow;
