import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Media.scss";
import { ADD_FILE } from "../../reducer/data_reducer";

export default function Media(props) {
  const [stopButton, setStopButton] = useState(true);
  const [recordButtons, setRecordButtons] = useState(false);
  const [saveButton, setSaveButton] = useState(true);
  const [recorder, setRecorder] = useState();

  useEffect(() => {
    const newRecorder = new MicRecorder({
      bitRate: 128,
    });
    setRecorder(newRecorder);
  }, []);

  const start = (e) => {
    //Reset player to empty so it doesn't play during a re-record
    const playback = document.getElementsByClassName("playback")[0];
    playback.src = "";
    setSaveButton(true);
    setStopButton(false);
    setRecordButtons(true);
    recorder
      .start()
      .then(() => {
        console.log("recording started");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const startWithPlayback = (e) => {
    //Reset player to empty so it doesn't play during a re-record
    const playback = document.getElementsByClassName("playback")[0];
    playback.src = "";
    setSaveButton(true);
    setStopButton(false);
    setRecordButtons(true);
    recorder
      .start()
      .then(() => {
        const players = document.getElementsByClassName("file-audio-player");
        for (const player of players) {
          player.currentTime = 0;
          player.play();
        }
        console.log("recording started");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const stop = (e) => {
    setStopButton(true);
    setRecordButtons(false);
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        console.log("recording stopped");
        const file = new File(buffer, "my-recording.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });

        const playback = document.getElementsByClassName("playback")[0];
        playback.src = URL.createObjectURL(file);
        setSaveButton(false);
      });
    const players = document.getElementsByClassName("file-audio-player");
    for (const player of players) {
      player.currentTime = 0;
      player.pause();
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const save = async (data) => {
    if (data.title.trim().length === 0) {
      return alert("Please give the file a name");
    } else if (data.description.trim().length === 0) {
      return alert("Please give the file a description");
    } else {
      //Have to fake formData for multer to behave properly and save the file on the backend
      const formData = new FormData();
      const playback = document.getElementsByClassName("playback")[0];
      let blob = await fetch(playback.src).then((res) => res.blob());
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("file", blob);
      formData.append("userID", props.currentUser);
      formData.append("projectID", props.currentProject);
      fetch("/api/files", {
        method: "POST",
        body: formData,
      })
        .then(async (res) => {
          if (res.status === 200) {
            const file = await res.json();
            props.dispatch({
              type: ADD_FILE,
              newFile: file,
            });
            alert("File saved successfully.");
          } else {
            alert(
              "The file could not be saved. Does this project already have a file with the same name?"
            );
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //Test using uploaded file
  // const onSubmit = (ev) => {
  //   ev.preventDefault();
  //   const file = document.getElementById("fileInput");
  //   const formData = new FormData();
  //   formData.append("file", file.files[0]);
  //   axios
  //     .post("/api/files", formData)
  //     .then(async (res) => {
  //       if (res.status === 200) {
  //         props.dispatch({
  //           type: ADD_FILE,
  //           newFile: await res.json(),
  //         });
  //         alert("File saved");
  //       } else {
  //         alert("The file could not be saved");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="submit-file-form">
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => props.setRecordFile(false)}
      >
        Cancel
      </button>
      <form onSubmit={handleSubmit(save)}>
        <div className="recorder-player">
          <audio controls className="playback" type="audio/mp3"></audio>
          <br></br>
          <button
            id="start-button"
            className=" btn btn-success"
            type="button"
            onClick={(e) => start(e)}
            disabled={recordButtons}
          >
            Record
          </button>
          <button
            id="start-with-playback-button"
            className="btn btn-success"
            type="button"
            onClick={(e) => startWithPlayback(e)}
            disabled={recordButtons}
          >
            Record With Playback
          </button>
          <button
            id="stop-button"
            className="btn btn-danger"
            type="button"
            onClick={(e) => stop(e)}
            disabled={stopButton}
          >
            Stop
          </button>
        </div>
        <label for="title">Title: </label>
        <input
          {...register("title")}
          id="title"
          name="title"
          type="text"
          placeholder="Title"
        ></input>
        <label for="description">Description: </label>
        <input
          {...register("description")}
          id="description"
          name="description"
          type="text"
          placeholder="Description"
        ></input>
        <button className="btn btn-primary" type="submit" disabled={saveButton}>
          Save
        </button>
      </form>
      {/* Below is sample of how we could allow file uploads */}
      {/* <br></br> */}
      {/* <form encType="multipart/form-data" onSubmit={(ev) => onSubmit(ev)}>
        <input id="fileInput" type="file"></input>
        <button id="upload-button" type="submit">Upload</button>
      </form> */}
    </div>
  );
}
