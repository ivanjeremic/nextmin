/* eslint-disable promise/always-return */
/* eslint-disable no-console */
import React from 'react';
import makeFile from '../../generators/makeFile';

/* const { dialog } = require('electron').remote;

const selectDir = () => {
  dialog
    .showOpenDialog({ properties: ['openFile', 'openDirectory'] })
    .then((result: { canceled: any; filePaths: any }) => {
      console.log(result.canceled);
      console.log(result.filePaths);
    })
    .catch((err: any) => {
      console.log(err);
    });
}; */

const addRouteHandler = () => {
  const testapp = 'testapp';
  const newroute = 'Banana.js';
  makeFile(testapp, newroute);
};

function Menu() {
  return (
    <div>
      <aside className="menu">
        <p className="menu-label">Content Types</p>
        <ul className="menu-list">
          <li>
            <a href="/#">Dashboard</a>
          </li>
          <li onClick={addRouteHandler}>
            <a>Create API Endpoint</a>
          </li>
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <a href="/#">Team Settings</a>
          </li>
          <li>
            <a href="/#">Invitations</a>
          </li>
          <li>
            <a href="/#">Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a href="/#">Authentication</a>
          </li>
        </ul>
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li>
            <a href="/#">Payments</a>
          </li>
          <li>
            <a href="/#">Transfers</a>
          </li>
          <li>
            <a href="/#">Balance</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Menu;
