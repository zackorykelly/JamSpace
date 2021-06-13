import React from "react";
import classNames from "classnames";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./User.scss";

export default function User(props) {
  let userClass = classNames("user__item");
  const deleteUserFromProject = () => {};
  return (
    <section className={userClass}>
      <h4>{props.name}: </h4>
      <p className={"user__email"}>{props.email}</p>
      <button className="close btn" onSubmit={deleteUserFromProject}>
        <IoCloseCircleOutline size={25} />
      </button>
    </section>
  );
}
