import React from "react";
import "./AddProject.scss";
import { useForm } from "react-hook-form";
import { ADD_PROJECT, ADD_USER_PROJECT } from "../../reducer/data_reducer";
import { getCookie } from "../../helpers/cookie";

export default function AddProject(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.project_name.trim().length === 0) {
      return alert("Please enter a project name");
    } else if (data.project_description.trim().length === 0) {
      return alert("Please enter a project description");
    } else {
      data.user_id = getCookie("userAuth");
      fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(async (res) => {
          if (res.status === 200) {
            const project = await res.json();
            props.dispatch({
              type: ADD_PROJECT,
              newProject: project,
            });
            return project;
          } else {
            alert("Could not create project. Is this a duplicate name?");
          }
        })
        .then((project) => {
          project.user_id = getCookie("userAuth");
          return fetch("/api/users_projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project),
          });
        })
        .then(async (res) => {
          if (res.status === 200) {
            const userProject = await res.json();
            props.dispatch({
              type: ADD_USER_PROJECT,
              newUserProject: userProject,
            });
            return userProject;
          } else {
            alert("Could not add user to project.");
          }
        })
        .catch((error) => console.error(error.message));
    }
  };
  return (
    <>
      <button onClick={() => props.setAddProject(false)}>Cancel</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Project Name</label>
        <input {...register("project_name")} type="text" />
        <label>Project Description</label>
        <input {...register("project_description")} type="text" />
        <input type="submit" className="create-project-button" />
      </form>
    </>
  );
}
