import React from 'react';

function Nextmin() {
  return (
    <div>
      <div className="columns">
        <div
          className="column is-one-fifth"
          style={{ background: 'rgb(145, 155, 174)' }}
        >
          NEXTMIN
        </div>
        <div className="column content-column" style={{ background: 'grey' }}>
          AppBar
        </div>
      </div>
      <div className="columns">
        <div
          className="column is-one-fifth"
          style={{
            backgroundColor: 'rgb(24, 32, 46)'
          }}
        >
          Menu
        </div>
        <div className="column content-column">Content</div>
      </div>
    </div>
  );
}

export default Nextmin;
