module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (full_name, email, password) => {
    const query = {
      text: `INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING *`,
      values: [full_name, email, password],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => console.error("--------------------", err));
  };

  const getUsersPosts = () => {
    const query = {
      text: `SELECT users.id as user_id, full_name, email, posts.id as post_id, title, content
      FROM users
      INNER JOIN posts
      ON users.id = posts.user_id`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getProjects = () => {
    const query = {
      text: "SELECT * FROM projects",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getProjectsByUser = (userId) => {
    const query = {
      text: "SELECT * FROM projects WHERE user_id = $1",
      values: [userId],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addProject = () => {
    const query = {
      text: `INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *`,
      values: [name, description],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getFiles = () => {
    const query = {
      text: "SELECT * FROM files",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addFile = (projectID, name, description) => {
    const query = {
      text: "INSERT INTO files (project_id, name, description) VALUES ($1, $2, $3) RETURNING *",
      values: [projectID, name, description],
    };

    return db
      .query(query)
      .then((res) => res.rows[0])
      .catch((err) => err);
  };

  const getUsersProjects = () => {
    const query = {
      text: "SELECT * FROM users_projects",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts,
    getProjects,
    getProjectsByUser,
    addProject,
    getFiles,
    addFile,
    getUsersProjects,
  };
};
