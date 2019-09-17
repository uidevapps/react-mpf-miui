import { USER_LOGIN } from "./formConstrains";
import {createReducer} from "../../../../redux/Utils/reducerUtils";

const initialState = {
  data: {
    email: "mpf@gmail.com",
    password: "admin@gmail.com"
  }
};

// const LoginformReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_LOGIN:
//       return {
//         ...state,
//         data: { email: (state.data.email = "manu@gmail.com") }
//       };
//     default:
//       return state;
//   }
// };

const LoginformReducer = state => {
  return {
    ...state,
    data: { email: (state.data.email = "manu@gmail.com") }
  };
};

export default createReducer(initialState,{
  [USER_LOGIN]:LoginformReducer
});
