import React from "react";
import "./AddProject.scss";
import { useForm } from "react-hook-form";
import { ADD_PROJECT } from "../../reducer/data_reducer";
import { getCookie } from "../../helpers/cookie";



export default function AddProject(props) {
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
    data.user = getCookie("userAuth")
    console.log("data", data);
    fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(async (res) => {
        if (res.status === 200) {
          const project = await res.json();
          props.dispatch({
            type: ADD_PROJECT,
            newProject: project
          })
        } else {
          alert("could not create project")
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <>
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
