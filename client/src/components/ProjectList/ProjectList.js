import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import AddProject from "../AddProject/AddProject";
import "./ProjectList.scss";

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
      <div className="project-list__container">
        <h1 className="project-list__title">
          Your Projects
          {!addProject && (
            <section
              id="new-project"
              className="project-list__item add"
              onClick={() => setAddProject(true)}
            >
              <IoAddCircleOutline size={25} />
            </section>
          )}
        </h1>
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
