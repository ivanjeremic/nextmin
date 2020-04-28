import React from 'react';

export const HooksContext = React.createContext({});

export const AppContextProvider = props => {
  const { children } = props;

  // usePushArray() - set any value and get Array Back

  return (
    <HooksContext.Provider value={{ state }}>{children}</HooksContext.Provider>
  );
};
