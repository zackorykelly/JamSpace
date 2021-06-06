const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const dbHelpers = require("./helpers/dbHelpers")(db);
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");
const filesRouter = require("./routes/files");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", require("./routes/jwtAuth"));
app.use("/home", require("./routes/home"));
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/projects", projectsRouter(dbHelpers));
app.use("/api/files", filesRouter(dbHelpers));

module.exports = app;