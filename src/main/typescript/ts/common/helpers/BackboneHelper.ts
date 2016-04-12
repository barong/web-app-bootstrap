import Backbone = require('backbone');


class BackboneHelper {
    static refreshPage(url : string) {

        // just refresh the page
        // `Backbone.history.navigate` is sufficient for all Routers and will trigger the
        // correct events. The Router's internal `navigate` method calls this anyways.
        var ret = Backbone.history.navigate(url, true);

        // Typically Backbone's history/router will do nothing when trying to load the same URL.
        // But since we want it to re-fire the same route, we can detect 
        // when Backbone.history.navigate did nothing, and force the route.
        if (ret === undefined) {
            Backbone.history.loadUrl(url);
        }
    }
}

export = BackboneHelper;