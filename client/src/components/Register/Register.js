import React, { Fragment, useState } from 'react';
import "./Register.scss";

export default function Login(props) {
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // })
  // const { name, email, password } = inputs
  // const onChange =(e) => {
  //   console.log("onChange ", e.target.value)
  //   setInputs({...inputs, [e.target.name]
  //    : e.target.value});
  // };
  // const {name = inputs
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {name, email, password};
      const response = await fetch("http://localhost:3002/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      const parseRes = await response.json()
      console.log(parseRes)
    } catch (error) {
      console.error(error.message)
    }
  }

  const [isActiveE, setIsActiveE] = useState(false);
  const [isActiveP, setIsActiveP] = useState(false);
  const [isActiveN, setIsActiveN] = useState(false);
  const [valueE, setValueE] = useState('');
  const [valueP, setValueP] = useState('');
  const [valueN, setValueN] = useState('');

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
  function handleNameChange(text) {
    setValueN(text);
  
    if (text !== '') {
      setIsActiveN(true);
    } else {
      setIsActiveN(false);
    }
  }

  // --------------------RETURN--------------------------
  return  <Fragment>
  <div className="login-form">
    <form onSubmit={onSubmitForm}>
    <div id="float-full-name">
  <input
  type="text"
  value={valueN, name}
  onChange={ e => {
      setName(e.target.value)
      handleNameChange(e.target.value)
    }
  }

/>
<label className={ isActiveN ? "Active" : ""} htmlFor="name" >
  Full Name
  </label>
  </div>

  <div id="float-email">
  <input
  type="email"
  value={valueE, email}
  onChange = {e => {
    setEmail(e.target.value)
    handleEmailChange(e.target.value)
  }
  }

/>

<label className={ isActiveE ? "Active" : ""} htmlFor="email" >
  E-mail
  </label>
  </div>  

  <div id="float-password">
  <input
  type="password"
  value={valueP, password}
  onChange = {e => {
    setPassword(e.target.value)
    handlePasswordChange(e.target.value)
  }
  }

/>

<label className={ isActiveP ? "Active" : ""} htmlFor="password" >
  Password
  </label>
  </div>
  <button className="login-button">Register</button>
</form>
</div>
</Fragment>
;
}