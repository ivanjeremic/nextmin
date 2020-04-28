import React, { /* useState, */ useReducer } from 'react';
import { resolve, join } from 'path';
import { readdirSync, statSync } from 'fs';
// import { OptionTypeBase } from 'react-select';

/* ***** */
/* Types */
/* ***** */
interface Props {
  children: React.ReactNode;
}

interface StateTypes {
  projectsSelectOptions: Array<{}>;
  dummyBool: boolean;
}
interface ActionTypes {
  type: string;
}

type ContextProps = {
  projectsSelectOptions: Array<{}>;
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
    dummyBool: false,
    projectsSelectOptions: []
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  React.useEffect(() => {
    /* ********************************************** */
    /* Gets project dirs from /nextjs_projects folder */
    /* ********************************************** */
    const locus = resolve(__dirname);
    const rootDir = locus.replace('app', 'nextjs-projects');
    const dirsArray = readdirSync(rootDir).filter(file =>
      statSync(join(rootDir, file)).isDirectory()
    );
    /* ******************************************* */
    /* Modify dirsArray and push it into Arr Array */
    /* ******************************************* */
    dirsArray.forEach(dir => {
      state.projectsSelectOptions.push({ value: dir, label: dir });
    });
  }, []);

  const DummyAction = () => {
    dispatch({ type: 'DUMMYACTION' });
  };

  console.log('projectsSelectOptions', state.projectsSelectOptions);
  console.log('dummyBool', state.dummyBool);

  return (
    <AppContext.Provider
      value={{
        projectsSelectOptions: state.projectsSelectOptions,
        DummyAction
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
