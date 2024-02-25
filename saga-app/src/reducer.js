import { act } from "react-dom/test-utils";

const myfirstReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default myfirstReducer;
