import React, { useState } from "react";
import classNames from "classnames";
import "./File.scss";
import Player from "../Player/Player";

export default function File(props) {
  let fileClass = classNames("file__item");
  let [selected, setSelected] = useState(false);

  return (
    <>
      {!selected && (
        <section className={fileClass} onClick={() => setSelected(!selected)}>
          <h4>{props.file.name}: </h4>
          <p className={"file__description"}>{props.file.description}</p>
        </section>
      )}
      {selected && (
        <section onClick={() => setSelected(!selected)}>
          <Player currentFile={props.file} />
        </section>
      )}
    </>
  );
}
