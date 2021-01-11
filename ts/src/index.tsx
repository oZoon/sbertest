import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './ts/core/reducers';
import Records from './ts/lib/records';
import App from './ts/core/app';
import {VERSION} from './ts/lib/constants';

import './styles/main.css';

const store = createStore(reducers);

const update = () => {
    const records = new Records();
    records.setRecord(`sber-${VERSION}`, store.getState());
};
store.subscribe(update);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
