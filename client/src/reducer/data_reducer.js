export const SET_DATA = "SET_DATA";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        users: action.response[0].data,
        loading: false
      };
    default:
      return state;
  }
};

export default dataReducer;
