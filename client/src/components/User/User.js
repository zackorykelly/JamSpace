import React from "react";
import classNames from "classnames";
import "./User.scss";

export default function User(props) {
  let userClass = classNames("user__item");
const DeleteUserFromProject = () => {
 
}
  return (
    <section className={userClass}>
      <h4>{props.name}: </h4>
      <p className={"user__email"}>{props.email}</p>
      <button onSubmit={DeleteUserFromProject}>Delete</button>
    </section>
  );
}
