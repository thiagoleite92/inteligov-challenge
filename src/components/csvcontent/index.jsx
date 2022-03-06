import React, { useState } from 'react';
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
      <div><span /></div>
    </CsvContent>
  );
}

export default index;
