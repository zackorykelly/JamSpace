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
      <p>
        <h5>{props.name}: </h5>
        {props.description}
      </p>
    </section>
  );
}
