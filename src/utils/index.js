import { nanoid } from 'nanoid';

function createEmptyRow(length) {
  const mountedNewRow = [];
  for (let i = 0; i < length; i += 1) {
    mountedNewRow.push('');
  }

  return mountedNewRow;
}

function findIndexPos(arrayOfPos, pos) {
  const position = arrayOfPos.indexOf(pos);
  return position;
}

function insertIdToRows(data) {
  const newArray = data.map((row) => ({
    data: row, id: nanoid(),
  }));

  return newArray;
}

export {
  createEmptyRow,
  findIndexPos,
  insertIdToRows,
};
