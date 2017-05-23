
/**
 * 建造者模式
 * 创建一位人类
 * @param {*} param
 */
var Human = function(param) {
  // 技能
  this.skill = param && param.skill || '保密'
  // 兴趣爱好
  this.hobby = param && param.hobby || '保密'
}

// 类人原型方法
Human.prototype = {
  getSkill: function() {
    return this.skill
  },
  getHobby: function() {
    return this.hobby
  }
}

/**
 * 实例化姓名类
 * @param {*} name
 */
var Named = function(name) {
  // 构造函数解析姓名的姓和名
  this.wholeName = name
  if (name.indexOf(' ') > -1) {
    this.FirstName = name.slice(0, name.indexOf(' '))
    this.secondName = name.slice(name.indexOf(' '))
  }
}

/**
 * 实例化职位类
 * @param {*} work
 */
var Work = function(work) {
  switch (work) {
    case 'code':
      this.work = '工程师'
      this.woreDescript = '每天沉醉于编程'
      break;
    case 'UI':
      this.work = '设计师'
      this.woreDescript = '设计更似一种艺术'
      break;
    case 'teach':
      this.work = '教师'
      this.woreDescript = '分享是一种快乐'
      break;
    default:
      this.work = work
      this.woreDescript = '对不起 ，我们还不清楚您所选择职位的相关描述'
      break;
  }
}

// 更换期望的职位
Work.prototype.changeWork = function(work) {
  this.work = work
}

// 添加对职位的描述
Work.prototype.changeDescript = function(setence) {
  this.workDescript = setence
}

/**
 * 应聘者建造者
 * @param {*} name
 * @param {*} work
 */
var Person = function(name, work) {
  var _person = new Human()
  _person.name = new Named(name)
  _person.work = new Work(work)

  return _person
}

var p1 = new Person('xiao ming', 'code')
console.log(p1.skill)
console.log(p1.name.FirstName)
console.log(p1.work.work)
p1.work.changeDescript('更改一下职位描述')
console.log(p1.work.workDescript)
