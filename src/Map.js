class Map {
    constructor(name = undefined){
        if(name !== undefined){
            this.usePermanentCaching = true;
            this.name = name;
            if(localStorage.getItem(name) !== null)
                this.data = JSON.parse(localStorage.getItem(name));
        }
    }
    usePermanentCaching = false;
    data = [];
    name;
    put(key,value){
        let p = new Pair();
        p.key = key;
        p.value = value;
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i].key === key) {
                this.data[i].value = value;
                return;
            }
        }
        this.data.push(p);
        this.save();
    }
    get(key){
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i].key === key)
                return this.data[i].value;
        }
    }
    remove(key){
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key === key) {
                this.data.splice(i,1);
                return;
            }
        }
    }
    clear(){
        this.data = [];
    }
    save(){
        localStorage.setItem(this.name,JSON.stringify(this.data));
    }
    get size(){
        return this.data.length;
    }
    get keys(){
        let keys = [];
        for (let i = 0; i < this.data.length; i++) {
            keys.push(this.data[i].key);
        }
        return keys;
    }
    getKeys(){
        let keys = [];
        for (let i = 0; i < this.data.length; i++) {
            keys.push(this.data[i].key);
        }
        return keys;
    }
}
class Pair {
    value;
    key;
}

export default Map;