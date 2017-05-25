// 外观模式：为一组复杂的子系统接口提供一个更高级的统一接口
// 直接事件用 Onlick 事件写，后面的写法可以覆盖，不安全

function addEvent(dom, type, fn) {
  // 对支持 DOM2 级事件处理程序 addEventListener 方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener(typ, fn, false)
    // 对于不支持 addEventListener 方法但支持 attachEvent 方法的浏览器
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn)
    // 都不支持
  } else {
    dom['on' + type] = fn
  }
}

var myInput = document.getElementById('myinput')

addEvent(myInput, 'click', function () {
  console.log('绑定第一个事件')
})