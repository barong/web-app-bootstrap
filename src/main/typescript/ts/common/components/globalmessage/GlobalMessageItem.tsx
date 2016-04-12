import * as React from 'react';
import ReactComponent from "../ReactComponent";
import GlobalMessageModel from "../../models/GlobalMessageModel";

export default class GlobalMessageItem extends ReactComponent<any,any> {

    public render() {
        var globalMessage:GlobalMessageModel = this.props.globalMessage,
            id = globalMessage.getId(),
            level = globalMessage.getLevel(),
            message = globalMessage.getMessage();

        return (
            <div className={level}>
                <div dangerouslySetInnerHTML={{__html: message}} />
                <a href='javascript:void(0);' onClick={this.props.onDeleteClick.bind(this, id)} title="Delete"><i className="fa fa-times-circle"></i></a>
            </div>
        );
    }
}