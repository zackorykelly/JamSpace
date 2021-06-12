import React, { useState } from "react";
import {
  IoRecording,
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoArrowBackCircleOutline,
  IoCloseCircleOutline
} from "react-icons/io5";
import { RiRecordCircleLine } from "react-icons/ri";
import File from "../File/File";
import User from "../User/User";
import AddUser from "../AddUser/AddUser";
import Media from "../Media/Media";
import "./Project.scss";

export default function Project(props) {
  let [addUserSelected, setAddUserSelected] = useState(false);
  let [recordFile, setRecordFile] = useState(false);

  const CTRL_SIZE = 40;
  const CLOSE_SIZE = 25;

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
      <div className="container" id="project-page">
        <h1 className="project__title">
          {props.project.name}
          <button className="close btn" onClick={props.closeProject}>
            <IoCloseCircleOutline size={CLOSE_SIZE} />
          </button>
        </h1>

        <div className="controls">
          <section
            id="play-all"
            className="file__item"
            onClick={() => playAll()}
          >
            <IoPlayCircleOutline size={CTRL_SIZE} />
          </section>
          <section
            id="pause-all"
            className="file__item"
            onClick={() => pauseAll()}
          >
            <IoPauseCircleOutline size={CTRL_SIZE} />
          </section>
          <section
            id="reset-all"
            className="file__item"
            onClick={() => resetAll()}
          >
            <IoArrowBackCircleOutline size={CTRL_SIZE} />
          </section>
          {!recordFile && (
            <section
              id="record"
              className="file__item"
              onClick={() => setRecordFile(true)}
            >
              <RiRecordCircleLine size={CTRL_SIZE} />
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
        <button className="btn btn-primary" onClick={props.closeProject}>
          Back
        </button>
      </div>
    </>
  );
}
