// 桥接模式：在系统沿着多个维度变化的同时，又不增加其复杂程序并已达成解耦。

// 案例1：每个 dom 绑定一个同样的事件，进行桥接

function changeColor(dom, cr, bg) {
  dom.style.color = cr
  dom.style.background = bg
}

var span = document.getElementsByTagName('span')

span[0].onmouseover = function() {
  changeColor(this, 'red', 'black')
}

span[0].onmouseout = function() {
  changeColor(this, 'yellow', 'white')
}

// 案例2：多元化对象

/**
 * 多维变量类
 * @param {any} x 运动单位
 * @param {any} y 运动单位
 */
function Speed(x, y) {
  this.x = x
  this.y = y
}

Speed.prototype.run = function (params) {
  console.log('运动起来')
}

/**
 * 找色单位
 * @param {any} cl
 */
function Color(cl) {
  this.color = cl
}

Color.prototype.draw = function() {
  console.log('绘制色彩')
}

/**
 * 变形单位
 * @param {any} sp
 */
function Shape(sp) {
  this.shape = sp
}

Shape.prototype.change = function() {
  console.log('改变形状')
}

/**
 * 说话单位
 * @param {any} wd
 */
function Speek(wd) {
  this.word = wd
}

Speek.prototype.say = function() {
  console.log('书写字体')
}


/**
 * 新建一个球类
 * @param {any} x 运动单位
 * @param {any} y 运动单位
 * @param {any} c 着色单位
 */
function Ball(x, y, c) {
  this.speed = new Speed(x, y)
  this.color = new Color(c)
}

Ball.prototype.init = function() {
  this.speed.run()
  this.color.draw()
}

var football = new Ball(102, 204, 'red')
football.init()