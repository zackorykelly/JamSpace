import React, { Fragment } from "react";
import "./Home.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="home-page">
        <h1 id="title">Welcome to JamSpace</h1>
        <p id="intro">
          <strong>Get your ideas down.</strong>
          Skip the bitrates, bouncing, and file sharing. Get your idea out of
          your head and in front of your bandmates as fast as possible.
        </p>
        <p id="simplicity">
          Collaborating with others has never been easeir, just register for an
          account to get started.
        </p>
        <img alt="guitar" id="guitar" src="/homePics/guitar.jpeg" />
        <img alt="singer" id="sing" src="/homePics/sing.jpeg" />
        <p id="instructions">
          {" "}
          Once logged in you can navigate to the projects tab here you can
          create, edit and delete projects. In each project you can add and
          remove members to colaborate with, as well as create, listen to, and
          download your recordings. Its simple as that! Having a shared space to
          add and download audio files has never been easeir!
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
