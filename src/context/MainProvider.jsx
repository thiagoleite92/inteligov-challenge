import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [globalFileContent, setGlobalFileContent] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  console.log(selectedRows, 'provider');

  const context = useMemo(() => ({
    setGlobalFileContent,
    globalFileContent,
    selectedRows,
    setSelectedRows,
  }
  ), [globalFileContent, selectedRows]);

  return (
    <MainContext.Provider value={context}>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MainProvider;
