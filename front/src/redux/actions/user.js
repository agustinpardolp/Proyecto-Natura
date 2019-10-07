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

export const loginUser = user => dispatch => {

    return axios
      .post("/api/user/login", {user})
      .then(res => res.data)
      .then(user => {
        dispatch(receiveLoggedUser(user));
        return user
      });
  };

  export const logout = () => dispatch =>{
    console.log("USERRRRRLOGOUT")
    return axios.post("/api/user/logout")
    .then(res =>res.data)
    .then(answer =>{
      console.log(answer, "USERLOGOUT")
        dispatch(userLogout())
        return answer;
    });
  };
  
  export const fetchLoggedUser = () => dispatch => {
    
    return axios
      .get("/api/user/logged")
      .then(res => {
        console.log("res", res.data)
        res.data})
      .then(user => dispatch(receiveLoggedUser(user)));
  };