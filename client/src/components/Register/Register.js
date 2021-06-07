import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
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

  let history = useHistory();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log('data', data)
    fetch("/api/users", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then((res) => console.log(res))
    .catch((error) => console.error(error.message))

    history.push("/")
  }

  // --------------------RETURN--------------------------
  return <>
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="float-full-name">
          <input
            {...register("name")}
            type="text"


          />
          <label className="Active">
            Full Name
  </label>
        </div>

        <div id="float-email">
          <input
            {...register("email")}
            type="email"

          />

          <label className="Active">
            E-mail
  </label>
        </div>

        <div id="float-password">
          <input
            {...register("password")}
            type="password"

          />

          <label className="Active">
            Password
  </label>
        </div>
        <input type="submit" className="login-button" />
      </form>
    </div>
  </>
    ;
  }