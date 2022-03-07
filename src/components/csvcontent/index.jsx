import React, { useState } from 'react';
import { AddNewRow } from './buttons';
import CsvContent from './CsvContent';
import RenderEditRow from './RenderEditRow';
import RenderRows from './RenderRows';

function index({ globalFileContent }) {
  const [enableEditRow, setEnableEditRow] = useState(null);
  return (
    <CsvContent>
      {
        globalFileContent.map(({ data, id }) => {
          if (enableEditRow === id) {
            return (
              <RenderEditRow data={data} id={id} setEnableEditRow={setEnableEditRow} />
            );
          }
          return (
            <RenderRows data={data} id={id} setEnableEditRow={setEnableEditRow} />
          );
        })
      }
      <AddNewRow />
    </CsvContent>
  );
}

export default index;
