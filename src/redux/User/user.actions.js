import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOADING } from './user.type';
import { loginUser } from '../../api/auth/loginServices';
import { registerUser } from '../../api/auth/registerServices';
import { logOut } from '../../api/auth/logoutServices';

export const loading = () => {
  return {
    type: LOADING
  }
}

export const register = (username, password, fullName) => (dispatch) => {
  dispatch(loading())
  return registerUser(username, password, fullName)
    .then(
      (res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: res },
      })

      return Promise.resolve();
    },
      (err) => {
        const message = err.response?.data?.message;

        dispatch({
          type: REGISTER_FAIL,
          payload: message
        });

        // dispatch({
        //   type: SET_MESSAGE,
        //   payload: message,
        // });
        return Promise.reject();
      }
      )
}

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(loading())
    return loginUser(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (err) => {
        const message = err.response?.data?.message;

        dispatch({
          type: LOGIN_FAIL,
          payload: message
        });
  
        // dispatch({
        //   type: SET_MESSAGE,
        //   payload: message,
        // });
  
        return Promise.reject();
      }
    );
  }
};

export const logout = () => (dispatch) => {
  dispatch(loading())
  logOut()

  dispatch({
    type: LOGOUT,
  });
};