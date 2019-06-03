import Page from "../../../src/Page.js";
import BootstrapHeader from "../../../src/components/BootstrapHeader.js";

class TobiPage extends  Page{
    constructor() {
        super("components/pages/tobi.html","Tobi");
    }
    build = function (c) {
        c.$(".header").append(new BootstrapHeader().$());
        c.$(".varx").text(c.val("x"));
    }
}

export default TobiPage;