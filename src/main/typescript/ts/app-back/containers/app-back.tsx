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
        publishLevel(12, {data: true}).then(function(level_data) {
            console.log(level_data);
        });
    };
    
    public render() {

        return (
            <div className="">
            </div>
        );
    }
}

async function publishLevel(user_id, level_data) {
    var user = await getUser(user_id);
    var can_create = await canCreate(user);

    if (!can_create) {
        return null;
    }

    var level = await saveLevel(user, level_data);

    return level;
}

function getUser(user_id) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({
                id: user_id,
                nickname: 'tlhunter'
            });
        }, 100);
    });
}

function canCreate(user) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(user.id === 12);
        }, 100);
    });
}

function saveLevel(user, data) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({
                id: 100,
                owner: user.nickname,
                data: data
            });
        }, 100);
    });
}

const mapStateToProps = state => ({
    globalMessages: state.globalMessages
});

const mapDispatchToProps = dispatch => ({
    messagesActions: bindActionCreators(GlobalMessageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBack);