import React, { Fragment } from "react";
import "./Home.scss"


const Home = () => {
  return (
    <Fragment>
      <div className="home-page">
      <img id="drum" src="/homePics/drum.jpeg"/>
      <h1 id="title">Welcome to JamSpace</h1>
      <img id="audio" src="/homePics/audio-production.jpeg"/>
      <p id="intro">This is where you can easily colaboarate with others or just have a simple place to record save and share audio files for yourself</p>
      <p id="simplicity">Collaborating with others has never been easeir, just register for an account to get started.</p>
      <img id="guitar" src="/homePics/guitar.jpeg"/>
      <img id="sing" src="/homePics/sing.jpeg"/>
      <p id="instructions"> Once logged in you can navigate to the projects tab here you can create, edit and delete projects. In each project you can add and remove members to colaborate with, as well as create, listen to, and download your recordings. Its simple as that! Having a shared space to add and download audio files has never been easeir!</p>
      </div>
    </Fragment>
  );
};

export default Home;
