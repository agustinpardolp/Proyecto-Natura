import {
  USER_LOGOUT,
  RECEIVE_LOGGED_USER,
  RECEIVE_CONSULTANTS,
  RECEIVE_CONSULTANT_ADRESS,
  RECEIVE_SELECTED_CONSULTANT,
  RECEIVE_SELECTED_ADRESS
} from "../../constants";

const initialState = {
  user: {},
  avatar: {},
  consultantList: [],
  consultantAdressList: "",
  selectedConsultant: "",
  selectedAdress: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGGED_USER:
      return { ...state, user: action.loggedUser };

    case USER_LOGOUT:
      return { ...state, user: {} };

    case RECEIVE_CONSULTANTS:
      return { ...state, consultantList: [...action.consultantList] };

    case RECEIVE_CONSULTANT_ADRESS:
        
      return { ...state, consultantAdressList: action.consultantAdressList };

    case RECEIVE_SELECTED_CONSULTANT:
    
      return {
        ...state,
        selectedConsultant: action.selectedConsultant,
        selectedAdress: ""
      };

    case RECEIVE_SELECTED_ADRESS:
        console.log("ADRESSSSSSSSSSSSSSS", action.selectedAdress)
      return { ...state, selectedAdress: action.selectedAdress };
    default:
      return state;
  }
};
