import React from 'react';
import { resolve, join } from 'path';
import { readdirSync, statSync } from 'fs';

export const AppContext = React.createContext({});

export const AppContextProvider = props => {
  const { children } = props;

  const [projectsArr, setProjectsArr] = React.useState({});

  // Gets project dirs from nextjs_projects
  function getDirectories(src) {
    const dirs = readdirSync(src).filter(file =>
      statSync(join(src, file)).isDirectory()
    );
    const Arr = [];
    dirs.forEach(dir => {
      Arr.push({ value: dir, label: dir });
    });
    setProjectsArr(Arr);
    console.log(projectsArr);
  }

  React.useEffect(() => {
    const locus = resolve(__dirname);
    const rootDir = locus.replace('app', 'nextjs-projects');
    getDirectories(rootDir);
  }, [setProjectsArr]);

  return (
    <AppContext.Provider value={{ projectsArr }}>
      {children}
    </AppContext.Provider>
  );
};
