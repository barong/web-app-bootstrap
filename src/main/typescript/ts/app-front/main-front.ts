import {Common} from 'common'; 
import {AppFront} from 'app-front/app-front';

class MainFront {
    constructor() {
        $(document).ready(function () {
            Common.init();
            AppFront.runApplication();
        });
    }
}

export var Main = new MainFront(); 