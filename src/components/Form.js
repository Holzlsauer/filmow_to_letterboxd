import React, {useState} from 'react';
import loadPythonFile from '../utils/javascript/loader';


const form = ({handleMovieSubmit}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    loadPythonFile(event.target.username.value);
    handleMovieSubmit();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username no Filmow</label>
        <div className="control has-icons-left">
          <input className="input is-success" type="text" name="username"/>
          <span className="icon is-small is-left">
            <i className="fas fa-user"/>
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary" type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default form;
