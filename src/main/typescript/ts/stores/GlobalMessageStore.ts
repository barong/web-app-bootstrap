import AppDispatcher from 'dispatcher/AppDispatcher';
import GlobalMessageModel from "models/GlobalMessageModel";
import EVENTS from "../const/EVENTS";

// exported class
class GlobalMessageStore extends Backbone.Model {

    public getGlobalMessages():any {
        return _globalMessages;
    }

}

var globalMessageStore:GlobalMessageStore = new GlobalMessageStore();
export default globalMessageStore;


// variables
var _globalMessages:{ [id: number]: GlobalMessageModel; } = {};
var _timers:{ [timer: number]: number; } = {};


// functions

// add message
function add(globalMessage:GlobalMessageModel):void {
    var id = globalMessage.getId();

    _globalMessages[id] = globalMessage;

    // auto delete by timer
    _timers[id] = setTimeout(() => remove(globalMessage.getId()), 30 * 1000); // 30 sec

    globalMessageStore.trigger(EVENTS.GLOBAL_MESSAGE_STORE_CHANGE);
}

// delete message
function remove(id:number):void {
    // clear delete timer
    if (_timers[id] !== undefined) {
        clearTimeout(_timers[id]);
        delete _timers[id];
    }

    delete _globalMessages[id];

    globalMessageStore.trigger(EVENTS.GLOBAL_MESSAGE_STORE_CHANGE);
}


// Register to handle all updates
AppDispatcher.on('all', function (eventName, payload) {
    switch (eventName) {
        case EVENTS.GLOBAL_MESSAGE_STORE_ADD:
            var globalMessage:GlobalMessageModel = payload;
            add(globalMessage);
            break;

        case EVENTS.GLOBAL_MESSAGE_STORE_REMOVE:
            var id:number = parseInt(payload);
            remove(id);
            break;
    }
});