import React from "react";

export default function Project(props) {
  const listFiles = props.files.map((file) => {
    <p>{JSON.stringify(file)}</p>;
  });

  return (
    <>
      <h1>Project: {props.project.name}</h1>
      {listFiles}
      <button onClick={props.closeProject}>Close</button>
    </>
  );
}
