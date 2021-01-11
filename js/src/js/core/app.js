import React from 'react';
import { connect } from 'react-redux';

import Content from 'containers/content';
import * as a from './actions';
import separateProps from 'lib/separateProps';

let App = (props) => {
    const propsContent = separateProps(props);
    return (
        <Content {...propsContent} />
    );
};

const mapStateToProps = (state) => {
    return {
        state,
    };
};

const mapDispatchToProps = (dispatch) => {
    const obj = {};
    Object.keys(a).forEach(item => Object.assign(obj, { [`on${item.charAt(0).toUpperCase()}${item.substring(1)}`]: (data) => dispatch(a[item](data)) }));
    return obj;
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
