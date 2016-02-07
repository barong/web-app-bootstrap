import AppDispatcher from 'dispatcher/AppDispatcher';
import PageActions from "./PageActions";
import EVENTS from "../const/EVENTS";
import GlobalMessageModel from "models/GlobalMessageModel";


export default class GlobalMessageActions {

    static success = (message:string, scrollTop:boolean = false) => {
        GlobalMessageActions.add('success', message);
        if (scrollTop) {
            PageActions.scrollTop();
        }
    };

    static warn = (message:string, scrollTop:boolean = false) => {
        GlobalMessageActions.add('warn', message);
        if (scrollTop) {
            PageActions.scrollTop();
        }
    };

    static error = (message:string, scrollTop:boolean = false) => {
        GlobalMessageActions.add('error', message);
        if (scrollTop) {
            PageActions.scrollTop();
        }
    };

    private static add = (level:string, message:string) => {
        AppDispatcher.trigger(EVENTS.GLOBAL_MESSAGE_STORE_ADD, new GlobalMessageModel(level, message));
    };

    static remove = (id:number) => {
        AppDispatcher.trigger(EVENTS.GLOBAL_MESSAGE_STORE_REMOVE, id);
    };
}