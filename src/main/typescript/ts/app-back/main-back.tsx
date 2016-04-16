import 'less/app/back';
import {Common} from '../common/common';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserInfo from '../common/models/UserInfo';
import URL from '../common/constants/URL';
import HTML from '../common/constants/HTML';
import RouterFront from './router-back';
import {
    Store,
    createStore,
    applyMiddleware
} from 'redux';
import {
    Provider
} from 'react-redux';
import GlobalMessages from '../common/components/globalmessage/GlobalMessage';
import AppBack from './containers/app-back';
import {rootReducer} from "./reducers/rootReducer";
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
                            <GlobalMessages />
                        </Provider>,
                        document.getElementById(HTML.GLOBAL_MESSAGE_ID)
                    );

                    ReactDOM.render(
                        <Provider store={store}>
                            <AppBack />
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