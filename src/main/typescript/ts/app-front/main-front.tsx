import 'less/app/front';
import {Common} from 'common';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserInfo from 'models/UserInfo';
import URL from 'const/URL';
import HTML from 'const/HTML';
import RouterFront from './router-front';
import GlobalMessage from '../components/globalmessage/GlobalMessage';
import GlobalMessageActions from '../actions/GlobalMessageActions';
import {
    Store,
    compose,
    createStore,
    bindActionCreators,
    combineReducers
} from 'redux';
import * as Redux from 'redux';
import {
    connect,
    Provider
} from 'react-redux';
import { Action } from 'redux-actions';

import AppFront from './app-front';
import { rootReducer } from './reducers/rootReducer';

const initialState = {};

const store: Store = createStore(rootReducer, initialState);

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