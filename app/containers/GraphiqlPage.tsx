import React from 'react';
import BrowserView from 'react-electron-browser-view';

function GraphiqlPage() {
  return (
    <BrowserView
      // Your source
      src="http://localhost:3000/api/graphql"
      // Using events
      onDidAttach={() => {
        console.log('BrowserView attached');
      }}
      onUpdateTargetUrl={() => {
        console.log('Updated Target URL');
      }}
      // Providing styling for the container element
      style={{
        width: '100%',
        height: '100%',
        minHeight: 10
      }}
    />
  );
}

export default GraphiqlPage;
