const constraintObj = {
  audio: true,
  video: false,
};

navigator.mediaDevices
  .getUserMedia(constraintObj)
  .then(function (mediaStreamObj) {
    //Find the audio elememt
    const audio = document.querySelector("audio");

    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let audioSave = document.getElementById("playback");
    let mediaRecorder = new MediaRecorder(mediaStreamObj);
    let chunks = [];

    start.addEventListener("click", () => {
      mediaRecorder.start();
      console.log("recording started", mediaRecorder.state);
    });

    stop.addEventListener("click", () => {
      mediaRecorder.stop();
      console.log("recording stopped", mediaRecorder.state);
    });

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event, data);
    };
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/mp3;" });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audioSave.src = audioURL;
    };
  });
