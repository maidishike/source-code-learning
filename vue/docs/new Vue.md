### new Vue发生了什么
![image](https://image-static.segmentfault.com/281/898/2818982161-5b63ba1e4092b)

看下源码，==src/core/instance/index.js==


```
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  /*初始化*/
  this._init(options)
}
```