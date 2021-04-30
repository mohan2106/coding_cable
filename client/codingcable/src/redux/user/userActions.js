import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    } from './userTypes';
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


export const login = (userData) => {
    return (dispatch)=>{
        dispatch(fetchUserRequest());
        axios(userData)
        .then(response => {
            const users = response.data;
            dispatch(fetchUserSuccess(users));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchUserFailure(errorMsg));
        })
    }
}

// ========================================GET USER USING COOKIES===============

export const getUser = () => {
    return (dispatch)=>{
        dispatch(fetchUserRequest());
        axios.post('http://localhost:4000/getuser')
        .then(response => {
            const users = response.data;
            console.log(users);
            dispatch(fetchUserSuccess(users));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchUserFailure(errorMsg));
            console.log(error);
        })
    }
}