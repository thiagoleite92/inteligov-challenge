import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const context = useMemo(() => ({ foo: 'bar' }), []);
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
