import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE} from './userTypes';

    
const initialState = {
    loading : false,
    isAuthenticated : false,
    user : {},
    error : ''
}

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case LOGIN_USER_REQUEST : {
            return {
                ...state,
                loading : true,
            }
        }
        case LOGIN_USER_SUCCESS : {
            return {
                loading : false,
                user : action.payload,
                error : '',
                isAuthenticated : true,
            }
        }
        case LOGIN_USER_FAILURE : {
            return {
                loading : false,
                error : action.payload,
                user : {},
                isAuthenticated:false,
            }
        }
        default : return state;
    }
}

export default userReducer;