import BaseComponent from "./BaseComponent.js";

class BootstrapContainer extends BaseComponent{
    /**
     * @type {Array<BootstrapRow>}
     */
    rows = [];
    set rows(rows){
        this.rebuild();
    }

    constructor(listener = function () {}) {
        super("../src/components/container.html",function () {},listener);
    }

    build = function (c) {
        for (let i = 0; i < c.rows.length; i++) {
            c.get().append(c.rows[i].get());
        }
    };
}

export default BootstrapContainer;