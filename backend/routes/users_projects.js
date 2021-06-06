const express = require("express");
const router = express.Router();

module.exports = ({}) => {
  router.get("/", (req, res) => {
    getUsersProjects()
      .then((usersProjects) => {
        console.log(usersProjects);
        res.json(usersProjects);
      })
      .catch((err) =>
        res.json({
          error: err.message
        })
      );
  });

  return router;
};
