const express = require("express");
const router = express.Router();

module.exports = ({deleteProject}) => {
  router.post("/", (req, res) => {
    const {projectId} = req.body
    console.log('delete user reqbody', req.body)
    console.log('delete useredrtfvybguhnijm reqbody', projectId)
    return deleteProject(projectId)
    .then((response) => {
      res.status(200);
      res.json(response);
    })
    .catch((err) => {
      res.status(501).json({
        error: err.message,
      });
    })
  })
  return router;
};

