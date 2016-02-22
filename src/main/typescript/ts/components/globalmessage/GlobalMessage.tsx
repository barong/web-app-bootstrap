import * as React from 'react';
import * as ReactDOM from "react-dom";
import GlobalMessageStore from "../../stores/GlobalMessageStore";
import ReactComponent from "../ReactComponent";
import EVENTS from "../../const/EVENTS";
import GlobalMessageModel from "models/GlobalMessageModel";
import GlobalMessageItem from "./GlobalMessageItem";
import GlobalMessageActions from "../../actions/GlobalMessageActions";

function getCurrentState() {
    return {
        globalMessages: GlobalMessageStore.getGlobalMessages()
    };
}

export default class GlobalMessage extends ReactComponent<any,any> {

    public getState() {
        return getCurrentState(); 
        //return {
        //    globalMessages:new GlobalMessageModel("warn", "message..")
        //}
    }
  
    public componentDidMount = () => {
        GlobalMessageStore.on(EVENTS.GLOBAL_MESSAGE_STORE_CHANGE, this.onChange);
    };

    public componentWillUnmount = () => {
        GlobalMessageStore.off(EVENTS.GLOBAL_MESSAGE_STORE_CHANGE, this.onChange);
    };

    public render() {
        var elems = [];

        var component = this;
        if (!_.isEmpty(this.state.globalMessages)) {
            _.each(this.state.globalMessages, function (globalMessage:GlobalMessageModel) {
                elems.push(React.createElement(
                    GlobalMessageItem,
                    {
                        key: globalMessage.getId(),
                        globalMessage: globalMessage,
                        onDeleteClick: component.onDeleteClick
                    }
                ));
            });
        }

        return (
            <div className="pure-u-1">
                {elems}
            </div>
        );
    }

    private onChange = () => {
        if (ReactComponent.isMounted(this)) {
            this.setState(getCurrentState());
        }
    };

    private onDeleteClick = (id:number, e) => {
        e.preventDefault();
        GlobalMessageActions.remove(id);
    };
}
