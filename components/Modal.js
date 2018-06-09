import React, { Component } from 'react';

export default (props) => (
  <React.Fragment>
    <div id={props.id} className={props.classes}>
    <div className="modal-background"></div>
    <div className="modal-content">
      <p className="image">
        <img src={props.lbImage} alt="" />
      </p>
    </div>
      <button onClick={props.close} className="modal-close is-large" aria-label="close"></button>
  </div>
    {props.children}
  </React.Fragment>
)