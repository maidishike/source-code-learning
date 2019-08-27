class Vue {
    constructor(options) {
        this._data = options.data;
        _proxy.call(this, options.data);
        observe(this._data, options.render);
    }
}

let app = new Vue({
    el: '#app',
    data: {
        text: 'text',
        text1: 'text1'
    },
    render() {
        console.log('视图更新了...');
    }
})


app._data.text = 'sdfsdfdfs'
// 此时可以使用_data的属性动态响应数据的目的，但是我们最终需要app.text = 'xxx'来响应
function _proxy (data) {
    let self = this;
    Object.keys(data).forEach(key => {
        Object.defineProperty(self, key, {
            configurable: true,
            enumerable: true,
            get() {
                return self._data[key];
            },
            set(newVal) {
                self._data[key] = newVal;
            }
        })
    });
    
}

app.text = 'sdfsdfdfs'

/**
 * 通过遍历所有属性的方式对该对象的每一个属性
 */
function observe(value, cb) {
    if (!value && typeof value === 'object') return;
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key], cb);
    })
}

/**
 * 定义一个defineReactive方法，通过入参来实现对对象的getter/setter方法的改造
 */
function defineReactive(obj, key, val, cb) {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
            return val
        },
        set(newVal) {
            if (val === newVal) return
            cb(newVal)
        }
    })
}
