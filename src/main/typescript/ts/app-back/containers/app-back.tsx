import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactComponent from "../../common/components/ReactComponent";
import * as GlobalMessageActions from '../../common/actions/GlobalMessageActions';

class AppBack extends ReactComponent<any, any> {

    public componentDidMount = () => {
        this.props.messagesActions.addSuccess('App is ready!');
        this.props.messagesActions.addWarn('Run `npm run dev-server` in console for hot reload!');
        this.props.messagesActions.addError('Use Google Chrome browser with React plugin for ReactJS components debugging!');
    };
    
    public render() {

        return (
            <div className="">
            </div>
        );
    }
}

const mapStateToProps = state => ({
    globalMessages: state.globalMessages
});

const mapDispatchToProps = dispatch => ({
    messagesActions: bindActionCreators(GlobalMessageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBack);