export function getProjectsForUser(state, user) {
  let projectsForUser = [];
  const userFound = state.users.find((el) => el.id === user.id);

  if (!userFound) {
    return [];
  }

  state.users_projects.forEach((el) => {
    if (el.user_id === user.id) {
      projectsForUser.push(state.projects[el.project_id]);
    }
  });

  return projectsForUser;
}

export function getFilesForProject(state, project) {
  const filesForProject = [];
  const projectFound = state.projects.find((el) => el.id === project.id);

  if (!projectFound) {
    return [];
  }

  state.files.forEach((file) => {
    if (file.project_id === project.id) {
      filesForProject.push(state.files[file]);
    }
  });
  console.log(filesForProject);
  return filesForProject;
}

// // example from scheduler

// export function getInterview(state, interview) {
//   if (!interview) {
//     return null;
//   }
//   const interviewer = state.interviewers[interview.interviewer];

//   return { ...interview, interviewer };
// }
