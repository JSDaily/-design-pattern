/**
 * 1.6 类也可以这样写
 */
var CheckObj = function() {
  this.checkName = function() {}
  this.checkPhone = function() {}
}

var obj = new CheckObj()
obj.checkName()

/**
 * 1.7 一个检测类
 */
var CheckObj = function() {}

// 原型下公共的属性和函数
CheckObj.prototype = {
  checkName: function() {console.log(2)}, // 检测姓名
  checkPhone: function() {} // 检测手机
}

var obj = new CheckObj()
obj.checkName()

/**
 * 1.8.1 对象链式函数写法
 */
var User = {
  sayName: function() {
    console.log('my name is kevin')
    return this // return 返回当前的对象
  },
  sayAge: function() {
    console.log('my age is 444')
    return this
  }
}

User.sayName().sayAge()


/**
 * 1.8.2 原型的链式函数写法
 */
function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype = {
  sayName: function() {
    console.log('my name is kevin')
    return this // return 返回当前的对象
  },
  sayAge: function() {
    console.log('my age is 444')
    return this
  }
}

var kevin = new User()
kevin.sayAge().sayName()

/**
 * 1.9函数的祖先
 * Function() 是个系统自带的构造函数，对象
 */

Function.prototype.addMethod = function(name, fn) {
  this[name] = fn
}

var obj = new Function()
obj.addMethod('checkName', function() {
  console.log('name')
})

obj.checkName()


/**
 * 1.10.0
 * 链式函数写法
 */
Function.prototype.addMethod = function(name, fn) {
  this[name] = fn
  return this
}

var obj = new Function()
obj.addMethod('checkName', function() {
  console.log('name')
  return this
}).addMethod('checkPhone', function() {
  console.log('phone');
  return this
})

obj.checkName().checkPhone()

/**
 * 1.11 换一种方式使用方法
 * 正式用过总不能总调用 Function()
 */

Function.prototype.addMethod = function(name, fn) {
  this.prototype[name] = fn
  console.log(this.prototype)
  return this
}

var obj = new Function()
obj.addMethod('checkName', function() {
  console.log('name')
})

obj.checkName()



