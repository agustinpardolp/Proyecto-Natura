import axios from "axios";
import {
  RECEIVE_LOGGED_USER,
  USER_LOGOUT, SET_AVATAR
} from "../../constants";

export const receiveLoggedUser = loggedUser => ({
  type: RECEIVE_LOGGED_USER,
  loggedUser
});

export const userLogout = function () {
  return {
    type: USER_LOGOUT
  };
};
export const setAvatar = (data) => {
  return {
    type: SET_AVATAR,
    data
  }
}

export const loginUser = userData => dispatch => {

    return axios
      .post("/api/employee/login", userData)
      .then(res => res.data)
      .then(user => {
        dispatch(receiveLoggedUser(user));
        return user
      });
  };

  export const logout = userData => dispatch =>{
    return axios.post("/api/employee/login", userData)
    .then(res =>res.data)
    .then(answer =>{

        dispatch(userLogout())
        return answer;
    });
  };
  
  export const fetchLoggedUser = () => dispatch => {
    return axios
      .get("/api/employee/logged")
      .then(res => res.data)
      .then(user => dispatch(receiveLoggedUser(user)));
  };