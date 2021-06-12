import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import "./Login.scss";

export default function Login(props) {
  let history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const user = props.users.find((user) => {
      return user.email === data.email && user.password === data.password;
    });
    if (!user) {
      alert("not a user");
      return;
    }
    setCookie("userAuth", `${user.id}`, 20);
    props.setUser(user);
    history.push("/");
  };

  // --------------------RETURN--------------------------
  return (
    <>
      <div className="login-form">
        <center className="login-center">
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
        </center>
      </div>
    </>
  );
}
