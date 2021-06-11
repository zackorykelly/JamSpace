import React from "react";
import classNames from "classnames";
import "./ProjectListItem.scss";

export default function ProjectListItem(props) {
  let projectClass = classNames("project-list__item");

  return (
    <section
      className={projectClass}
      onClick={() => {
        props.setProject(props.projectId);
      }}
    >
      <h4>{props.name}: </h4>
      <p>{props.description}</p>
    </section>
  );
}
