const express = require("express");
const router = express.Router();

module.exports = ({
  getUsersProjects,
  getUsersProjectsByUser,
  addUserProject,
}) => {
  router.get("/", (req, res) => {
    getUsersProjects()
      .then((usersProjects) => {
        res.json(usersProjects);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const projectId = req.body.id;
    const userId = req.body.user_id;

    getUsersProjectsByUser(projectId, userId)
      .then(async (userProject) => {
        console.log(userProject);
        if (userProject.length !== 0) {
          res.status(501).json({
            msg: "This relationship already exists",
          });
        } else {
          return await addUserProject(projectId, userId);
        }
      })
      .then((newUserProject) => {
        res.json(newUserProject);
      })
      .catch((err) => {
        res.status(501).json({
          error: err.message,
        });
      });
  });

  return router;
};
