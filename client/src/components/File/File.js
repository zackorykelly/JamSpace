import React, { useState } from "react";
import classNames from "classnames";
import "./File.scss";
import Player from "../Player/Player";
import { DELETE_FILE } from "../../reducer/data_reducer";


export default function File(props) {
  let fileClass = classNames("file__item");
  let [selectedFile, setSelectedFile] = useState(false);
  const deleteFile = (e) => {
    e.stopPropagation();
    const project = {
      fileId: props.fileId
    };
    fetch("/api/files_delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    })
      .then(async (res) => {
        if (res.status === 200) {
          props.dispatch({
            type: DELETE_FILE,
            deleteProject: await res.json()
          });
        } else {
          alert("could not delete file");
        }
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <>
      {!selectedFile && (
        <section
          className={fileClass}
          onClick={() => setSelectedFile(!selectedFile)}
        >
          <h4>{props.file.name}: </h4>
          <p className={"file__description"}>{props.file.description}</p>
          <button type="button" className="close btn" onClick={(e) => deleteFile(e)}>DELETE</button>
        </section>
      )}
      {selectedFile && (
        <section onClick={() => setSelectedFile(!selectedFile)}>
          <Player currentFile={props.file} />
        </section>
      )}
    </>
  );
}
