import React from "react";
import File from "../File/File";

export default function Project(props) {
  const listFiles = props.files.map((file) => (
    <File key={file.id} name={file.name} description={file.description}></File>
  ));

  return (
    <>
      <h1>Project: {props.project.name}</h1>
      {listFiles}
      <button onClick={props.closeProject}>Close</button>
    </>
  );
}
