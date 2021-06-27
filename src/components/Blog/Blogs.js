import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogHome from './BlogHome/BlogHome';
import SingleBlog from './SingleBlog/SingleBlog';
import Editor from './BlogEditor/BlogEditor.js';
import Navbar from '../Navbar';
import { Provider } from "react-redux";
import store from '../../redux/store';
import PrivateRoute from '../private-route/PrivateRoute';

function Blogs() {
    return (
        <Provider store={store}>
            <Navbar showLink={false}/>
            <Route path='/blogs/' exact component={BlogHome} />
            <Route path='/blogs/id/:id' exact  component={SingleBlog} />
            {/* <Route path='/blogs/addblog' exact component={Editor}/> */}
            <PrivateRoute exact path="/blogs/addblog" component={Editor} />
        </Provider>
    )
}
 
export default Blogs
