import React from 'react';
import { resolve, join } from 'path';
import { readdirSync, statSync } from 'fs';
import { usePushArray } from '../hooks/usePushArray';

export const AppContext = React.createContext({});

export const AppContextProvider = props => {
  const { children } = props;

  /* const [projectsArr, setProjectsArr] = React.useState([]);
  const [myhook, setMyHook] = usePushArray(); */

  const [state, setstate] = React.useState([]);

  // Gets project dirs from nextjs_projects
  React.useEffect(() => {
    const locus = resolve(__dirname);
    const rootDir = locus.replace('app', 'nextjs-projects');
    // Run it
    const dirsArray = readdirSync(rootDir).filter(file =>
      statSync(join(rootDir, file)).isDirectory()
    );

    const Arr = [];
    dirsArray.forEach(dir => {
      Arr.push({ value: dir, label: dir });
    });
    setstate(Arr);
    console.log('Arr', Arr);
  }, []);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};
