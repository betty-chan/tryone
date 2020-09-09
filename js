数据类型
1.原始：数字、布尔、字符串、Symbol、undefined、null
2.引用：Object、数组、Date、RegExp、Math、JSON、Function、Map、Set
*弱数据类型的，typeof查看
*!a：可以判断a为null\undefined\空字符串\false\数字0
*小心下面的, 可都返回 true:'字符串'0'、[] 空数组、{} 空对象
*Set：序列
*Map：类对象，区别在于键支持非字符串

数字
parseInt()：转换成整数
isNaN()：是否非数字
isFinite() ：是否是有穷数，Infinity/-Infinity

字符串
1.split()分割
2.join：数组和字符串间转换。
遍历数组和对象
3.indexof：是否含有某字符串，ndexOf方法返回一个整数值,stringObject中的字符位置是从0开始的。如果没有找到子字符串，则返回 -1
4.正则表达式
5.substr
6.replace(regexp/substr,replacement)
7.trim()去除首位两端空格
8.parseInt()：返回整数
localeCompare:排序

数组
1.操作
indexof：是否含有某值
push
splice(开始位置，数量) ：方法用于插入、删除或替换数组的元素。注意：这种方法会改变原始数组！位置-1倒数1
slice：剪切
reverse() 方法用于颠倒数组中元素的顺序
unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
Array.isArray()：判断是否是数组
数组判空：Array.length
数组去重
判等，复制
toString
forEach(item)
map(function)
filter(function):filter的callback函数需要返回布尔值true或false
Some(function)
Every(function)
for i in arry:i作为key
不要在 Array 上使用 for-in 循环
for-in 循环只用于 object/map/hash 的遍历, 对 Array 用 for-in 循环有时会出错. 因为它并不是从 0 到 length - 1 进行遍历, 而是所有出现在对象及其原型链的键值。

函数=》对象
1.函数定义方式：一般定义，表达式定义/箭头函数（函数不会被提升）
2.函数自动调用：定以后使用()执行
3.JavaScript函数有一个名为arguments对象的内置对象，arguments.length
箭头功能没有自己的功能this。它们不适合定义对象方法。
参数通过值传递
函数调用中的参数是函数的参数。

JavaScript参数按值传递：函数只能知道值，而不是参数的位置。

如果函数更改参数的值，则不会更改参数的原始值。

参数的更改在函数外部不可见（反映）。

对象通过引用传递
在JavaScript中，对象引用是值。
this在函数中使用时，值是“拥有”函数的对象

对象
1.操作
Delete object[item]
add：使用框架方法
判空
判断是否对象
判断是否有某属性item in object
Copy，判等
JSON.stringify(result) != "{}"
Object.keys(obj).length==0判断值是否为空
2.遍历
for in
Object.keys(obj).forEach(function(key){});
defineProperty

常用
Date
1.组成
时区：UTC时间和LT、getTimezoneOffset()
时间格式：YYYY-MM-DD、number/unix(utc)、ISO（z为utc，±）
2.方法
Date.parse()：返回时间戳
REG
test()方法搜索字符串指定的值，根据结果并返回真或假。
exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
JSON
JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。
Math
Math.random()：0-1之间的随机数
Math.round()：四舍五入
Math.ceil()：向上取整
Math.floor()：向下取整
WebSocket
1.创建：new WebSocket(url, [protocol] );//protocol可接受的子协议
2.对象属性：
readyState：连接状态
bufferedAmount
3.对象方法
send()
close()
4.事件
onopen
onmessage
onerror
onclose

ES6
1.let和const
2.结构赋值
3.箭头函数
4.扩展运算符
5.异步方案
6.模块系统

闭包：通过作用域链可以访问外部局部变量的特殊函数
对象：Object.assign,Object.keys()
数组：for...in循环出的是key，for...of循环出的是value（新）

严格模式
"use strict"

this指向
1.默认undefined
2.指向被调用的上一级对象
3.this碰到return，返回对象时this指向返回对象
4.改变this指向，call（多参数并执行）、apply（数组参数并执行）、bind（返回方法）

对象
1.原型/类：prototype/class（constructor、方法、属性）
2.创建实例：new XXX()
3.继承/原型链：extends和__proto__

运行机制
事件循环
主任务/回调任务
执行过程：语法分析阶段、预编译阶段、执行阶段

模块系统
1.ES6规范
export：导入时要加{ }，export default则不需要，as关键字重命名
export default：导出不可修改，一个文件只有一个
Import
2.commonJS规范
module.exports = { //在这里写上需要向外暴露的函数、变量
  add: add,
  basicNum: basicNum
}
// 引用自定义的模块时，参数包含路径，可省略.js
var math = require('./math');
math.add(2, 5);
// 引用核心模块时，不需要带路径
var http = require('http');
3.AMD规范

