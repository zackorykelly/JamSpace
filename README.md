# JamSpace

## About

JamSpace makes it easy to share your music ideas when you can't meet in person. Record audio and share files with collaborators while developing your songs. Whether you're working with others over long distances or can't meet for other reasons, JamSpace lets you skip the complicated and tedious sending back and forth of files, in favor of a system that lets you listen to tracks right in the browser before downloading them.

No expensive recording software? No audio engineering degree? No problem.

### Screenshots

- !["Home Screen"](https://github.com/zackorykelly/JamSpace)
- !["Project List"](https://github.com/zackorykelly/JamSpace)
- !["Recording UI"](https://github.com/zackorykelly/JamSpace)

### Usage

- Once you're logged in/registered, create a new project using the plus icon. Click on your new project to access it. From here you can add collaborators using their email address (tell them to register first), as well as listen to and record tracks.
- At the top of the page, there are play, pause, and reset buttons that will trigger on all revealed tracks so that you can listen to some, or all tracks at once.
- When recording, you also have the option to "record with playback", which will play back all revealed tracks during the recording.

## Dependencies

- Node.js
- Express
- PostgreSQL

## Getting Started

- Install all necessary dependencies using `npm install` in the root directory.
- From within the backend directory, use `npm start` to start the server or `npm run dev` to run the development server with nodemon auto-restart.
- From within the client directory, use `npm start` to start the React client which will automatically open in your browser.
