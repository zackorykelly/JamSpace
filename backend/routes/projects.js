const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getProjects, getProjectsByUser, addProject }) => {
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

  router.post("/", (req, res) => {
    const { name, description } = req.body;

    getProjectsByUser(user.id)
      .then((project) => {
        if (project) {
          res.json({
            msg: "A project with this name already exists"
          });
        } else {
          return addProject(name, description);
        }
      })
      .then((newProject) => res.json(newProject))
      .catch((err) =>
        res.json({
          error: err.message
        })
      );
  });

  return router;
};
