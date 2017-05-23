/**
 *  抽象工厂模式
 */
var VehicleFactory = function(subType, superType) {
  // 判断抽象工厂模式是否该抽象类
  if (typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {}
    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]()
    // 将子类 constructor 指向子类
    subType.constructor = subType
    // 子类原型继承 ‘父类’
    subType.prototype = new F()
  } else {
    throw new Error('未创建抽象类')
  }
}

VehicleFactory.Car = function() {
  this.type = 'car'
}

VehicleFactory.Car.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function() {
    return new Error('抽象方法不能调用')
  }
}

/**
 * 宝马汽车子类
 * @param {*} price
 * @param {*} speed
 */
var BMW = function(price, speed) {
  this.price = price
  this.speed = speed
}

// 抽象工厂实现对 Car 抽象类的继承
VehicleFactory(BMW, 'Car')
BMW.prototype.getPrice = function() {
  return this.price
}

var oneBMW = new BMW(11, 22)