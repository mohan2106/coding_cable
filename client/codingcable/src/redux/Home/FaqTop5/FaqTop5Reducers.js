import {
    REQUEST_FAQ_TOP5,
    SUCCESS_FAQ_TOP5,
    FAILURE_FAQ_TOP5
} from './FaqTop5Types';

    
const faqState = {
    loading : false,
    data : {},
    errors : ''
}

const faqReducers = (state = faqState,action) => {
    switch(action.type){
        case REQUEST_FAQ_TOP5 : {
            return {
                ...state,
                loading : true,
            }
        }
        case SUCCESS_FAQ_TOP5 : {
            return {
                loading : false,
                data : action.payload,
                error : '',
            }
        }
        case FAILURE_FAQ_TOP5 : {
            return {
                loading : false,
                error : action.payload,
                data : {},
            }
        }
        default : return state;
    }
}

export default faqReducers;