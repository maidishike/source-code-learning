/**
 * 单体模式 - 单例模式的定义是产生一个类的唯一实例
 */
var singleton = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    }
}

var createMask = singleton(function() {
    return document.body.appendChild(document.createElement('div'));
});
createMask();
createMask();
createMask();
