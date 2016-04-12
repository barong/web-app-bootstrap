import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserInfo from '../common/models/UserInfo';
import PERM from '../common/constants/PERM';
import HTML from '../common/constants/HTML';


export default class RouterBack extends Backbone.Router {

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
            ReactDOM.unmountComponentAtNode(contentContainer.get(0));
            ReactDOM.render(
                <div />,
                document.getElementById(HTML.CONTENT_ID)
            );
        }
    }
}