const express = require("express");
const router = express.Router();

module.exports = ({deleteFile}) => {
  router.post("/", async (req, res) => {
    const {fileId} = req.body;
    return await deleteFile(fileId)
    .then((response) => {
      res.status(200);
      res.json(response);
    })
    .catch((err) => {
      res.status(501).json({err: err})
    });
  })
  return router;
}