import * as React from 'react';
import ReactComponent from "../ReactComponent";
import GlobalMessageModel from "../../models/GlobalMessageModel";
import GlobalMessageItem from "./GlobalMessageItem";
import * as GlobalMessageActions from "../../actions/GlobalMessageActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class GlobalMessage extends ReactComponent<any,any> {

    public render() {
        var allMessages = this.props.globalMessages.toArray() || [];
        
        var elems = [];
        var component = this;
        
        if (!_.isEmpty(allMessages)) {
            _.each(allMessages, function (globalMessage:GlobalMessageModel) {
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

    private onDeleteClick = (id:number, e) => {
        e.preventDefault();
        this.props.messagesActions.remove(id);
    };
}


const mapStateToProps = state => ({
    globalMessages: state.globalMessages
});

const mapDispatchToProps = dispatch => ({
    messagesActions: bindActionCreators(GlobalMessageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalMessage);
