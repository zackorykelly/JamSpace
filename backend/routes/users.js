const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => {
        console.log(users);
        res.json(users);
      })
      .catch((err) =>
        res.json({
          error: err.message
        })
      );
  });

  router.get("/posts", (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) =>
        res.json({
          error: err.message
        })
      );
  });

  router.post("/", (req, res) => {
    const { name, email, password } = req.body;
    console.log("WAHT IS REQBODY", req.body)
    console.log({ name, email, password });

    getUserByEmail(email)
      .then(async (user) => {
        console.log('WHAT IS USER', user)
        if (user) {
          res.json({
            msg: "Sorry, a user account with this email already exists"
          });
        } else {
          return await addUser(name, email, password);
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) => {
        console.error('________________________________', err)
        res.status(501).json({
          error: err.message
        })
      }
      );
  });


  return router;
};
