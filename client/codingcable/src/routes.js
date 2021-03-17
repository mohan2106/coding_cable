import React from 'react';
import { Route } from 'react-router-dom';
import testComponent from './components/testComponent';
import App from './components/App';

export default (
    <div id="appRoot">
        {/* <Route path="/" component={testComponent} /> */}
        <Route path="/" component={App}/>
    </div>
);