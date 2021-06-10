import React, { useState } from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import AddProject from "../AddProject/AddProject";

export default function ProjectList(props) {
  let [addProject, setAddProject] = useState(false);

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
      <h1>Your Projects</h1>
      {!addProject && (
        <section
          className="project-list__item"
          onClick={() => setAddProject(!addProject)}
        >
          New Project
        </section>
      )}
      {addProject && (
        <section
          className="project-list__item"
          // onClick={() => setAddProject(!addProject)}
        >
          <AddProject user={props.user} dispatch={props.dispatch}/>
        </section>
      )}
      <ul>{listProjects}</ul>
    </>
  );
}
