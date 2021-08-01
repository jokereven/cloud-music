# 13-transform变形

## 1. 什么是变形

![](http://static.zzhitong.com/lesson-files/html/img/14-1.png)

## 2. 2D变形

- rotate

  `transform: rotate(角度值)` 设置元素绕着中心的旋转效果。角度值为正，元素顺时针旋转；角度值为负，元素逆时针旋转。

  ![](http://static.zzhitong.com/lesson-files/html/img/14-2.png)

- translate

  `transform：translate(偏移量1, 偏移量2);` 设置元素以自身初始位置为原点的偏移效果。
  偏移量1:定义元素水平方向的偏移量；可以单独用translateX()来设置。
  偏移量2:定义元素垂直方向的偏移量；可以单独用translateY()来设置。

  ![](http://static.zzhitong.com/lesson-files/html/img/14-3.png)

- scale

  `transform: scale(倍数);` 设置元素的缩放倍数。

  倍数 0~1，元素缩小；

  倍数 >1，元素放大；

  倍数 <0，元素倒置（-1~0 倒置缩小，小于-1 倒置放大）。

  倍数可以设置两个值，分别表示水平方向缩放倍数`scaleX`、垂直方向缩放倍数`scaleY`。

- skew

  `transform: skew(角度);` 设置元素的倾斜角度。

  角度可以设置两个值，分别表示水平方向倾斜角度`skewX`、垂直方向倾斜角度`skewY`。

## 3. 变化原点

每个元素都有一个 `transform-origin`（变化原点）样式，其默认位置正好位于元素的水平中心和垂直中心线的交叉点。默认值为`transform-origin:50% 50%; /*变化原点：水平位置 垂直位置*/`。

可以根据需要自行设置变化的原点位置。例如：

- 设置左顶点为原点 `transform-origin:0 0;`

  ![](http://static.zzhitong.com/lesson-files/html/img/14-4.png)

- 设置元素外的某个点为原点 `transform-origin:-100% -100%;`

  ![](http://static.zzhitong.com/lesson-files/html/img/14-5.png)

## 4. 变换顺序组合

`transform` 可以使用复合写法，比如：`transform: scale(*) translate（*, *）skew(*) rotate(*);`

变化样式内多个样式值顺序的不同会导致完全不一样的结果，比如：`transform:translateX(200px) translateY(200px) rotate(45deg);` 和 `transform:rotate(45deg) translateX(300px)
translateY(200px) ;`效果是不一样的。

- `transform:translateX(200px) translateY(200px) rotate(45deg);`

  ![](http://static.zzhitong.com/lesson-files/html/img/14-6.png)

- `transform:rotate(45deg) translateX(300px)
  translateY(200px) ;`

  ![](http://static.zzhitong.com/lesson-files/html/img/14-7.png)

## 5. 3D变形

X轴：左右方向

Y轴：上下方向

Z轴：垂直于屏幕面的方向

（使用浏览器调试功能查看下列属性对显示效果的影响）

- perspective

  要看到3D的变换效果，必须设置景深 `perspective`属性。接收像素单位的值。

  给进行了3D变形元素的父级添加`perspective`而不是变形元素本身。

- perspective-origin

  设置景深视觉基点，默认在元素中央。

- transform-origin

  如果子元素有多个3D变形效果，需要添加`transform-style: preserve-3d; `属性来显示正确的3D层级。

## √. 作业与练习

- [正方体盒子](http://static.zzhitong.com/lesson-files/html/code/14-1.html)
- [预览-结合JS实现的效果](http://static.zzhitong.com/lesson-files/html/code/14-2.html)
