import {
  USER_LOGOUT,
  RECEIVE_LOGGED_USER,
  RECEIVE_CONSULTANTS
} from "../../constants";

const initialState = {
  user: {},
  avatar: {},
  consultantList: []
  // userAdmin:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGGED_USER:
        console.log(action.loggedUser, "userreducer")
      return Object.assign({}, state, {
        user: action.loggedUser,
        avatar: action.loggedUser.avatar
      });

    case USER_LOGOUT:
      return { ...state, user: {} };

    case RECEIVE_CONSULTANTS:
      console.log(action.consultantList)
      return { ...state, consultantList: [...action.consultantList] };

    default:
      return state;
  }
};
