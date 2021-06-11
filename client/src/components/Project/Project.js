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

  const pauseAll = () => {
    const players = document.getElementsByClassName("file-audio-player");
    for (const player of players) {
      player.pause();
    }
  };

  const resetAll = () => {
    const players = document.getElementsByClassName("file-audio-player");
    for (const player of players) {
      player.currentTime = 0;
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={props.closeProject}>
        Close
      </button>
      <h1>Project: {props.project.name}</h1>
      <div>
        <h4>Files</h4>
        {!recordFile && (
          <section
            id="record"
            className="file__item"
            onClick={() => setRecordFile(true)}
          >
            Record File
          </section>
        )}
        {recordFile && (
          <section>
            <Media
              currentProject={props.project.id}
              currentUser={props.user}
              dispatch={props.dispatch}
              setRecordFile={setRecordFile}
            />
          </section>
        )}
        <section id="play-all" className="file__item" onClick={() => playAll()}>
          Play All
        </section>
        <section
          id="pause-all"
          className="file__item"
          onClick={() => pauseAll()}
        >
          Pause All
        </section>
        <section
          id="reset-all"
          className="file__item"
          onClick={() => resetAll()}
        >
          Reset
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
          onClick={() => setAddUserSelected(true)}
        >
          Add User
        </section>
      )}
      {addUserSelected && (
        <section className="file__item">
          <AddUser
            currentProject={props.project}
            state={props.state}
            dispatch={props.dispatch}
            setAddUserSelected={setAddUserSelected}
          />
        </section>
      )}
      <button onClick={props.closeProject}>Close</button>
    </>
  );
}
