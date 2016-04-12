import URL from '../constants/URL';

export default class UserInfo {

    private static _instance: UserInfo = null;
    
    name : string = '';
    isLogged : boolean = false;
    isAdmin : boolean = false;
    perms : string[] = [];

    constructor(data : any) {
        this.name = data.name || '';
        this.isLogged = data.isLogged;
        this.isAdmin = data.isAdmin;
        this.perms = data.perms;
    }

    public static getInstance():UserInfo {
        return UserInfo._instance;
    }
    
    public static init():JQueryXHR {
        // get user info from server
        return $.ajax({
            url: URL.USER_INFO,
            dataType: 'json',
            success: function(data) {
                if (_.isEmpty(data)) {
                    return;
                }
                UserInfo._instance = new UserInfo(data);
            },
        });
    }
    
    public static refresh():JQueryXHR {
        return UserInfo.init();
    }
}
