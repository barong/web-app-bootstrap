import HTML from '../const/HTML';

export default class PageActions {
    static scrollTop = () => {
        $('#' + HTML.CONTENT_WRAPPER_ID).animate({scrollTop: 0}, "slow");
    };
}