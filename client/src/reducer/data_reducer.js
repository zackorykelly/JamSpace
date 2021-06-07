export const SET_DATA = "SET_DATA";
export const ADD_USER = "ADD_USER";

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
        loading: false
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.newUser]
      }
    default:
      return state;
  }
};

export default dataReducer;
