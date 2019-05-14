import Component from "../Component.js";

class BootstrapHeader extends Component{
    constructor() {
        super("../src/components/header.html", function (c) {
            c.get(".title").text("JSimpage");
        });
    }
}

export default BootstrapHeader;