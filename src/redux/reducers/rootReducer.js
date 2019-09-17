import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import LoginformReducer from '../../pages/psg/login/form/formReducer';

const rootReducer = combineReducers({
  loginForm:LoginformReducer,
  form: FormReducer
});

export default rootReducer;
