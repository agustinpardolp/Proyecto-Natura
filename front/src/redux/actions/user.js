import axios from "axios";
import {
  RECEIVE_LOGGED_USER,
  USER_LOGOUT,
  SET_AVATAR,
  RECEIVE_CONSULTANTS,
  RECEIVE_SELECTED_CONSULTANT
} from "../../constants";

export const receiveLoggedUser = loggedUser => ({
  
  type: RECEIVE_LOGGED_USER,
  loggedUser
});

export const userLogout = function() {
  return {
    type: USER_LOGOUT
  };
};
export const setAvatar = data => {
  return {
    type: SET_AVATAR,
    data
  };
};

export const receiveConsultants = consultantList => {
  return {
    type: RECEIVE_CONSULTANTS,
    consultantList
  };
};
export const selectedConsultant = consultant => {
  return {
    type: RECEIVE_SELECTED_CONSULTANT,
    consultant
  };
}
export const loginUser = user => dispatch => {
  return axios
    .post("/api/user/login", user)
    .then(res => res.data)
    .then(user => {
      dispatch(receiveLoggedUser(user));
      return user;
    });
};

export const logout = () => dispatch => {
  return axios
    .post("/api/user/logout")
    .then(res => res.data)
    .then(answer => {
      dispatch(userLogout());
      return answer;
    });
};

export const fetchLoggedUser = () => dispatch => {
  return axios
    .get("/api/user/logged")
    .then(res => {
      res.data;
    })
    .then(user => dispatch(receiveLoggedUser(user)));
};

export const fetchConsultantBySuperviser = userId => dispatch => {
  return axios
    .get(`/api/user/superviser/consultant/${userId}`)
    .then(res => res.data)
    .then(consultantList => dispatch(receiveConsultants(consultantList)));
};
