import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Text} from './Text';
import {Checkbox} from './Checkbox';
import {Select} from './Select';
import {MultiSelect} from './MultiSelect';
import {Textarea} from './Textarea';

export const Controlled = ({match}) => (
    <Switch>
        <Route path={`${match.path}/text`} component={Text}/>
        <Route path={`${match.path}/checkbox`} component={Checkbox}/>
        <Route path={`${match.path}/select`} component={Select}/>
        <Route path={`${match.path}/multiselect`} component={MultiSelect}/>
        <Route path={`${match.path}/textarea`} component={Textarea}/>
    </Switch>
);
