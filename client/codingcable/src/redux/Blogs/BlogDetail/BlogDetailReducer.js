import {
    REQUEST_BLOG_DETAIL,
    SUCCESS_BLOG_DETAIL,
    FAILURE_BLOG_DETAIL
} from './BlogDetailTypes';

    
const blogDetailState = {
    loading : false,
    data : {},
    errors : ''
}

const blogDetailReducer = (state = blogDetailState,action) => {
    switch(action.type){
        case REQUEST_BLOG_DETAIL : {
            return {
                ...state,
                loading : true,
            }
        }
        case SUCCESS_BLOG_DETAIL : {
            return {
                loading : false,
                data : action.payload,
                error : '',
            }
        }
        case FAILURE_BLOG_DETAIL : {
            return {
                loading : false,
                error : action.payload,
                data : {},
            }
        }
        default : return state;
    }
}

export default blogDetailReducer;