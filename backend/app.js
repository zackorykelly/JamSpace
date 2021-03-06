const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const dbHelpers = require("./helpers/dbHelpers")(db);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");
const filesRouter = require("./routes/files");
const usersProjectsRouter = require("./routes/users_projects");
const usersProjectsDeleteRouter = require("./routes/users_projects_delete");
const projectsDeleteRouter = require("./routes/projects_delete");
const filesDeleteRouter = require("./routes/files_delete");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "uploads")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/projects", projectsRouter(dbHelpers));
app.use("/api/projects_delete", projectsDeleteRouter(dbHelpers));
app.use("/api/files", filesRouter(dbHelpers));
app.use("/api/files_delete", filesDeleteRouter(dbHelpers));
app.use("/api/users_projects", usersProjectsRouter(dbHelpers));
app.use("/api/users_projects_delete", usersProjectsDeleteRouter(dbHelpers));

module.exports = app;
