import React from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

export default function ProjectList(props) {
  const listProjects = props.projects.map((proj) => (
    <ProjectListItem
      key={proj.id}
      name={proj.name}
      description={proj.description}
    ></ProjectListItem>
  ));

  return (
    <>
      <h1>Projects List</h1>
      {listProjects}
    </>
  );
}
