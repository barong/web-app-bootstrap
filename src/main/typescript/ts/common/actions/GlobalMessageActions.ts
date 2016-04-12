import { createAction, Action } from 'redux-actions';
import * as types from '../constants/action-types/GlobalMessageActionsTypes';

const addSuccess = createAction(
    types.ADD_SUCCESS,
    (message: string) => ({message:message})
);

const addWarn = createAction(
    types.ADD_WARN,
    (message: string) => ({message:message})
);

const addError = createAction(
    types.ADD_ERROR,
    (message: string) => ({message:message})
);

const remove = createAction<void>(
    types.REMOVE,
    (id: number) => ({id})
);

export {
    addSuccess,
    addWarn,
    addError,
    remove
}