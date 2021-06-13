import React, { Fragment } from "react";
import "./Home.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="home-page">
        <h1 id="home-title">Welcome to JamSpace.</h1>
        <p id="intro">
          <strong>Get your ideas down. </strong>
          <br />
          Skip the bitrates, bouncing, and file sharing. Get your idea out of
          your head and in front of your bandmates as fast as possible.
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
