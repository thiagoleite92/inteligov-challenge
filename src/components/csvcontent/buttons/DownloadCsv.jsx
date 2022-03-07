import React, { useContext } from 'react';
import MainContext from '../../../context/MainContext';

function DownloadCsv() {
  const { globalFileContent } = useContext(MainContext);

  const downloadCsv = () => {
    const csvString = globalFileContent
      .map(({ data }) => data)
      .map((cell) => cell.join(','))
      .join('\n');

    return csvString;
  };

  return (
    <a
      href={`data:text/csvcharset=utf-8,${encodeURIComponent(downloadCsv())}`}
      download="table.csv"
    >
      <button type="button" onClick={downloadCsv}>DownloadCsv</button>
    </a>
  );
}

export default DownloadCsv;
