import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [fileContent, setFileContent] = useState([]);
  console.log(Array.isArray(fileContent), 'aqui');

  const context = useMemo(() => ({
    fileContent,
    setFileContent,
  }
  ), []);

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
