export function getProjectsForUser(state, user) {
  const projectsForUser = [];
  const userFound = state.users.find((el) => el.id === user.id);

  if (!userFound) {
    return [];
  }

  userFound.projects.forEach((proj) => {
    projectsForUser.push(state.projects[proj]);
  });

  return projectsForUser;
}

export function getFilesForProject(state, project) {
  const filesForProject = [];
  const projectFound = state.projects.find((el) => el.name === project.name);

  if (!projectFound) {
    return [];
  }

  projectFound.files.forEach((file) => {
    filesForProject.push(state.files[file]);
  });

  return filesForProject;
}

// example from scheduler
//
// export function getInterview(state, interview) {
//   if (!interview) {
//     return null;
//   }
//   const interviewer = state.interviewers[interview.interviewer];

//   return { ...interview, interviewer };
// }
