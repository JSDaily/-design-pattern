/**
 * 2.2 包装明星- 封装
 * （1）.对象有属性__proto__,指向该对象的构造函数的原型对象。
 * （2）.方法除了有属性__proto__,还有属性prototype，prototype指向该方法的原型对象。
*/

// 每次实例对象都会再次创建自身对象的属性
function Book(name, price, number) {
  this.name = name
  this.price = price
  this.number = number
  console.log(this);
  // this.init()
}

// 每个实例对象存放公共的属性和方法
Book.prototype = {
  init: function() {
    console.log('init');
  },
  totalPrice: function() {
    var num = this.price * this.number
    console.log(num)
  }
}

var a = new Book('react', 60 , 2)
var b = new Book('vue', 100 , 2)
a.totalPrice()
b.totalPrice()

/**
 * 2.2.2私有属性
 * 类的静态共有属性（对象不能访问）
 */

function Book(name, price) {
  this.name = name
  this.price = price
}
Book.isChinese = true
var obj = new Book('yui', 123)
obj.isChinese // undefined


/**
 * 2.2.3 用闭关实现类返回
 */

var book = function() {
  var count = 0 // 静态私有属性
  function _book(name, price) {
    this.name = name
    this.price = price
    count ++
  }

  _book.prototype = {
    totalPrice: function() {
      return this.price * 2
    }
  }
  return _book
}

/**
 * 2.3 继承
 */

function SuperClass() {
  this.superValue = true
}

SuperClass.prototype.getSuperValue = function() {
  return this.superValue
}

function SubClass() {
  this.subValue = false
}

SubClass.prototype = new SubClass()
SubClass.prototype.getSubValue = function() {
  return this.subValue
}

var obj = new SubClass()
obj.getSuperValue()
obj.getSubValue()

function Super() {
  this.book = [1, 2, 3, 4]
}

function Sub() {}
Sub.prototype = new Super()
var a = new Sub()
var b = new Sub()
a.book.push(1)
b.book.push(2)
