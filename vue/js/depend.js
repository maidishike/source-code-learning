class Dep {
    // 用来存放Watcher的数组
    constructor() {
        this.subs = []
    }

    // 将Watcher添加到subs中
    addSub (sub) {
        this.subs.push(sub)
    }

    // 通知Watcher更新视图
    notify () {
        let subs = this.subs.slice();
        console.log(subs)
        subs.forEach(sub => {
            sub.update();
        })
    }
}

class Watcher {
    constructor(vm, expOrFn, cb, options) {
        this.cb = cb;
        this.vm = vm;
        Dep.target = this;
        console.log(Dep.target)
        this.cb.call(this.vm);
    }

    update () {
        console.log(`update: 视图更新了...`);
        this.cb.call(this.vm);
    }
}


class Vue {
    constructor(options) {
        this._data = options.data;
        _proxy.call(this, options.data);
        observe(this._data, options.render);
        new Watcher(this, undefined, options.render, undefined);
        // console.log(this._data.text1)
    }
}

let app = new Vue({
    el: '#app',
    template: `<div>
        <span>{{text1}}</span>
        <span>{{text2}}</span>
    </div>`,
    data: {
        text1: 'text1',
        text2: 'text2',
        text3: 'text3'
    },
    render () {
        console.log('render: 视图更新了...')
    }
})

// 此时可以使用_data的属性动态响应数据的目的，但是我们最终需要app.text = 'xxx'来响应
function _proxy (data) {
    let self = this
    Object.keys(data).forEach(key => {
        Object.defineProperty(self, key, {
            configurable: true,
            enumerable: true,
            get () {
                return self._data[key]
            },
            set (newVal) {
                self._data[key] = newVal
            }
        })
    })
}

/**
 * 通过遍历所有属性的方式对该对象的每一个属性
 */
function observe (value, cb) {
    if (!value && typeof value !== 'object') return
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key], cb)
    })
    Dep.target = null
}

/**
 * 定义一个defineReactive方法，通过入参来实现对对象的getter/setter方法的改造
 * 依赖收集的重点
 */
function defineReactive (obj, key, val, cb) {
    let dep = new Dep()
    // console.log(dep)
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get () {
            console.log(Dep.target)
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            console.log(dep)
            return val
        },
        set (newVal) {
            if (newVal === val) return
            val = newVal
            dep.notify()
        }
    })
}



app.text1 // 出发get方法
app.text2
app.text2 = 1 // 出发set方法
console.log(app)