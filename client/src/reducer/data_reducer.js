export const SET_DATA = "SET_DATA";
export const ADD_USER = "ADD_USER";
export const ADD_FILE = "ADD_FILE";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        users: action.response[0].data,
        projects: action.response[1].data,
        files: action.response[2].data,
        users_projects: action.response[3].data,
        //remarks: action.response[3].data,
        loading: false,
      };
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.newFile],
        //remarks: action.response[4].data,
        loading: false,
      };
    case ADD_USER:
      console.log(action);
      return {
        ...state,
        users: [...state.users, action.newUser],
        user: action.newUser.id,
      };
    default:
      return state;
  }
};

export default dataReducer;
