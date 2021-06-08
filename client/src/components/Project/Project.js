import React from "react";

export default function Project(props) {
  return (
    <>
      <h1>Project: {props.project.name}</h1>
      <button onClick={props.closeProject}>Close</button>
    </>
  );
}
