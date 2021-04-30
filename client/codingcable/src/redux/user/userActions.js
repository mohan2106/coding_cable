import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE} from './userTypes';
import axios from 'axios';

export const fetchUserRequest = () => {
    return {
        type : LOGIN_USER_REQUEST,
    }
}

const fetchUserSuccess = data => {
    return {
        type : LOGIN_USER_SUCCESS,
        payload : data,
    }
}

const fetchUserFailure = error => {
    return {
        type : LOGIN_USER_FAILURE,
        payload : error
    }
}

export const login = () => {
    return (dispatch)=>{
        dispatch(fetchUserRequest());
        axios.post('/login')
        .then(response => {
            const users = response.data;
            dispatch(fetchUserSuccess(users));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchUserFailure(errorMsg));
        })
    }
}

// export const setCurrentUser = decoded => {
//     return {
//       type: SET_CURRENT_USER,
//       payload: decoded
//     };
//   };

//   export const logoutUser = () => dispatch => {
//     // Remove token from local storage
//     localStorage.removeItem("jwtToken");
//     // Remove auth header for future requests
//     setAuthToken(false);
//     // Set current user to empty object {} which will set isAuthenticated to false
//     dispatch(setCurrentUser({}));
//   };