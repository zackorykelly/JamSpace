import React, { useState } from "react";
import File from "../File/File";
import User from "../User/User";
import classNames from "classnames";
import AddUser from "../AddUser/AddUser";
import Media from "../Media/Media";

export default function Project(props) {
  let projectClass = classNames("project__item");
  let [addUserSelected, setAddUserSelected] = useState(false);
  let [recordFile, setRecordFile] = useState(false);

  const listFiles = props.files.map((file) => (
    <File key={file.id} file={file} setFile={props.setFile}></File>
  ));

  const listUsers = props.users.map((user) => (
    <User key={user.id} name={user.full_name} email={user.email}></User>
  ));

  const playAll = () => {
    const players = document.getElementsByClassName("file-audio-player");
    for (const player of players) {
      player.play();
    }
  };

  return (
    <>
      <h1>Project: {props.project.name}</h1>
      <div>
        <h4>Files</h4>
        {!recordFile && (
          <section
            id="record"
            className="file__item"
            onClick={() => setRecordFile(!recordFile)}
          >
            Record File
          </section>
        )}
        {recordFile && (
          <section onClick={() => setRecordFile(!recordFile)}>
            <Media />
          </section>
        )}
        <section id="play-all" className="file__item" onClick={() => playAll()}>
          Play All
        </section>

        {listFiles}
      </div>
      <div>
        <h4>Users</h4>
        {listUsers}
      </div>
      {!addUserSelected && (
        <section
          id="add-user"
          className="file__item"
          onClick={() => setAddUserSelected(!addUserSelected)}
        >
          Add User
        </section>
      )}
      {addUserSelected && (
        <section
          className="file__item"
          onClick={() => setAddUserSelected(!addUserSelected)}
        >
          <AddUser />
        </section>
      )}
      <button onClick={props.closeProject}>Close</button>
    </>
  );
}
