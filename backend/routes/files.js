const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { getPostsByUsers } = require("../helpers/dataHelpers");
=======
>>>>>>> master

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
    console.log(req.file);
    console.log(req.body);
    const { userID, projectID, name, description } = req.body;
    async () => {
      await addFile(projectID, name, description).then((response) => {
        res.status = 200;
        res.json(response);
      });
    };
  });

  return router;
};
