import * as React from 'react';
import UserInfo from '../models/UserInfo';
import PERM from '../const/PERM';
import HTML from '../const/HTML';



export default class RouterFront extends Backbone.Router {

    private userInfo : UserInfo;

    constructor() {
        super({routes: {
            "": "home",
            "home(/)": "home",
            "*actions": "home"
        }
        });
        this.userInfo = UserInfo.getInstance();
    }


    /**
     * Default route for home page and any other unregistered routes
     */
    public home() {
        var contentContainer : JQuery = $(HTML.CONTENT_ID);
        if (contentContainer.length) {
            React.unmountComponentAtNode(contentContainer.get(0));
            React.render(
                <div />,
                document.getElementById(HTML.CONTENT_ID)
            );
        }
    }
}