import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './components/Header';
import MainSection from './components/MainSection';
import * as TodoActions from './actions/todos';


class AppFront extends React.Component<any, any> {

    public render() {
        const { todos, dispatch } = this.props;
        const actions = bindActionCreators(TodoActions, dispatch);

        return (
            <div className="todoapp">
                <Header addTodo={actions.addTodo} />
                <MainSection
                    todos={todos}
                    actions={actions}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(AppFront);