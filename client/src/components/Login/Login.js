import React, { useState, Fragment } from 'react';
// import classNames from "classnames";
import "./Login.scss";

export default function Login({setAuth}) {
  const [isActiveE, setIsActiveE] = useState(false);
  const [isActiveP, setIsActiveP] = useState(false);
  const [valueE, setValueE] = useState('');
  const [valueP, setValueP] = useState('');

  function handleEmailChange(text) {
    setValueE(text);
  
    if (text !== '') {
      setIsActiveE(true);
    } else {
      setIsActiveE(false);
    }
  }
  function handlePasswordChange(text) {
    setValueP(text);
  
    if (text !== '') {
      setIsActiveP(true);
    } else {
      setIsActiveP(false);
    }
  }
  return  <Fragment>
  <div className="login-form">
    <form>
  <div id="float-email">
  <input
  type="email"
  value={valueE}
  onChange={(e) => handleEmailChange(e.target.value)}
/>

<label className={ isActiveE ? "Active" : ""} htmlFor="email" >
  E-mail
  </label>
  </div>
  <div id="float-password">
  <input
  type="password"
  value={valueP}
  onChange={(e) => handlePasswordChange(e.target.value)}
/>

<label className={ isActiveP ? "Active" : ""} htmlFor="password" >
  Password
  </label>
  </div>
</form>
  <button type="submit" className="login-button" onClick={() => setAuth(true)}>Login</button>
</div>
</Fragment>
;
}
