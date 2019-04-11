import { LOGIN, LOGOUT, ERROR, REQUEST_FACEBOOK_LOGIN } from "./types";


const initialState = {
  user: {
    auth_token: "",
    created_at: "",
    email: "",
    full_name: "",
    gender: "",
    id: "",
    last_login_at: "",
    phone: "",
    profile_picture_url: "",
    updated_at: ""
  },
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    case REQUEST_FACEBOOK_LOGIN:
      return {
        ...state,
        user: { ...action.payload }
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export const getUser = state => state.authReducer.user;

export default reducer;


