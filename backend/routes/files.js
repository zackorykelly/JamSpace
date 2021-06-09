const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getPostsByUsers } = require("../helpers/dataHelpers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const randomNumber = Math.floor(Math.random() * (999999 - 100000) + 100000);
    cb(null, randomNumber + "-" + Date.now() + ".mp3");
  },
});
const upload = multer({ storage: storage });

module.exports = ({ getFiles, addFile }) => {
  router.get("/", (req, res) => {
    getFiles()
      .then((files) => {
        console.log(files);
        res.json(files);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", upload.single("file"), (req, res) => {
    console.log(req.body);
    const filePath = req.file.filename;
    const { userID, projectID, title, description } = req.body;
    addFile(projectID, title, description, filePath)
      .then((response) => {
        res.status(200);
        res.json(response);
      })
      .catch((err) => res.status(500).json(err));
  });

  return router;
};
