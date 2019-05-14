import Component from "../Component.js";

class BaseComponent extends Component{
    constructor(url,builder,builder2,isDynamicTemplate = false) {
        super(url,function (c) {
            builder(c);
            builder2(c);
        } , isDynamicTemplate);
    }
}

export default BaseComponent;