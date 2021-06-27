import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import courseCatalogReducer from './Home/CourseCatalog/courseCatalogReducers';
import faqTop5Reducer from './Home/FaqTop5/FaqTop5Reducers';
import blogDetailReducer from './Blogs/BlogDetail/BlogDetailReducer';

const rootReducer = combineReducers({
    user: userReducer,
    courseCatalog: courseCatalogReducer,
    faqTop5: faqTop5Reducer,
    blogDetail: blogDetailReducer,
});

export default rootReducer;