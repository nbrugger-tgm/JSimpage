import Component from "../Component.js";
import Map from "../Map.js";
import BaseComponent from "./BaseComponent.js";

class BootstrapCol extends BaseComponent{

    set content(value){
        this.val("content",value);
    }
    get content(){
        return this.val("content");
    }

    set responsive(value){
        this.val("responsive",value);
    }

    get responsive(){
        return this.val("responsive");
    }

    set fill(value){
        this.val("fill",value);
    }
    get fill(){
        return this.val("fill");
    }

    constructor(listener= function () {}) {
        super("../src/components/col.html",
            function (c) {
                let e = c.get();
                if(c.responsive === undefined)
                    return;
                if(c.fill){
                    e.addClass("col");
                }else{
                    for (let i = 0; i < c.responsive.size; i++) {
                        let key = c.responsive.keys[i];
                        let cls = "col"+key.description+c.responsive.get(key).description;
                        e.addClass(cls);
                    }
                }
                e.html(c.content);
            },
            listener
        );
        this.responsive = new Map();
        this.fill = false;
    }
}
const COL_SIZES = Object.freeze({
    _1:   Symbol("-1"),
    _2 :  Symbol("-2"),
    _3 : Symbol("-3"),
    _4 : Symbol("-4"),
    _5 : Symbol("-5"),
    _6 : Symbol("-6"),
    _7 : Symbol("-7"),
    _8 : Symbol("-8"),
    _9 : Symbol("-9"),
    _10 : Symbol("-10"),
    _11 : Symbol("-11"),
    _12 : Symbol("-12"),
    auto : Symbol("")
});

export default BootstrapCol;
export {COL_SIZES};
