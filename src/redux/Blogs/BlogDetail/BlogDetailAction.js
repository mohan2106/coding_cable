import {
    REQUEST_BLOG_DETAIL,
    SUCCESS_BLOG_DETAIL,
    FAILURE_BLOG_DETAIL
} from './BlogDetailTypes';

import axios from 'axios';

const requestBlogDetail = () => {
    return {
        type : REQUEST_BLOG_DETAIL,
    }
}

const successBlogDetail = data => {
    return {
        type : SUCCESS_BLOG_DETAIL,
        payload : data,
    }
}

const failureBlogDetail = error => {
    return {
        type : FAILURE_BLOG_DETAIL,
        payload : error
    }
}

export const getBlog = (config) => {
    return (dispatch)=>{
        dispatch(requestBlogDetail());
        axios(config)
        .then(response => {
            const blogDetail = response.data;
            dispatch(successBlogDetail(blogDetail));
            console.log("Blog Detail: ",blogDetail);
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(failureBlogDetail(errorMsg));
        })
    }
}