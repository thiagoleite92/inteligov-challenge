import { nanoid } from 'nanoid';

function createEmptyRow(length) {
  const mountedNewRow = [];
  for (let i = 0; i < length; i += 1) {
    mountedNewRow.push('');
  }

  return mountedNewRow;
}

function findIndexPos(arr, id) {
  const position = arr.findIndex((element) => element.id === id);
  return position;
}

function insertIdToRows(data) {
  const newArray = data.map((row) => ({
    data: row, id: nanoid(),
  }));

  return newArray;
}

function extractHeaderFields(data) {
  const headerFields = data.reduce((acc, header) => {
    acc[header] = '';
    return acc;
  }, {});

  return headerFields;
}

export {
  createEmptyRow,
  findIndexPos,
  insertIdToRows,
  extractHeaderFields,
};
