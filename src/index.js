import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import '../node_modules/bootstrap-social/bootstrap-social.css'
import './style/font-awesome-4.7.0/css/font-awesome.min.css'


import App from './components/App'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);