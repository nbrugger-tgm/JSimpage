

class Component{
    static cache;
    templateUrl;
    isDynamicTemplate;
    element = null;
    values;
    build;
    requested;

    /**
     * @param func {function}
     */
    set builder(func){
        this.build = func;
        this.rebuild();
    }

    constructor(templateURL,builder,isDynamicTemplate = false) {
        this.templateUrl = templateURL;
        this.isDynamicTemplate = isDynamicTemplate;
        this.build = builder;
        let _this = this;
        this.values = new Proxy({},{
            set: function(obj, prop, value){
                obj[prop] = value;
                _this.rebuild();
                return true;
            }
        });
        this.rebuild();
    }

    readTemplate(ready = function () {}) {
        if(this.templateUrl === null || this.templateUrl === undefined) {
            return;
        }
        let data = undefined;
        if(!this.isDynamicTemplate)
            data = Component.cache.get(this.templateUrl);
        if(data === undefined) {
            let _this = this;
            $.ajax({
                url: _this.templateUrl,
                dataType: "html",
                async: false,
                success: function (data) {
                   if(_this.element === null)
                       _this.element = $(data);
                   else
                       _this.element =  _this.element.replaceWithPush(data);
                    Component.cache.put(_this.templateUrl,data);
                    ready(_this);
                }

            });
            this.requested = true;
        }else{
            if(this.element === null)
                this.element = $(data);
            else
                this.element = this.element.replaceWithPush(data);
            ready(this);
        }
    }
    async rebuild(){
        this.readTemplate();
        this.build(this);
    }
    val(key,value = undefined) {
        if(value === undefined) {
            return this.values[key];
        } else {
            this.values[key] = value;
        }
    }
    get(query = null){
        if(query === null)
            return this.element;
        else return this.element.find(query);
    }
    $(query = null){
        return this.get(query);
    }
}

export default Component;