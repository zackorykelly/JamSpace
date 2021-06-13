import React from "react";
import classNames from "classnames";
import "./ProjectListItem.scss";
import { DELETE_PROJECT } from "../../reducer/data_reducer";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function ProjectListItem(props) {
  let projectClass = classNames("project-list__item");

  const deleteProject = (e) => {
    e.stopPropagation();
    const project = {
      projectId: props.projectId
    };
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
          alert("could not delete project");
        }
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <>
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
        <button
          type="button"
          className="close btn"
          onClick={(e) => deleteProject(e)}
        >
          <IoCloseCircleOutline size={25} />
        </button>
      </section>
    </>
  );
}
