export class Common {

    public static init() : void {
        $(document).ready(function () {

            // send csrf token with every ajax-request
            $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
                var header = $("meta[name='_csrf_header']").attr("content") || 'empty';
                var token = $("meta[name='_csrf_token']").attr("content") || 'empty';
                jqXHR.setRequestHeader(header, token);
            });

            // check if session invalidated and user need to be logged in
            $(document).ajaxComplete(function (event, jqXHR, ajaxOptions) {
                if (jqXHR.status === 200) {
                    var loginPageHeader = jqXHR.getResponseHeader("LoginPage");
                    if (loginPageHeader && loginPageHeader !== "") {
                        if (window.location.href.indexOf(loginPageHeader) == -1) {
                            window.location.reload();
                        }
                    }
                }
            });
        });
    }
}