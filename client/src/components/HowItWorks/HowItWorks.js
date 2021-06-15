import React, { Fragment } from "react";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <Fragment>
      <div className="home-page">
        <h1 id="home-title">How it works.</h1>
        <div className="home-text">
          <p id="intro">
            It's time to get started. Create a new project from the projects
            page. Invite your bandmates or anyone you want to collaborate with.
          </p>
          <p id="intro">
            Once you have a few tracks saved, reveal them and play them
            individually, or download them. You can even play all revealed
            tracks together, or have them play while recording!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HowItWorks;
