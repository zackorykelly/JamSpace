import React, { useState, Fragment } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { setCookie } from '../../helpers/cookie'
// import classNames from "classnames";
import "./Login.scss";

export default function Login(props) {
  let history = useHistory();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const user = props.users.find(user => {
      return user.email === data.email && user.password === data.password
    })
    console.log('_____',user)
    if (!user) {
      alert('not a user')
      return;
    } 
    setCookie('userAuth', `${user.email}`, 20 )
    history.push("/")

  }

  // --------------------RETURN--------------------------
  return <>
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="float-email">
          <input {...register("email")} type="email" />
          <label className="Active">E-mail</label>
        </div>
        <div id="float-password">
          <input {...register("password")} type="password" />
          <label className="Active">Password</label>
        </div>
        <input type="submit" className="login-button" />
      </form>
    </div>
  </>;
}
