import { useEffect, useReducer } from "react";
import dataReducer, { SET_DATA } from "../reducer/data_reducer";
import axios from "axios";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(dataReducer, {
    user: 0,
    users: [],
    projects: [],
    files: [],
    remarks: [],
    loading: true
  });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/users`),
      axios.get(`/api/projects`),
      axios.get(`/api/files`),
      axios.get(`/api/users_projects`)
      //axios.get(`/api/remarks`)
    ])
      .then((response) => {
        dispatch({
          type: SET_DATA,
          response
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch
  };
}
