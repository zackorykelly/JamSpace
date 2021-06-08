import React from "react";
import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";
import "./Media.scss";
import { ADD_FILE } from "../../reducer/data_reducer";

export default function Media(props) {
  const recorder = new MicRecorder({
    bitRate: 128,
  });

  const start = () => {
    recorder
      .start()
      .then(() => {
        console.log("recording started");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const stop = () => {
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

  const save = async () => {
    const playback = document.getElementsByClassName("playback")[0];
    let blob = await fetch(playback.src).then((res) => res.blob());
    let data = new FormData();
    data.append("file", blob);
    data.append("userId", 1);
    data.append("projectId", 1);
    data.append("name", "Beatz");
    data.append("description", "Funky fresh.com");
    axios
      .post("/api/files", data)
      .then((res) => {
        console.log(res.status);
        console.log(res);
        if (res.status === 200) {
          props.dispatch({
            type: ADD_FILE,
            newFile: res.data,
          });
          alert("File saved");
        } else {
          alert("The file could not be saved");
        }
      })
      .catch((err) => console.log(err));
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
    <div>
      <audio controls className="playback" type="audio/mp3"></audio>
      <br></br>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => save()}>Save</button>
      <br></br>
      {/* <form encType="multipart/form-data" onSubmit={(ev) => onSubmit(ev)}>
        <input id="fileInput" type="file"></input>
        <button type="submit">Save2</button>
      </form> */}
    </div>
  );
}
