/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/MainContext';
import { extractHeaderFields, findIndexPos } from '../../utils';

function RenderEditRow({ id, setEnableEditRow }) {
  const { globalFileContent, setGlobalFileContent } = useContext(MainContext);
  const [headers, setHeaders] = useState([]);
  const [inputs, setInputs] = useState({});
  const [verifyColumn, setVerifyColumn] = useState(false);

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

    const position = findIndexPos(globalFileContent, id);

    if (position === 0) {
      const set = new Set(infoToSave);
      if (set.size !== infoToSave.length) {
        return setVerifyColumn(true);
      }
    }

    const arrayToSave = globalFileContent.map((row) => {
      if (row.id === id) {
        return { data: infoToSave, id };
      }
      return row;
    });

    setGlobalFileContent(arrayToSave);
    return setEnableEditRow(null);
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
        {
          verifyColumn
            ? 'First row cannot have repeated names'
            : null
        }
        <button type="button" onClick={handleSaveEdit} className="btn-edit">Salvar</button>
        <button type="button" onClick={() => setEnableEditRow(null)} className="btn-edit">Cancelar</button>
      </div>
    </form>
  );
}

export default RenderEditRow;
