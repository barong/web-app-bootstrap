export default class GlobalMessageModel {
    private static _lastId:number = 0;

    private _id:number;
    private _level:string;
    private _message:string;

    constructor(level:string, message:string) {
        this._id = GlobalMessageModel._lastId++ || 0;
        this._level = level;
        this._message = message;
    }

    public getId():number {
        return this._id;
    }

    public getLevel():string {
        return this._level;
    }

    public getMessage():string {
        return this._message;
    }
}