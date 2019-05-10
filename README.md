a
锚点< a href="" name="" id=""></a>

Input
1.Type：button、check、
radio(靠name分组) value
2.disable/readonly：只读
3.maxlength：字符长度限制
4.autocomplete="off"：不显示输入的历史记录
autocomplete 属性有可能在 form元素中是开启的，而在input元素中是关闭的

Select：option: value

Textarea
1.大小固定：resize:none
2.maxlength：字符长度限制

Button 
按钮默认提交，type="button"可以解决

Table
使用：<table><tr><td></td></tr></table>
属性：border：给表格及单元格加边框，属性值可以是1、2、3......
width: 设置整个表格的宽
height：设置整个表格的高
border-spacing:0;控制单元格之间的空白为0
border-collapse:collapse; 设置各单元格边宽以及外边宽重叠；
cellpadding：设置内容与边框的距离
合并单元格的问题：colspan 跨行合并、rowspan 跨列合并

Iframe
字符表
画布
1.找到canvas
2.创建图形对象getContext
3.绘制图像
moveTo(0, 0);
lineTo
fillStyle
fillRect
arc(95, 50, 40, 0, 2 * Math.PI)
fillText
strokeText
drawImage

多媒体
<video> 标签
属性
值
描述
autoplay
autoplay
如果出现该属性，则视频在就绪后马上播放。
controls
controls
如果出现该属性，则向用户显示控件，比如播放按钮。
height
pixels
设置视频播放器的高度。
loop
loop
如果出现该属性，则当媒介文件完成播放后再次开始播放。
preload
preload
如果出现该属性，则视频在页面加载时进行加载，并预备播放。
如果使用 "autoplay"，则忽略该属性。
src
url
要播放的视频的 URL。
width
pixels
设置视频播放器的宽度。
<audio> 标签的属性
属性
值
描述
autoplay
autoplay
如果出现该属性，则音频在就绪后马上播放。
controls
controls
如果出现该属性，则向用户显示控件，比如播放按钮。
loop
loop
如果出现该属性，则每当音频结束时重新开始播放。
preload
preload
如果出现该属性，则音频在页面加载时进行加载，并预备播放。
如果使用 "autoplay"，则忽略该属性。
src
url
要播放的音频的 URL。

HTML5声明：<!DOCTYPE html>
<meta charset="utf-8">
datalist：自动完成下拉列表

 邮件HTML
1.使用table布局
