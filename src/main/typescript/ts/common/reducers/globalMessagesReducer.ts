import { OrderedMap } from 'immutable';
import { handleActions, Action } from 'redux-actions';

import GlobalMessageModel from '../models/GlobalMessageModel';
import * as ActionsTypes from '../constants/action-types/GlobalMessageActionsTypes';

const initialState = OrderedMap<number, GlobalMessageModel>();

export default handleActions<OrderedMap<number, GlobalMessageModel>>({
    [ActionsTypes.ADD_SUCCESS]: (state: OrderedMap<number, GlobalMessageModel>, action: Action): OrderedMap<number, GlobalMessageModel> => {
        let message : GlobalMessageModel = new GlobalMessageModel('success', action.payload.message);
        return state.set(message.getId(), message);
    },
   
    [ActionsTypes.ADD_WARN]: (state: OrderedMap<number, GlobalMessageModel>, action: Action): OrderedMap<number, GlobalMessageModel> => {
        let message : GlobalMessageModel = new GlobalMessageModel('warn', action.payload.message);
        return state.set(message.getId(), message);
    },
   
    [ActionsTypes.ADD_ERROR]: (state: OrderedMap<number, GlobalMessageModel>, action: Action): OrderedMap<number, GlobalMessageModel> => {
        let message : GlobalMessageModel = new GlobalMessageModel('error', action.payload.message);
        return state.set(message.getId(), message);
    },
   
    [ActionsTypes.REMOVE]: (state: OrderedMap<number, GlobalMessageModel>, action: Action): OrderedMap<number, GlobalMessageModel> => {
        return state.remove(action.payload.id);
    }

}, initialState);
