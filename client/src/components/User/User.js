import React from "react";
import classNames from "classnames";
import { DELETE_USER_PROJECT } from "../../reducer/data_reducer";
import "./User.scss";

export default function User(props) {
  let userClass = classNames("user__item");
  const deleteUserFromProject = (data) => {
    // console.log("data on line 10", data);
    // console.log("PROPS KEY-------___", props.userId, props.projectId)
    const formData = new FormData();
    formData.append("projectId", props.projectId);
    formData.append("userId", props.userId);
    const projectData = {
      userId: props.userId,
      projectId: props.projectId
    }
    // console.log('FORM DATA', formData);
    fetch("/api/users_projects_delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // headers: {'Content-Type': 'multipart/form-data'},
      // body: JSON.stringify(formData)
      body: JSON.stringify(projectData)
    })
      .then(async (res) => {
        console.log('res.status is', res.status);
        if (res.status === 200) {
          // console.log(res);
          props.dispatch({
            type: DELETE_USER_PROJECT,
            deleteUserProject: await res.json()
          });
          // history.push("/projects");
        } else {
          alert("could not remove user");
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <section className={userClass}>
      <h4>{props.name}: </h4>
      <p className={"user__email"}>{props.email}</p>
        <button type="button" onClick={(e) => deleteUserFromProject(e)}>Delete</button>
    </section>
  );
}

