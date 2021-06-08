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

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/projects", projectsRouter(dbHelpers));
app.use("/api/files", filesRouter(dbHelpers));
app.use("/api/users_projects", usersProjectsRouter(dbHelpers));

module.exports = app;
