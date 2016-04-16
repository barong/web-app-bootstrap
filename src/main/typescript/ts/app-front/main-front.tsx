import 'less/app/front';
import {Common} from '../common/common';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserInfo from '../common/models/UserInfo';
import URL from '../common/constants/URL';
import HTML from '../common/constants/HTML';
import RouterFront from './router-front';
import GlobalMessage from '../common/components/globalmessage/GlobalMessage';
import * as GlobalMessageActions from '../common/actions/GlobalMessageActions';
import {
    Store,
    compose,
    createStore,
    bindActionCreators,
    combineReducers,
    applyMiddleware
} from 'redux';
import * as Redux from 'redux';
import {
    connect,
    Provider
} from 'react-redux';
import { Action } from 'redux-actions';

import AppFront from './app-front';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {};

const store: Store = createStore(rootReducer, initialState, applyMiddleware(thunk));

class MainFront {
    
    static Router : Backbone.Router;
    
    constructor() {
        $(document).ready(function () {
            Common.init();

            $.when(UserInfo.init())
                .then(function () {
                    var userInfo:UserInfo = UserInfo.getInstance();
                    if (userInfo == null) {
                        return;
                    }

                    ReactDOM.render(
                        <Provider store={store}>
                            <AppFront />
                        </Provider>,
                        document.getElementById(HTML.CONTENT_ID)
                    );

                    MainFront.Router = new RouterFront();
                    Backbone.history.start();
                });
        });
    }
}

export var Main = new MainFront(); 