import React from "react";
import "./AddUser.scss";
import { useForm } from "react-hook-form";
import { ADD_USERS_PROJECTS } from "../../reducer/data_reducer";
import { getUserByEmail } from "../../helpers/selectors";

export default function AddUser(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(props);
    data["project_id"] = props.currentProject.id;
    data["user_id"] = getUserByEmail(props.state, data["user_email"]).id;
    console.log("data", data);
    fetch("/api/users_projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) {
          const usersProjects = await res.json();
          props.dispatch({
            type: ADD_USERS_PROJECTS,
            newUsersProjects: usersProjects,
          });
        } else {
          alert("could not create users_projects link");
        }
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>User Email: </label>
        <input {...register("user_email")} type="email" />
        <input type="submit" className="create-users_projects-button" />
      </form>
    </>
  );
}
