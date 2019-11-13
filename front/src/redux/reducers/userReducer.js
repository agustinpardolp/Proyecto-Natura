import {
  USER_LOGOUT,
  RECEIVE_LOGGED_USER,
  RECEIVE_CONSULTANTS,
  RECEIVE_SELECTED_CONSULTANT
} from "../../constants";

const initialState = {
  user: {},
  avatar: {},
  consultantList: [],
  selectedConsultant: ""
  // userAdmin:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGGED_USER:
  
      return {...state, user: action.loggedUser }
      // return Object.assign({}, state, {
      //   user: action.loggedUser,
      //   avatar: action.loggedUser.avatar
      // });

    case USER_LOGOUT:
      return { ...state, user: {} };

    case RECEIVE_CONSULTANTS:

      return { ...state, consultantList: [...action.consultantList] };
    case RECEIVE_SELECTED_CONSULTANT:
      return { ...state, selectedConsultant: action.consultant }
    default:
      return state;
  }
};
