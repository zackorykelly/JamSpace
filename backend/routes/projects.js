const express = require("express");
const router = express.Router();

module.exports = ({
  getProjects,
  getProjectsByUser,
  getProjectByName,
  addProject,
  addUserProject
}) => {
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
    const { project_name, project_description, user_id } = req.body;
    // const userId = req.cookies.userAuth
    console.log("WHAT IS REQ BODY", req.body);

    getProjectByName(project_name)
      .then(async (project) => {
        if (project.length !== 0) {
          res.status(501).json({
            msg: "A project with this name already exists"
          });
        } else {
          return await addProject(project_name, project_description);
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

// router.post("/", (req, res) => {
//   const { name, email, password } = req.body;

//   getUserByEmail(email)
//     .then(async (user) => {
//       // console.log('WHAT IS USER', user)
//       if (user) {
//         res.status(501).json({
//           msg: "Sorry, a user account with this email already exists"
//         });
//       } else {
//         return await addUser(name, email, password);
//       }
//     })
//     .then((newUser) => res.json(newUser))
//     .catch((err) => {
//       res.status(501).json({
//         error: err.message
//       })
//     }
//     );
// });
