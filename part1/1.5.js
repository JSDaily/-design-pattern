// (1) js创建对象的几种方式 工厂模式、构造函数模式、原型模式 /////
/**
 * 1.工厂模式缺点：没有解决识别对象的问题
 * @param {*} name
 * @param {*} age
 */
function createUser(name, age) {
  var obj = new Object()
  obj.name = name
  obj.age = age
  return  obj
}

var user1 = createUser('leon', 24)

/**
 * (2). 构造函数与工厂模式相比： 没有 return 对象语句，直接讲对象属性赋值给 this，没有显式的创建对象
 * 缺点：每个方法都要在每个实例上重新创建一遍
 * @param {*} name
 * @param {*} age
 */
function(name, age) {
  this.name = name
  this.age = age
  // 这边的 sayName的函数设为全局变量，因为每个实例调用构造函数的方法，方法都会重新创建一边
  this.sayName = sayName
}

// 但函数暴露在全局又不安全，故有了原型
function sayName () {
  console.log(this.name)
}

var user2 = new CreateUser('kevin', 25)
var user3 = new CreateUser('leon', 25)
user2.sayName()
user3.sayName()

/**
 *  (3)原型模式
 *  理解模型，首先声明创建一个构造函数，
 *  每个构造函数都有 prototype 属性，这个属性包含一个指向prototype属性所在函数的指针。
 *
 */
function CreateUser() {}
CreateUser.prototype = {
  name: 'leon',
  age: 24
}

var user1 = new CreateUser()
user1.name = 'kevin'

/**
 * (4)构造函数和原型组合模式 ：
 * 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享属性
 * @param {*} name
 * @param {*} age
 */
function CreateUser(name, age) {
  this.name = name
  this.age = age
}

CreateUser.prototype = {
  sayName: function() {
    console.log(this.name)
  }
}

var user1 = new CreateUser('kevin', 76)
var user2 = new CreateUser('leon', 26)


/**
 * 1.1函数也是变量
 * 会暴露在全局，不利于团队之间开发要避免覆盖
 */
function checkPhone() {}

/**
 * 1.3用对象收编变量
 */
var CheckObj = {
  checkName: function() {
    console.log('name')
  },
  checkPhone: function() {
    console.log('phone')
  }
}
CheckObj.checkName()
// var a = new CheckObj // 报错： CheckObj is not a constructor new 对象只能是构造函数生成

/**
 * 1.4对象的另一种形式
 * JavaScript 中函数也是对象
 */
var CheckObj = function() {}
CheckObj.checkName = function() {}
CheckObj.checkPhone = function() {}

/**
 * 1.5真假对象
 */
var CheckObj = function() {
  return {
    name: 'leon',
    age: 22
  }
}

var obj = new CheckObj() // 每次调用都是都是 return 出来新的对象实例

