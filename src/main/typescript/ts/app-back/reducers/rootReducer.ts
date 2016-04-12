import { combineReducers } from 'redux';

import globalMessagesReducer from '../../common/reducers/globalMessagesReducer';

const rootReducer = combineReducers({
    globalMessages: globalMessagesReducer
});

export { rootReducer };
