const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

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
