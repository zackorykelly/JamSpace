import React, { useState } from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import AddProject from "../AddProject/AddProject";
import "./ProjectList.scss";

export default function ProjectList(props) {
  let [addProject, setAddProject] = useState(false);

  const listProjects = props.projects.map((proj) => {
    console.log('this is proj---------------', props.projects);
return (<ProjectListItem
      key={proj.id}
      projectId={proj.id}
      name={proj.name}
      description={proj.description}
      setProject={props.setProject}
      dispatch={props.dispatch}
    ></ProjectListItem>
  )});

  return (
    <>
      <div className="project-list__container">
        <h1>Your Projects</h1>
        {!addProject && (
          <section
            className="project-list__item"
            onClick={() => setAddProject(true)}
          >
            New Project
          </section>
        )}
        {addProject && (
          <section className="project-list__item">
            <AddProject
              user={props.user}
              dispatch={props.dispatch}
              setAddProject={setAddProject}
            />
          </section>
        )}
        <ul>{listProjects}</ul>
      </div>
    </>
  );
}
