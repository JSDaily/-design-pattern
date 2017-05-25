// 单例模式，只允许实例化一次对象类。 命名空间：Jquery.animate())

var Ming = {
  g: function (id) {
    return document.getElementById(id)
  },
  css: function (id, key, value) {
    this.g(id).style[key] = value
  }
}


// 惰性单例
var LazySingle = (function () {
  // 单例实例引用
  var _instance = null
  // 单例
  function Single() {
    /** 这里定义私有属性和方法 */
    return {
      publicMethod: function () {},
      publicProperty: '1.0'
    }
  }

  // 获取单例对象接口
  return function () {
    // 如果未创建单例将创建单例
    if (!_instance) {
      _instance = Single()
    }
    // 返回单例
    return _instance
  }
})()

console.log(LazySingle().publicProperty)