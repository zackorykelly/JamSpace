import React from "react";
import classNames from "classnames";
import "./User.scss";

export default function File(props) {
  let userClass = classNames("user__item");

  return (
    <section className={userClass}>
      <h4>{props.name}: </h4>
      <p className={"user__email"}>{props.email}</p>
    </section>
  );
}
