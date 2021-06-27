import {
    REQUEST_COURSE_CATALOG,
    SUCCESS_COURSE_CATALOG,
    FAILURE_COURSE_CATALOG
} from './courseCatalogTypes';

    
const courseCatalogState = {
    loading : false,
    data : {},
    errors : ''
}

const courseCatalogReducer = (state = courseCatalogState,action) => {
    switch(action.type){
        case REQUEST_COURSE_CATALOG : {
            return {
                ...state,
                loading : true,
            }
        }
        case SUCCESS_COURSE_CATALOG : {
            return {
                loading : false,
                data : action.payload,
                error : '',
            }
        }
        case FAILURE_COURSE_CATALOG : {
            return {
                loading : false,
                error : action.payload,
                data : {},
            }
        }
        default : return state;
    }
}

export default courseCatalogReducer;