异步方案
Callback
Promise
Generator：*function.next()、yield 
Async/await:await会暂停当前async方法的执行，await会阻塞代码的执行，直到await后的表达式处理完成，代码才能继续往下执行。
DOM
节点
clientWidth：是可视区的宽度
offsetWidth：是元素的实际宽度
scrollWidth：是实际内容的宽度
.parent()：父元素
find()	返回被选元素的后代元素
children()返回被选元素的子元素
事件
Show/hide,
On/off
addEventListener()
one
1.event
preventDefault阻止默认事件
$event.stopPropagation()：阻止冒泡事件
compositionEvent
MouseEvent 接口指用户与指针设备( 如鼠标 )交互时发生的事件。使用此接口的常见事件包括：
click，dblclick
mouseup，mousedown,
mouseenter，mouseleave，mousemove，mouseover，mouseout
MouseEvent对象
1.鼠标 / 键盘属性：
（1）clientX/Y：返回当事件被触发时，鼠标指针的浏览器视口左上角为基点的垂直坐标。
（2）pageX/Y：返回当事件被触发时，鼠标指针的以整个渲染页面的左上角为基点的垂直坐标。
（3）screenX/Y：返回当事件被触发时，鼠标指针的以整个屏幕的左边缘为基点的垂直坐标。
2.offset()偏移量
offset意为偏移量，是被点击的元素距左上角为参考原点的长度
scrollTo
scrollTop
scrollLeft
onload 和 onunload 事件

拖拽原理
1.mousedown：起始位置
2.$document：
（1）mousemove：当前位置clientXY-起始位置clientXY
（2）mouseup：$(document).off();
文档操作
appendTo()	向目标结尾插入匹配元素集合中的每个元素。
clone()	创建匹配元素集合的副本。
detach()	从 DOM 中移除匹配元素集合。
hasClass()	检查匹配的元素是否拥有指定的类。
insertAfter()	把匹配的元素插入到另一个指定的元素集合的后面。
insertBefore()	把匹配的元素插入到另一个指定的元素集合的前面。
prependTo()	向目标开头插入匹配元素集合中的每个元素。
removeAttr()	从所有匹配的元素中移除指定的属性。
replaceAll()	用匹配的元素替换所有匹配到的元素。
replaceWith()	用新内容替换匹配的元素。
unwrap()	移除并替换指定元素的父元素。
wrap()	把匹配的元素用指定的内容或元素包裹起来。
wrapAll()	把所有匹配的元素用指定的内容或元素包裹起来。
wrapinner()	将每一个匹配的元素的子内容用指定的内容或元素包裹起来。

*css的left和top属性指的是距最近的一个position属性为relative或者absolute的父级元素的左边后上边的距离。position()：返回相对父元素的top和left像素值，与css('top')返回的是字符串

offset()
返回第一个匹配元素相对于文档的位置。
offsetParent()
返回最近的定位祖先元素。
scrollLeft()
设置或返回匹配元素相对滚动条左侧的偏移。
scrollTop()
设置或返回匹配元素相对滚动条顶部的偏移。

BOM
window
        1. window.open(url,_blank)
        window.onbeforeunload
        2. history
        history.back() - 与在浏览器点击后退按钮相同
        history.forward() - 与在浏览器中点击向前按钮相同
        3. location
document
title：页签标题
cookie
创建修改：document.cookie="username=John Doe";
读取：var x = document.cookie;
删除：document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
路径：document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
querySelector():查找选择器
localStorage/sessionStorage
创建修改：localStorage.setItem('courseinfo', JSON.stringify(course));
读取：JSON.parse(localStorage.getItem('courseinfo'));
删除：localStorage.removeItem
清除：localStorage.clear();
浏览器兼容
严格模式"use strict"
IE兼容
1.多余逗号会报错
2.时间new Date不支持yyyy-MM-DD,支持yyyy/MM/DD
3.ico格式不兼容
4.ES6不兼容

错误笔记
	1. return：退出当前函数空间
	2. 参数传递
	3. ||设置默认值
	4. get和post方法：get方法参数会有问题如&
	5. 面对对象编程思想
	6. 提交参数如果为空默认为null
	7. 修改要考虑判断参数的时效性
	8. 方法调用后赋值或打印，等于return的值
	9.${XX}的正则是\$\{[^\}]+\}，正则不正确用不了

表单
1.页面校验（focus、blur、tip、长度限制）
2.提交校验

类数组对象
1.有length属性，其它属性为非负整数
2.不具有数组方法
转换Array.prototype.slice.call()

获取字节长度
function getLength(str) {
	str = str || "";
	var realLength = 0, len = str.length, charCode = -1;
	for (var i = 0; i < len; i++) {
		charCode = str.charCodeAt(i);
		if (charCode >= 0 && charCode <= 128)
			realLength += 1;
		else
			realLength += 3;
	}
	return realLength;
}

拓展库：Lodash(_)、Jquery（$）
框架库
