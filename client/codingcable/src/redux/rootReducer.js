import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import courseCatalogReducer from './Home/CourseCatalog/courseCatalogReducers';
import faqTop5Reducer from './Home/FaqTop5/FaqTop5Reducers';

const rootReducer = combineReducers({
    user: userReducer,
    courseCatalog: courseCatalogReducer,
    faqTop5: faqTop5Reducer
});



export default rootReducer;