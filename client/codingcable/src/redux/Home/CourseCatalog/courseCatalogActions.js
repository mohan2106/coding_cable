import {
    REQUEST_COURSE_CATALOG,
    SUCCESS_COURSE_CATALOG,
    FAILURE_COURSE_CATALOG
} from './courseCatalogTypes';

import axios from 'axios';

export const requestCourseCatalog = () => {
    return {
        type : REQUEST_COURSE_CATALOG,
    }
}

const successCourseCatalog = data => {
    return {
        type : SUCCESS_COURSE_CATALOG,
        payload : data,
    }
}

const failureCourseCatalog = error => {
    return {
        type : FAILURE_COURSE_CATALOG,
        payload : error
    }
}

export const courseCatalog = () => {
    return (dispatch)=>{
        dispatch(requestCourseCatalog());
        axios.get('http://localhost:4000/home/courseCatalog')
        .then(response => {
            const courseCatalog = response.data;
            dispatch(successCourseCatalog(courseCatalog));
            console.log("course catalog: ",courseCatalog);
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(failureCourseCatalog(errorMsg));
        })
    }
}