/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import MainContext from '../../context/MainContext';
import { findIndexPos } from '../../utils';

function RenderRows({ data, id }) {
  const { selectedRows, setSelectedRows } = useContext(MainContext);
  const [select, setSelect] = useState(false);

  const pickRow = () => {
    setSelect(!select);
    const tempArray = selectedRows.slice();

    if (!select) {
      tempArray.push(id);
      setSelectedRows(tempArray);
    }

    if (select) {
      const position = findIndexPos(tempArray, id);
      tempArray.splice(position, 1);
      setSelectedRows(tempArray);
    }
  };

  return (
    <div
      id={id}
      role="button"
      key={nanoid()}
      onClick={pickRow}
      tabIndex={0}
      onKeyUp={null}
      style={{ backgroundColor: select ? '#EEDC82' : '' }}
    >
      {
      data.map((cell) => (
        <span key={nanoid()}>{cell}</span>
      ))
      }
    </div>
  );
}

export default RenderRows;
