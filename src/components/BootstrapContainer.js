import BaseComponent from "./BaseComponent.js";

class BootstrapContainer extends BaseComponent{
    /**
     * @param rows {Array<BootstrapRow>}
     */
    set rows(rows){
        this.val("rows",rows);
    }
    get rows(){
        return this.val("rows");
    }

    constructor(listener = function () {}) {
        super("../src/components/container.html",function () {},listener);
        this.rows = [];
    }

    build = function (c) {
        if(c.rows !== undefined)
            for (let i = 0; i < c.rows.length; i++) {
                c.get().append(c.rows[i].get());
            }
    };
}

export default BootstrapContainer;