import Page from "../Page.js";
import BootstrapHeader from "./BootstrapHeader.js";
import BootstrapContainer from "./BootstrapContainer.js";
import BootstrapRow from "./BootstrapRow.js";
import BootstrapCol from "./BootstrapCol.js";
import SIZES from "./BootstrapSizes.js";
import {COL_SIZES} from "./BootstrapCol.js";


console.log(Page);

class DefaultPage extends Page{
    header = new BootstrapHeader();
    cont;
    build = function(c){
        c.get().append(c.header.get());
        c.get().append(c.cont.get());
    };
    constructor(){
        super(null,"Default Page");
        this.createContainer();
        Page.cache.put("default Page","<div></div>");
        this.templateUrl = "default Page";
        this.readTemplate();

    }


    createContainer() {
        this.cont = new BootstrapContainer();
        let row = new BootstrapRow();
        let row2 = new BootstrapRow();
        let topcell = new BootstrapCol();
        let left = new BootstrapCol();
        let right = new BootstrapCol();
        row.cells = [topcell];
        row2.cells = [left,right];
        this.cont.rows = [row,row2];


        topcell.responsive.put(SIZES.NOSIZE,COL_SIZES._12);
        topcell.responsive.put(SIZES.Small,COL_SIZES._8);
        topcell.responsive.put(SIZES.Medium,COL_SIZES._6);
        topcell.element.addClass("offset-sm-2");
        topcell.element.addClass("offset-md-3");
        topcell.content = "<h1 class='d1 text-primary'>It Worked</h1>";

        left.responsive.put(SIZES.NOSIZE,COL_SIZES._12);
        left.responsive.put(SIZES.Medium,COL_SIZES.auto);
        left.content = "When you see this you successfull downloaded and set up a basic JSimpage App!";

        right.responsive.put(SIZES.NOSIZE,COL_SIZES._12);
        right.responsive.put(SIZES.Medium,COL_SIZES.auto);
        right.content = "But there is a lot to go!<br><a href='#variables/on/the/path/123'>Variables in Path</a>";
    }
}
export default DefaultPage;