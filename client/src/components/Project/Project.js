import React from "react";
import File from "../File/File";
import User from "../User/User";
import classNames from "classnames";

export default function Project(props) {
  let projectClass = classNames("project__item");

  const listFiles = props.files.map((file) => (
    <File key={file.id} file={file} setFile={props.setFile}></File>
  ));

  const listUsers = props.users.map((user) => (
    <User key={user.id} name={user.full_name} email={user.email}></User>
  ));

  return (
    <>
      <h1>Project: {props.project.name}</h1>
      <button onClick={props.closeProject}>Close</button>
      <div>
        <h4>Files</h4>
        {listFiles}
      </div>
      <div>
        <h4>Users</h4>
        {listUsers}
      </div>
    </>
  );
}
