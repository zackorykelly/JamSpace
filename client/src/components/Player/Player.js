import React from "react";
import "./Player.scss";

export default function Player(props) {
  //Sample path for testing
  // const path = "/static/ba5477ac2ac16ecb257633dbb7b82af9";
  //Actual path from props
  const path = "/static/" + props.currentFile.location;

  return (
    <div className="file-player">
      <span className="player-title">{props.currentFile.name}</span>
      {/* <input type="checkbox" /> */}
      <audio className="file-audio-player" controls src={path} type="mp3" />
      <span className="player-description">
        {props.currentFile.description}
      </span>
    </div>
  );
}
