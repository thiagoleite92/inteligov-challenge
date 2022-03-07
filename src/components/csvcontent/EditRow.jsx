import React, { useContext, useEffect, useState } from 'react';
import { GiSave } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
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

    const trackInputsValue = (oldState) => ({
      ...oldState, [name]: value,
    });

    setInputs(trackInputsValue);
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

    const switchDataRowById = (row) => {
      if (row.id === id) {
        return { data: infoToSave, id };
      }
      return row;
    };

    const arrayToSave = globalFileContent.map(switchDataRowById);

    setGlobalFileContent(arrayToSave);
    return setEnableEditRow(null);
  };

  return (
    <form>
      {headers.map((header) => (
        <label htmlFor={header} key={nanoid()}>
          <input required type="text" name={header} onChange={(e) => handleChange(e)} placeholder={header} />
        </label>
      ))}
      <div>
        {
          verifyColumn
            ? 'First row cannot have repeated names'
            : null
        }
        <button type="button" onClick={handleSaveEdit} className="btn-edit">
          <GiSave />
        </button>
        <button type="button" onClick={() => setEnableEditRow(null)} className="btn-del">
          <MdCancel />
        </button>
      </div>
    </form>
  );
}

RenderEditRow.propTypes = {
  id: PropTypes.number,
  setEnableEditRow: PropTypes.func,
}.isRequired;

export default RenderEditRow;
