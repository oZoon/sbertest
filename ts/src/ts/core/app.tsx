import React from 'react';
import {connect} from 'react-redux';

import Content from '../containers/content';
import * as a from './actions';
import separateProps from '../lib/separateProps';
import {appPropsType, contentType, initType} from '../lib/types';
import {Dispatch} from 'redux';

let App: React.FC<any> = (props: appPropsType) => {
    const propsContent: contentType = separateProps(props);
    return (
        <Content {...propsContent} />
    );
};

const mapStateToProps = (state: initType) => {
    return {
        state,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    type aType = {[k: string]: typeof a[keyof typeof a]};
    const obj = {};
    Object.keys(a).forEach(item => Object.assign(obj, {[`on${item.charAt(0).toUpperCase()}${item.substring(1)}`]: (data: any) => dispatch((a as aType)[item](data))}));
    return obj;
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
