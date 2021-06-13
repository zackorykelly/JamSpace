import React, { useState } from "react";
import {
  IoRecording,
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoArrowBackCircleOutline
} from "react-icons/io5";
import File from "../File/File";
import User from "../User/User";
import AddUser from "../AddUser/AddUser";
import Media from "../Media/Media";
import "./Project.scss";

export default function Project(props) {
  let [addUserSelected, setAddUserSelected] = useState(false);
  let [recordFile, setRecordFile] = useState(false);

  const listFiles = props.files.map((file) => (
    <File key={file.id} file={file} setFile={props.setFile}></File>
  ));

  const listUsers = props.users.map((user) => (
    <User key={user.id} userId={user.id} projectId={props.project.id} name={user.full_name} email={user.email} dispatch={props.dispatch}></User>
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
      <div className="container">
        <button className="btn btn-dark" onClick={props.closeProject}>
          Close
        </button>
        <h1 className="project__title">{props.project.name}</h1>

        {!recordFile && (
          <section
            id="record"
            className="file__item"
            onClick={() => setRecordFile(true)}
          >
            <IoRecording />
            Record new track
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
        <h4>Files</h4>
        <div className="controls">
          <section
            id="play-all"
            className="file__item"
            onClick={() => playAll()}
          >
            <IoPlayCircleOutline />
          </section>
          <section
            id="pause-all"
            className="file__item"
            onClick={() => pauseAll()}
          >
            <IoPauseCircleOutline />
          </section>
          <section
            id="reset-all"
            className="file__item"
            onClick={() => resetAll()}
          >
            <IoArrowBackCircleOutline />
          </section>
        </div>

        {listFiles}
        <div>
          <h4 className="users__title">Users in {props.project.name}</h4>
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
      </div>
    </>
  );
}
