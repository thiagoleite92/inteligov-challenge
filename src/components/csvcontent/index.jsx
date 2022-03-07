import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { AddNewRow } from './buttons';
import CsvContent from './CsvContent';
import EditRow from './EditRow';
import ReadyOnlyRow from './ReadyOnlyRow';

function index({ globalFileContent }) {
  const [enableEditRow, setEnableEditRow] = useState(null);
  return (
    <CsvContent>
      {
        globalFileContent.map(({ data, id }) => (
          enableEditRow === id
            ? <EditRow data={data} id={id} setEnableEditRow={setEnableEditRow} key={nanoid()} />
            : (
              <ReadyOnlyRow
                data={data}
                id={id}
                setEnableEditRow={setEnableEditRow}
                key={nanoid()}
              />
            )
        ))
      }
      <div><span><AddNewRow /></span></div>
    </CsvContent>
  );
}

export default index;
