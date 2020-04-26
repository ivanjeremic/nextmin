import React from 'react';

function Tabs() {
  return (
    <div className="tabs is-centered is-boxed">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <i className="fas fa-image" aria-hidden="true" />
            </span>
            <span>GRAPHIQL</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <i className="fas fa-music" aria-hidden="true" />
            </span>
            <span>DATA</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <i className="fas fa-film" aria-hidden="true" />
            </span>
            <span>SCHEMAS</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <i className="far fa-file-alt" aria-hidden="true" />
            </span>
            <span>EVENTS</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
