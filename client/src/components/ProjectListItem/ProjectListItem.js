import React from "react";
import classNames from "classnames";
import "./ProjectListItem.scss";

export default function ProjectListItem(props) {
  let projectClass = classNames("project-list__item");

  return <li className={projectClass}>I am Project List Item</li>;
}
