import React from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

export default function ProjectList(props) {
  const listProjects = props.projects.map((proj) => (
    <ProjectListItem
      key={proj.id}
      projectId={proj.id}
      name={proj.name}
      description={proj.description}
      setProject={props.setProject}
    ></ProjectListItem>
  ));

  return (
    <>
      <h1>Projects</h1>
      <section className="project-list__item">New Project</section>
      <ul>{listProjects}</ul>
    </>
  );
}
