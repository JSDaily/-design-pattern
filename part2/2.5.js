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
 * 2.3.1 子类的原型继承-- 类式继承
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

SubClass.prototype = new SuperClass()
SubClass.prototype.getSubValue = function() {
  return this.subValue
}

var obj = new SubClass()
obj.getSuperValue() // true
obj.getSubValue() // false

/*****/
function Super() {
  this.book = [1, 2, 3, 4]
}

function Sub() {}
Sub.prototype = new Super()
var a = new Sub()
var b = new Sub()
a.book.push(1)
b.book.push(2)


/**
 * 2.3.2 创建及继承，构造函数继承
 */

function SuperClass(id) {
  this.book = [1,2,3,4]
  this.id = id
}

SubClass.prototype.showBook = function() {
  console.log(this.book)
}

function SubClass(id) {
  SuperClass.call(this, id)// call() 构造函数继承
}

var obj = new SubClass()
obj.showBook()

/**
 * 2.3.3 组合式继承
 */

function SuperClass(name) {
  this.name = name
  this.book = [1, 2, 3, 4]
}

SuperClass.prototype.getName = function() {
  console.log(this.name)
}

function SubClass(name, time) {
  SuperClass.call(this, name)
  this.time = time
}

SubClass.prototype = new SuperClass()
SubClass.prototype.getTime = function() {
  console.log(this.time)
}

var obj = new SubClass('javascript', 2016)
obj.getTime()

/**
 * 2.3.4 原型式继承
 */
function inheritObj(obj) {
  function F() {}
  F.prototype = obj
  return  new F()
}

var book = {
  name : 'ajax',
  price: 123,
  arr: [1, 2, 3]
}

var book1 = new inheritObj(book)
book1.price = 456
book1.arr.push(4)
console.log(book1.name)

var book2 = new inheritObj(book)
console.log(book2.arr)

/**
 * 2.3.5 寄生式继承
 */

// SuperClass : 父类
// SubClass : 子类
function inheritPrototype(SubClass, SuperClass) {

}
