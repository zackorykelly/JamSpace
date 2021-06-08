import React from "react";
import classNames from "classnames";
import "./ProjectListItem.scss";

export default function ProjectListItem(props) {
  let projectClass = classNames("project-list__item");

  return (
    <li
      className={projectClass}
      onClick={() => {
        props.setProject(props.projectId);
      }}
    >
      <h4>{props.name}: </h4>
      <p className={"project-list__description"}>{props.description}</p>
    </li>
  );
}
