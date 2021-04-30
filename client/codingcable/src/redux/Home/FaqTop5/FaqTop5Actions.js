import {
    REQUEST_FAQ_TOP5,
    SUCCESS_FAQ_TOP5,
    FAILURE_FAQ_TOP5
} from './FaqTop5Types';

import axios from 'axios';

export const requestFaqTop5 = () => {
    return {
        type : REQUEST_FAQ_TOP5,
    }
}

const successFaqTop5 = data => {
    return {
        type : SUCCESS_FAQ_TOP5,
        payload : data,
    }
}

const failureFaqTop5 = error => {
    return {
        type : FAILURE_FAQ_TOP5,
        payload : error
    }
}

export const FaqTop5 = () => {
    return (dispatch)=>{
        dispatch(requestFaqTop5());
        axios.get('/home/faqTop5')
        .then(response => {
            const faq = response.data;
            dispatch(successFaqTop5(faq));
            console.log("course catalog: ",faq);
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(failureFaqTop5(errorMsg));
        })
    }
}