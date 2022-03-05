/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import MainContext from '../../context/MainContext';
import { findIndexPos } from '../../utils';

function RenderRows({ row, pos }) {
  const { selectedRows, setSelectedRows } = useContext(MainContext);
  const [select, setSelect] = useState(false);

  const pickRow = () => {
    setSelect(!select);
    const tempArray = selectedRows.slice();

    if (select) {
      tempArray.push(pos);
      setSelectedRows(tempArray);
    }

    if (!select) {
      const position = findIndexPos(tempArray, pos);
      tempArray.splice(position, 1);
      setSelectedRows(tempArray);
    }

    console.log(selectedRows, 'renderows');
  };

  return (
    <div
      role="button"
      key={row}
      onClick={pickRow}
      tabIndex={0}
      onKeyUp={null}
      style={{ backgroundColor: select ? '#EEDC82' : '' }}
    >
      {
      row.map((cell) => (
        <span key={cell}>{cell}</span>
      ))
      }
    </div>
  );
}

export default RenderRows;
