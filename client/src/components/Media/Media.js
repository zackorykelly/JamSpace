import React from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Media.scss";
import { ADD_FILE } from "../../reducer/data_reducer";

export default function Media(props) {
  const recorder = new MicRecorder({
    bitRate: 128,
  });

  const start = (e) => {
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
    start(e);
    const players = document.getElementsByClassName("file-audio-player");
    for (const player of players) {
      player.currentTime = 0;
      player.play();
    }
  };

  const stop = (e) => {
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
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const save = async (data) => {
    console.log('file data---------', data.title)
    if (data.title.trim().length === 0) {
      return alert('Please give the file a name')
    } else if (data.description.trim().length === 0) {
      return alert('Please give the file a description')
    } else {
      const formData = new FormData();
      const playback = document.getElementsByClassName("playback")[0];
      let blob = await fetch(playback.src).then((res) => res.blob());
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("file", blob);
      formData.append("userID", props.currentUser);
      formData.append("projectID", props.currentProject);
      console.log(formData);
      console.log(data);
      axios
        .post("/api/files", formData)
        .then((res) => {
          console.log(res.status);
          console.log(res);
          if (res.status === 200) {
            props.dispatch({
              type: ADD_FILE,
              newFile: res.data,
            });
            alert("File saved successfully.");
          } else {
            alert("Error! The file could not be saved.");
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
      <button type="button" onClick={() => props.setRecordFile(false)}>
        Cancel
      </button>
      <form onSubmit={handleSubmit(save)}>
        <div className="recorder-player">
          <audio
            controls
            className="playback file-audio-player"
            type="audio/mp3"
          ></audio>
          <br></br>
          <button
            className="start-button"
            type="button"
            onClick={(e) => start(e)}
          >
            Record
          </button>
          <button
            className="start-with-playback-button"
            type="button"
            onClick={(e) => startWithPlayback(e)}
          >
            Record With Playback
          </button>
          <button type="button" onClick={(e) => stop(e)}>
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
        <button type="submit">Save</button>
      </form>
      {/* Below is  */}
      {/* <br></br> */}
      {/* <form encType="multipart/form-data" onSubmit={(ev) => onSubmit(ev)}>
        <input id="fileInput" type="file"></input>
        <button type="submit">Save2</button>
      </form> */}
    </div>
  );
}
