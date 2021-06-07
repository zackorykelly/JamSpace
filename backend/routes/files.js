const express = require("express");
const router = express.Router();

module.exports = ({ getFiles }) => {
  router.get("/", (req, res) => {
    getFiles()
      .then((files) => {
        console.log(files);
        res.json(files);
      })
      .catch((err) =>
        res.json({
          error: err.message
        })
      );
  });

  return router;
};
