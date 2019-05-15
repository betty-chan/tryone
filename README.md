数据类型
1.原始：数字、布尔、字符串、undefined、null
2.对象：数组、Date、RegExp、Math、JSON、Function
*弱数据类型的，typeof查看
!a：可以判断a为null\undefined\空字符串\false\数字0
但小心下面的, 可都返回 true:'字符串'0'、[] 空数组、{} 空对象

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
2.遍历
for i in arry:i作为key
forEach(item):item作为value
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

常用
Date
1.组成
时区：UTC时间和LT、getTimezoneOffset()
时间格式：YYYY-MM-DD(null)、number/unix(utc)、ISO（z为utc，±）、Format自定义
语言环境字符串toLocaleString()
3.方法
get,set,to,
Valueof
Date.parse()：返回时间戳
Date().getTimezoneOffset()
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
ES6
闭包：是可以访问外部局部变量的特殊函数
对象：Object.assign,Object.keys()
数组：for...in循环出的是key，for...of循环出的是value（新）
this
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

MouseEvent 接口指用户与指针设备( 如鼠标 )交互时发生的事件。使用此接口的常见事件包括：
click，dblclick
mouseup，mousedown,
mouseenter，mouseleave
mousemove
mouseover，mouseout
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
1.实时更新原来的位置
2.
css(现在位置-原来位置)
position() 方法返回匹配元素相对于父元素的位置

input事件
Focus/blur
change（没有事件对象）

文档操作
appendTo()方法在被选元素的结尾（仍然在内部）插入指定内容。
addClass()	向匹配的元素添加指定的类名。
after()	在匹配的元素之后插入内容。
append()	向匹配元素集合中的每个元素结尾插入由参数指定的内容。
appendTo()	向目标结尾插入匹配元素集合中的每个元素。
attr()	设置或返回匹配元素的属性和值。
before()	在每个匹配的元素之前插入内容。
clone()	创建匹配元素集合的副本。
detach()	从 DOM 中移除匹配元素集合。
empty()	删除匹配的元素集合中所有的子节点。
hasClass()	检查匹配的元素是否拥有指定的类。
html()	设置或返回匹配的元素集合中的 HTML 内容。
insertAfter()	把匹配的元素插入到另一个指定的元素集合的后面。
insertBefore()	把匹配的元素插入到另一个指定的元素集合的前面。
prepend()	向匹配元素集合中的每个元素开头插入由参数指定的内容。
prependTo()	向目标开头插入匹配元素集合中的每个元素。
remove()	移除所有匹配的元素。
removeAttr()	从所有匹配的元素中移除指定的属性。
removeClass()	从所有匹配的元素中删除全部或者指定的类。
replaceAll()	用匹配的元素替换所有匹配到的元素。
replaceWith()	用新内容替换匹配的元素。
text()	设置或返回匹配元素的内容。
toggleClass()	从匹配的元素中添加或删除一个类。
unwrap()	移除并替换指定元素的父元素。
val()	设置或返回匹配元素的值。
wrap()	把匹配的元素用指定的内容或元素包裹起来。
wrapAll()	把所有匹配的元素用指定的内容或元素包裹起来。
wrapinner()	将每一个匹配的元素的子内容用指定的内容或元素包裹起来。
addClass()	向匹配的元素添加指定的类名。
attr()	设置或返回匹配元素的属性和值。
hasClass()	检查匹配的元素是否拥有指定的类。
html()	设置或返回匹配的元素集合中的 HTML 内容。
toggleClass()	从匹配的元素中添加或删除一个类。
val()	设置或返回匹配元素的值。
css操作
addClass() - 向被选元素添加一个或多个类
removeClass() - 从被选元素删除一个或多个类
toggleClass() - 对被选元素进行添加/删除类的切换操作
css() - 设置或返回样式属性
（1）css的left和top属性指的是距最近的一个position属性为relative或者absolute的父级元素的左边后上边的距离
position()：返回相对父元素的top和left像素值，与css('top')返回的是字符串

css()
设置或返回匹配元素的样式属性。
height()
设置或返回匹配元素的高度。
width()
设置或返回匹配元素的宽度。
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
Cookie
创建修改：document.cookie="username=John Doe";
读取：var x = document.cookie;
删除：document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
路径：document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
localStorage/sessionStorage
创建修改：localStorage.setItem('courseinfo', JSON.stringify(course));
读取：JSON.parse(localStorage.getItem('courseinfo'));
删除：localStorage.removeItem
清除：localStorage.clear();
严格模式
"use strict"
浏览器兼容
IE兼容
1.多余逗号会报错
2.时间new Date不支持yyyy-MM-DD,支持yyyy/MM/DD
错误笔记
1.return：退出当前函数空间
2.||设置默认值
3.get和post方法：get方法参数会有问题如&
