import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogHome from './BlogHome/BlogHome';
import SingleBlog from './SingleBlog/SingleBlog';
import Editor from './BlogEditor/BlogEditor.js';
import Navbar from '../Navbar';

function Blogs() {
    return (
        <div>
            <Navbar showLink={false}/>
            <Route path='/blogs/' exact component={BlogHome} />
            <Route path='/blogs/id/:id' exact  component={SingleBlog} />
            <Route path='/blogs/addblog' exact component={Editor}/>
        </div>
    )
}

export default Blogs
