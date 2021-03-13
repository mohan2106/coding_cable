import React from 'react';
import { Route } from 'react-router-dom';
import testComponent from './components/testComponent';

export default (
    <div id="appRoot">
        <Route path="/" component={testComponent} />
    </div>
);