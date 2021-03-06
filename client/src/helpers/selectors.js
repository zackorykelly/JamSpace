export function getProject(state, projectId) {
  return state.projects.find((proj) => proj.id === projectId);
}

export function getFile(state, fileId) {
  return state.files.find((file) => file.id === fileId);
}

export function getProjectsForUser(state, user) {
  let projectsForUser = [];
  const userFound = state.users.find((el) => el.id === user.id);
  if (!userFound) {
    return [];
  }

  state.users_projects.forEach((el) => {
    if (el.user_id === user.id) {
      projectsForUser.push(
        state.projects.find((proj) => proj.id === el.project_id)
      );
    }
  });

  return projectsForUser;
}

export function getUsersForProject(state, project) {
  let usersForProject = [];
  const projectFound = state.projects.find((el) => el.id === project.id);
  if (!projectFound) {
    return [];
  }

  state.users_projects.forEach((el) => {
    if (el.project_id === project.id) {
      usersForProject.push(state.users.find((user) => user.id === el.user_id));
    }
  });

  return usersForProject;
}

export function getFilesForProject(state, project) {
  const filesForProject = [];
  const projectFound = state.projects.find((el) => el.id === project.id);
  if (!projectFound) {
    return [];
  }

  state.files.forEach((file) => {
    if (file.project_id === projectFound.id) {
      filesForProject.push(file);
    }
  });

  return filesForProject;
}

export function getUserByEmail(state, email) {
  const foundUser = state.users.find((el) => el.email === email);
  if (!foundUser) {
    return null;
  }
  return foundUser;
}
