import {Common} from 'common'; 
import {AppBack} from 'app-back/app-back';

class MainBack {
    constructor() {
        $(document).ready(function () {
            Common.init();
            AppBack.runApplication();
        });
    }
}

new MainBack(); 