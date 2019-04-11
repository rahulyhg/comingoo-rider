import * as apiCaller from '../../config/api';
import { call, put } from 'redux-saga/effects';
import { handlers } from '../../helpers';
import { AsyncStorage } from 'react-native';

import { REQUEST_FACEBOOK_LOGIN, REQUEST_FACEBOOK_LOGIN_FAILURE } from "../../store/auth/types";

export function* loginFacebookUser(action) {
  try {
    const data = { "username": action.facebookEmail }
    const response = yield call(apiCaller.signinRequest, 'https://comingoo-api.herokuapp.com/api/riders/loginRider', 'POST', data);
    if (response.auth_token) {
      AsyncStorage.setItem("COMINGOO_TOKEN", response.auth_token);
      yield put({ type: REQUEST_FACEBOOK_LOGIN, payload: response });
    }
  } catch (error) {
    handlers.showToast("Error, try again.", "danger");
    yield put({ type: REQUEST_FACEBOOK_LOGIN_FAILURE, message: response.message });
  }

}


//console.log("SSSSSSSs", response);
  // try {
  //   const response = fetch('https://comingoo-api.herokuapp.com/api/riders/loginRider', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "username": action.facebookEmail
  //     })
  //   }).then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log("HEY", responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // } catch (error) {
  //   console.error(error);
  // }