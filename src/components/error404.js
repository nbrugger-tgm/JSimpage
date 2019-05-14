import Page from "../Page.js";
import BootstrapHeader from "./BootstrapHeader.js";

class Error404 extends Page{
    constructor() {
        super("../src/components/404.html","Error 404");
        this.rebuild();
        this.rebuild();
        this.rebuild();
        this.rebuild();
    }
    build = function (v) {
        let header = new BootstrapHeader();
        header.get(".title").text("404");
        v.$(".head").append(header.$());
    }
}

export default Error404;