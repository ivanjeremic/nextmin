import React, { useReducer } from 'react';

/* ***** */
/* Types */
/* ***** */
interface Props {
  children: React.ReactNode;
}

interface StateTypes {
  dummyBool: boolean;
}
interface ActionTypes {
  type: string;
}

type ContextProps = {
  DummyAction: unknown;
};

/* ******* */
/* Reducer */
/* ******* */
function stateReducer(state: StateTypes, action: ActionTypes) {
  switch (action.type) {
    case 'DUMMYACTION':
      return {
        ...state,
        dummyBool: true
      };

    default:
      return state;
  }
}

export const AppContext = React.createContext<Partial<ContextProps>>({});

export const AppContextProvider = (props: Props) => {
  const { children } = props;

  /* ************ */
  /* initialState */
  /* ************ */
  const initialState: StateTypes = {
    dummyBool: false
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  const DummyAction = () => {
    dispatch({ type: 'DUMMYACTION' });
  };

  console.log('dummyBool', state.dummyBool);

  return (
    <AppContext.Provider
      value={{
        DummyAction
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
