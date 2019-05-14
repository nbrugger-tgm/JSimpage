import Component from "../Component.js";

class BootstrapRow extends  Component{
    /**
     * @type {Array<BootstrapCol>}
     */
    cells = [];
    set cells(array){
        this.rebuild();
    }

    constructor() {
        super("../src/components/row.html", function (c) {
            for (let i = 0; i < c.cells.length; i++) {
                c.get().append(c.cells[i].get());
            }
        });
    }
}

export default BootstrapRow;