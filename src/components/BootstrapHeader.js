import Component from "../Component.js";

class BootstrapHeader extends Component{

    constructor() {
        super("../src/components/header.html", function (c) {
            c.get(".title").text(c.val("title"));
        });
        this.val("title","JSimpage");
    }
}

export default BootstrapHeader;