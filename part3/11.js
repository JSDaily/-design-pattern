// 装饰者模式： 在不改变原对象的基础上，通过对弈进行包装扩展（添加属性或者方法）使原有对象可以满足用户的更复杂需求
// 案例1：点击各种输入框，提示不同条件的提示文案

var decorator = function (input, fn) {
  var input = document.getElementById(input)

  // 若事件源已经绑定时间
  if (typeof input.onclick === 'function') {
    // 缓存事件源原有回调函数
    var oldClick = input.onclick
    input.onclick = function () {
      oldClick()
      // 事件源新增回调函数
      fn()
    }
  } else {
    input.onclick = fn
  }
}

decorator('tel_input', function () {
  document.getElementById('tel_info').style.display = 'block'
})