export const SET_DATA = "SET_DATA";
export const SET_PROJECT = "SET_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";
export const CLOSE_PROJECT = "CLOSE_PROJECT";
export const ADD_USER = "ADD_USER";
export const ADD_FILE = "ADD_FILE";
export const SET_FILE = "SET_FILE";
export const CLOSE_FILE = "CLOSE_FILE";
export const ADD_USERS_PROJECTS = "ADD_USERS_PROJECTS";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        users: action.response[0].data,
        projects: action.response[1].data,
        files: action.response[2].data,
        users_projects: action.response[3].data,
        //remarks: action.response[4].data,
        loading: false,
      };
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.newFile],
      };
    case SET_FILE:
      return {
        ...state,
        file: action.file,
      };
    case CLOSE_FILE:
      return {
        ...state,
        file: null,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.newUser],
        user: action.newUser.id,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.newProject],
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.project,
      };
    case CLOSE_PROJECT:
      return {
        ...state,
        project: null,
      };
    case ADD_USERS_PROJECTS:
      return {
        ...state,
        users_projects: [...state.users_projects, action.newUsersProjects],
      };
    default:
      return state;
  }
};

export default dataReducer;
