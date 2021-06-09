import React from "react";
import axios from "axios";
import "./Player.scss";

export default function Player(props) {
  //Sample path for testing
  const path = "/static/ba5477ac2ac16ecb257633dbb7b82af9";
  //Actual path from props
  // const path = "/static/" + props.currentFile.location;

  return (
    <div className="file-player">
      <span>Track title</span>
      <audio controls src={path} type="mp3" />
      <span>Track description</span>
    </div>
  );
}
