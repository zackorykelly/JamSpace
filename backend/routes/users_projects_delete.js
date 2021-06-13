const express = require("express");
const router = express.Router();

module.exports = ({deleteUserProject}) => {
  router.post("/", (req, res) => {
    const {projectId, userId} = req.body
    console.log('delete user reqbody', req.body)
    console.log('delete useredrtfvybguhnijm reqbody', projectId, userId)

    deleteUserProject(projectId, userId)
    .then((res) => {
      console.log('im here and res is', res)
      res.status(200)
      res.json(res);
    })
    .catch((err) => {
      console.log('im in the catch and err is', err)
      res.status(501).json({
        error: err.message,
      });
    })
  })
  return router;
};

