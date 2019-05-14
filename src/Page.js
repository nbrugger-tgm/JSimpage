import Component from "./Component.js";

class Page extends Component{
    title;


    constructor(uri,name = "Page Name"){
        super(uri,function () {},false);
        this.title = name;
    }
    show(){
        $("body").html(this.get());
        this.rebuild();
    }
}
export default Page;