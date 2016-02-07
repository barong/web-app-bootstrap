import * as React from 'react';
import UserInfo from 'models/UserInfo';
import URL from 'const/URL';
import HTML from 'const/HTML';
import RouterFront from './router-front';
import GlobalMessage from '../components/globalmessage/GlobalMessage';
import GlobalMessageActions from '../actions/GlobalMessageActions';


export class AppFront {

    static Router : Backbone.Router;

    public static runApplication() : void {

        $.when(UserInfo.init())
            .then(function () {
                var userInfo:UserInfo = UserInfo.getInstance();
                if (userInfo == null) {
                    return;
                }

                AppFront.Router = new RouterFront();
                Backbone.history.start();

                AppFront.renderGlobalMessages();
                GlobalMessageActions.success("App is ready!");
                GlobalMessageActions.warn("Run `grunt` in console after bootRun gradle task for .less and .ts live reload!");
                GlobalMessageActions.error("User Google Chrome browser with React plugin for debug ReactJS components!");
            });
    }

    private static renderGlobalMessages() : void {
        React.render(
            <GlobalMessage />,
            document.getElementById(HTML.GLOBAL_MESSAGE_ID)
        );
    }
}
