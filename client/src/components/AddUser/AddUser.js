import React from "react";
import "./AddUser.scss";
import { useForm } from "react-hook-form";
import { ADD_USER_PROJECT } from "../../reducer/data_reducer";
import { getUserByEmail } from "../../helpers/selectors";

export default function AddUser(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data["id"] = props.currentProject.id;
    if (getUserByEmail(props.state, data["user_email"]) === null) {
      return alert("There are no users with that email");
    } else {
      data["user_id"] = getUserByEmail(props.state, data["user_email"]).id;
      fetch("/api/users_projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(async (res) => {
          if (res.status === 200) {
            const userProject = await res.json();
            props.dispatch({
              type: ADD_USER_PROJECT,
              newUserProject: userProject,
            });
          } else {
            alert(
              "Could not assign user. Are they already a part of the project?"
            );
          }
        })
        .catch((error) => console.error(error.message));
    }
  };

  return (
    <>
      <form className="new-user-form" onSubmit={handleSubmit(onSubmit)}>
        <button
          type="button"
          className="btn btn-danger cancel-add-user"
          onClick={() => props.setAddUserSelected(false)}
        >
          Cancel
        </button>
        <label className="add-user-label" for="user-email">
          User Email:
        </label>
        <input
          id="user-email"
          {...register("user_email")}
          type="email"
          placeholder="Email"
        />
        <button type="submit" className="btn btn-secondary add-user-button">
          Add User
        </button>
      </form>
    </>
  );
}
