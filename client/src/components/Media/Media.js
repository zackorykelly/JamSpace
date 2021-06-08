import React from "react";
import MicRecorder from "mic-recorder-to-mp3";
import "./Media.scss";

export default function Media(props) {
  const recorder = new MicRecorder({
    bitRate: 128
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
          lastModified: Date.now()
        });

        const playback = document.querySelector("audio");
        playback.src = URL.createObjectURL(file);

        // const player = new Audio(URL.createObjectURL(file));
        // player.play();
      });
  };

  return (
    <div>
      <audio controls className="playback" type="audio/mp3"></audio>
      <br></br>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
    </div>
  );
}
// export default function Media(props) {
//   return (
//     <section>
//       <div>
//         <button id="start">Start Recording</button>
//         <button id="stop">Stop Recording</button>
//       </div>
//       <audio id="playback"></audio>
//     </section>
//   );
// }
