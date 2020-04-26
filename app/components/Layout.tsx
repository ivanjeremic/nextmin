import React from 'react';
import Menu from './Menu';
import Tabs from './Tabs';
import ProjectSelect from './ProjectSelect';

function Layout(props) {
  const { children } = props;

  return (
    <div className="gridWrapper">
      <div className="asideHeader">
        <ProjectSelect />
      </div>
      <div className="contentHeader">
        <Tabs />
      </div>
      <div className="gridAside">
        <Menu />
      </div>
      <div className="gridContent">{children}</div>
      <div className="gridFooter">gridFooter</div>
    </div>
  );
}

export default Layout;
