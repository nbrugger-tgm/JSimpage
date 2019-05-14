import Component from "../Component.js";

class BootstrapRow extends  Component{
    /**
     * @param array {Array<BootstrapCol>}
     */
    set cells(array){
        this.val("cells",array);
    }
    get cells(){
        return this.val("cells");
    }

    constructor() {
        super("../src/components/row.html", function (c) {
            if(c.cells !== undefined)
                for (let i = 0; i < c.cells.length; i++) {
                    c.get().append(c.cells[i].get());
                }
        });
        this.cells = [];
    }
}

export default BootstrapRow;