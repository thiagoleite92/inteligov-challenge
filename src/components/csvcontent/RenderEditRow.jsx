/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/MainContext';
import { extractHeaderFields } from '../../utils';

function RenderEditRow({ id, setEnableEditRow }) {
  const { globalFileContent, setGlobalFileContent } = useContext(MainContext);
  const [headers, setHeaders] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    setHeaders(globalFileContent[0].data);
    setInputs(extractHeaderFields(globalFileContent[0].data));
  }, [id]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs((oldState) => ({
      ...oldState, [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    const infoToSave = headers.map((head) => inputs[head]);

    const arrayToSave = globalFileContent.map((row) => {
      if (row.id === id) {
        return { data: infoToSave, id };
      }
      return row;
    });

    setGlobalFileContent(arrayToSave);
    setEnableEditRow(null);
  };

  return (
    <form>
      {headers.map((header) => (
        <label htmlFor={header}>
          {header}
          <input required type="text" name={header} onChange={(e) => handleChange(e)} />
        </label>
      ))}
      <div>

        <button type="button" onClick={handleSaveEdit}>Salvar</button>
        <button type="button" onClick={() => setEnableEditRow(null)}>Cancelar</button>
      </div>
    </form>
  );
}

export default RenderEditRow;
