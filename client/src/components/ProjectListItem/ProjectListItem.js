import React from "react";
import classNames from "classnames";
import "./ProjectListItem.scss";
import { DELETE_PROJECT } from "../../reducer/data_reducer";


export default function ProjectListItem(props) {
  let projectClass = classNames("project-list__item");
  const deleteProject = (e) => {
    e.stopPropagation()
    const project = {
      projectId: props.projectId
    }
    fetch("/api/projects_delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    })
      .then(async (res) => {
        if (res.status === 200) {
          props.dispatch({
            type: DELETE_PROJECT,
            deleteProject: await res.json()
          });
        } else {
          alert("could delete project");
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (<>
    <div>
    <section
      className={projectClass}
      onClick={() => {
        props.setProject(props.projectId);
      }}
    >
      <h4>{props.name}: </h4>
      <p>{props.description}</p>

    </section>
      <button type="button" onClick={(e) => deleteProject(e)}>Delete</button>
    </div>
    </>
  );
}
