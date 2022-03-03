import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [globalFileContent, setGlobalFileContent] = useState([]);

  const context = useMemo(() => ({
    setGlobalFileContent,
    globalFileContent,
  }
  ), [globalFileContent]);

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
