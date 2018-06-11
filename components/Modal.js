import React, { Component } from 'react';

export default (props) => (
  <React.Fragment>
    <div id={props.id} className={props.classes}>
    <div className="modal-background"></div>
    <div className="modal-content">
      <div className="image modal-image">
        <img className="modal-src" id={props.id} data-src={props.lbImage} alt="" />
      </div>
    </div>
      <button onClick={props.close} className="modal-close is-large" aria-label="close"></button>
  </div>
    {props.children}
  </React.Fragment>
)