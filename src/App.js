import $ from "./jquery.js";

$.fn.replaceWithPush = function(a) {
    let $a = $(a);

    this.replaceWith($a);
    return $a;
};
$.fn.log = function() {
    console.log.apply(console, this);
    return this;
};
window.$ = $;
import Page from "./Page.js";
import Component from "./Component.js";
import Router from "./Router.js";
import AppConfig from "./AppConfig.js";
import Map from "./Map.js";

{
    const dev = true;

    if (dev) {
        window.jsimp = {};
        window.jsimp.Page = Page;
        window.jsimp.Router = Router;
        window.jsimp.Component = Component;
    }
}
class App {
    configuration = new AppConfig();

    /**
     * @type {Router}
     */
    router;
    constructor(name,appConfig = new AppConfig()) {
        appConfig.name = name;
        if(appConfig.permaCache){
            Component.cache = new Map("components");
        }else{
            Component.cache = new Map();
        }
        Router.appConfig = appConfig;
        this.router = new Router(appConfig.defaultPath,appConfig.defaultPage);
    }

    start() {
        let head = $("head");
        if (this.configuration.useBootstrap) {
            head.append($("<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/" + this.configuration.bootstrapVersion + "/js/bootstrap.min.js\"></script>"));
            head.append($("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/" + this.configuration.bootstrapVersion + "/css/bootstrap.min.css\">"));
        }
        head.append($("<meta charSet=\""+this.configuration.charset+"\">"));
        head.append($("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">"));
        this.router.apply();
    }
}

export default App;