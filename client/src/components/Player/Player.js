import React from "react";
import axios from "axios";
import "./Player.scss";

export default function Player(props) {
  const getFile = () => {};

  return (
    <div className="file-player">
      <audio
        controls
        src="/uploads/ba5477ac2ac16ecb257633dbb7b82af9"
        type="mp3"
      />
    </div>
  );
}
