### `初识JavaScript`

#### `变量`

```js
// JavaScript变量
// 变量  可以变化的值
// 变量的作用: 保存数据值
// 1. var 变量名 = 具体的值
// 声明时直接赋值
// 2. var 变量名
// 变量名 = 具体的值
// 先声明, 后赋值
```

```js
var name = '我爱罗';
var name;
name = '我爱罗';
```

#### `命名规范`

```js
// 1. 可以包含字母[a-z && A-Z]，数字[0-9]，下划线_，$
// 2. 不能以汉字，数字，标点符号开头
// 3. 有明确的含义(要自己和别人都看得懂)

// 常规命名法
// 匈牙利命名法，下划线命名法，小驼峰命名法，大驼峰命名法
var username = 'code520';
var user_name = 'code520';
var userName = 'code520';
var UserName = 'code520';

// 个人推荐  下划线命名法
```

#### `输出方式`

```js
// 弹框
alert()

// 确认弹框
confirm("你快乐吗?");

var val = confirm("你快乐吗?");
alert(val);
// 点击确定，就是true
// 点击取消，就是false

var txt = prompt("What Is You Name?");
alert(txt);

点击确定，txt就是手动输入在输入框内部的值
点击取消，返回null

console系列 文档输出  数据类型
```

#### `书写与注释`

```html
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>初始JavaScript</title>
		<link rel="stylesheet" href="" />
		<style src=""></style>
		<style>
			/* css */
		</style>
		<javascript>
			<!-- js -->
		</javascript>
	</head>
	<body>
		<script>
			console.log('初识JavaScript');
			// 注释
			//
			/*  */
		</script>
	</body>
</html>
```
