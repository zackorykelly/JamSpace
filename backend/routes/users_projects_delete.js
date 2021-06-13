const express = require("express");
const router = express.Router();

module.exports = ({deleteUserProject}) => {
  router.post("/", async (req, res) => {
    const {projectId, userId} = req.body
    console.log('delete user reqbody', req.body)
    console.log('delete useredrtfvybguhnijm reqbody', projectId, userId)

    return await deleteUserProject(projectId, userId)
    .then((response) => {
      console.log('im here and res is', response);
      res.status(200);
      res.json(response);
    })
    .catch((err) => {
      console.log('im in the catch and err is', err);
      res.status(501).json({
        error: err.message,
      });
    })
  })
  return router;
};

