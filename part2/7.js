/**
 * 原型模式
 * 图片轮播类
 * @param {*} imgArr 轮播图片数组
 * @param {*} container 轮播图片容器
 */
var LoopImages = function (imgArr, container) {
  this.imagesArray = imgArr
  this.container = container
}

LoopImages.prototype = {
  createImage: function () {
    console.log('创建轮播图片')
  },
  changeImage: function() {
    console.log('切换下一张图片')
  }
}

// 上下滑动切换类
var SlideLoopImg = function (imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container)
}
SlideLoopImg.prototype = new LoopImages()

SlideLoopImg.prototype.changeImage = function() {
  console.log('重写切换下一张图片')
}

// 实例化一个上下滑动
var slideImg = new SlideLoopImg([
  '0.1.jpg',
  '0.2.jpg',
  '0.3.jpg',
  '0.4.jpg',
], 'slide', [
  'left.jpg',
  'right.jpg'
])

console.log(slideImg.container)
slideImg.changeImage()