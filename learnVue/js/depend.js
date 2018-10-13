/**
 * 依赖收集
 */

 function observer(value, cb){
     Object.keys(value).forEach((key) => defineReactive(value, key, value[key], cb));
 }

class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub = Watcher){
        this.subs.push(sub);
    }
    removeSub(sub = Watcher){
        remove(this.subs, sub);
    }
    notify(){
        const subs = this.subs.slice();
        for (let i = 0; i < subs.length; i++) {
            subs[i].update();
        }
    }
}

function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}

class Watcher {
    constructor(vm, expOrFun, cb, options) {
        this.cb = cb;
        this.vm = vm;
        Dep.target = this;
        this.cb.call(this.vm);
    }
    update(){
        this.cb.call(this.vm);
    }
}

class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data, options.render);
        let watcher = new Watcher(this);
    }
}

function defineReactive (obj, key, val, cb) {
    /*在闭包内存储一个Dep对象*/
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: ()=>{
            if (Dep.target) {
                /*Watcher对象存在全局的Dep.target中*/
                dep.addSub(Dep.target);
            }
        },
        set:newVal=> {
            /*只有之前addSub中的函数才会触发*/
            dep.notify();
        }
    })
}

Dep.target = null;

new Vue({
    template:
        `<div>
            <span>text1:</span> {{text1}}
            <span>text2:</span> {{text2}}
        <div>`,
    data: {
        text1: 'text1',
        text2: 'text2',
        text3: 'text3'
    }
});
