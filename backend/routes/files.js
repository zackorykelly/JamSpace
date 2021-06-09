const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { getPostsByUsers } = require("../helpers/dataHelpers");

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
    const filePath = req.file.destination + req.file.filename;
    console.log(filePath);
    console.log(req.body);
    const { userID, projectID, title, description } = req.body;
    addFile(projectID, title, description)
      .then((response) => {
        res.status(200);
        res.json(response);
      })
      .catch((err) => res.status(500).json(err));
  });

  return router;
};
