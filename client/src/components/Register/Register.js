import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ADD_USER } from "../../reducer/data_reducer";
import { setCookie } from '../../helpers/cookie'


import "./Register.scss";

export default function Register(props) {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(async (res) => {
      if (res.status === 200) {
        console.log(res)
        const user = await res.json();
        props.dispatch({
          type: ADD_USER,
          newUser: user
        })
        setCookie('userAuth', `${user.id}`, 20)
        props.setUser(user)
          history.push("/")
        } else {
          alert("user alr exists");
        }
      })

      .catch((error) => console.error(error.message));
  };

  // --------------------RETURN--------------------------
  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id="float-full-name">
            <input {...register("name")} type="text" />
            <label className="Active">Full Name</label>
          </div>
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
    </>
  );
}
