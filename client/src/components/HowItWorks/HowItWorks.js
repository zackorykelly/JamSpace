import React, { Fragment } from "react";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <Fragment>
      <div className="home-page">
        <h1 id="home-title">How it works.</h1>
        <p id="intro">
          <strong>So you're here</strong>
          <br />
          It's time to get started. Create a new project from the projects page.
          Invite your bandmates or anyone you want to collaborate with.
        </p>
        <p id="intro">
          <strong>Recording</strong>
          <br />
          Once you have a few tracks saved, reveal them and play them
          individually, or download them. You can even play all revealed tracks
          together, or have them play while recording!
        </p>
      </div>
    </Fragment>
  );
};

export default HowItWorks;
