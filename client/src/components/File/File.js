import React, { useState } from "react";
import classNames from "classnames";
import "./File.scss";
import Player from "../Player/Player";

export default function File(props) {
  let fileClass = classNames("file__item");
  let [selectedFile, setSelectedFile] = useState(false);

  return (
    <>
      {!selectedFile && (
        <section
          className={fileClass}
          onClick={() => setSelectedFile(!selectedFile)}
        >
          <h4>{props.file.name}: </h4>
          <p className={"file__description"}>{props.file.description}</p>
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
