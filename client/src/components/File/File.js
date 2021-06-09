import React from "react";
import classNames from "classnames";
import "./File.scss";

export default function File(props) {
  let fileClass = classNames("file__item");

  return (
    <section className={fileClass} onClick={() => props.setFile(props.fileId)}>
      <h4>{props.name}: </h4>
      <p className={"file__description"}>{props.description}</p>
    </section>
  );
}
