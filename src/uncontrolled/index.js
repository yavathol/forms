import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Text} from './Text';
import {File} from './File';

export const Uncontrolled = ({match}) => (
    <Switch>
        <Route path={`${match.path}/text`} component={Text}/>
        <Route path={`${match.path}/file`} component={File}/>
    </Switch>
);
