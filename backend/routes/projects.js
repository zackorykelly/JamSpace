const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getProjects }) => {
  router.get("/", (req, res) => {
    getProjects()
      .then((projects) => {
        console.log(projects);
        res.json(projects);
      })
      .catch((err) =>
        res.json({
          error: err.message
        })
      );
  });

  return router;
};
