教程被分为 Bootstrap 基本结构、Bootstrap CSS、Bootstrap 布局组件和 Bootstrap 插件几个部分。
移动设备优先：自 Bootstrap 3 起，框架包含了贯穿于整个库的移动设备优先的样式。
浏览器支持：所有的主流浏览器都支持 Bootstrap。
Internet Explorer Firefox Opera Google Chrome Safari
容易上手：只要您具备 HTML 和 CSS 的基础知识，您就可以开始学习 Bootstrap。
响应式设计：Bootstrap 的响应式 CSS 能够自适应于台式机、平板电脑和手机。更多有关响应式设计的内容详见 Bootstrap 响应式设计。
响应式设计
它为开发人员创建接口提供了一个简洁统一的解决方案。
它包含了功能强大的内置组件，易于定制。
它还提供了基于 Web 的定制。
它是开源的。

基本结构：Bootstrap 提供了一个带有网格系统、链接样式、背景的基本结构。这将在 Bootstrap 基本结构 部分详细讲解。
CSS：Bootstrap 自带以下特性：全局的 CSS 设置、定义基本的 HTML 元素样式、可扩展的 class，以及一个先进的网格系统。这将在 Bootstrap CSS 部分详细讲解。
组件：Bootstrap 包含了十几个可重用的组件，用于创建图像、下拉菜单、导航、警告框、弹出框等等。这将在 布局组件 部分详细讲解。
JavaScript 插件：Bootstrap 包含了十几个自定义的 jQuery 插件。您可以直接包含所有的插件，也可以逐个包含这些插件。这将在 Bootstrap 插件 部分详细讲解。
定制：您可以定制 Bootstrap 的组件、LESS 变量和 jQuery 插件来得到您自己的版本。
(Bootstrap 的 JavaScript 插件需要引入 jQuery)

为了让 Bootstrap 开发的网站对移动设备友好，确保适当的绘制和触屏缩放，需要在网页的 head 之中添加 viewport meta 标签，如下所示：
<meta name="viewport" content="width=device-width, initial-scale=1.0">


 img-responsive class

对浏览器版本要求高


网格系统
BootStrap3

内容：什么是最重要的
布局：优先最小宽度
渐进增强

响应式网格系统随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。

Bootstrap 网格系统（Grid System）的工作原理
网格系统通过一系列包含内容的行和列来创建页面布局。下面列出了 Bootstrap 网格系统是如何工作的：
行必须放置在 .container class 内，以便获得适当的对齐（alignment）和内边距（padding）。
使用行来创建列的水平组。
内容应该放置在列内，且唯有列可以是行的直接子元素。
预定义的网格类，比如 .row 和 .col-xs-4，可用于快速创建网格布局。LESS 混合类可用于更多语义布局。
列通过内边距（padding）来创建列内容之间的间隙。该内边距是通过 .rows 上的外边距（margin）取负，表示第一列和最后一列的行偏移。
网格系统是通过指定您想要横跨的十二个可用的列来创建的。例如，要创建三个相等的列，则使用三个 .col-xs-4。


多设备
1.小，大手机
2.小，大电脑
Xs\sm\md\lg
超小、小、中、大

响应式布局/格子布局/表格布局
<div class="container"></div>
row
Col-size-*;*数字代表所占列宽，最大12

响应式图像：<img src="..." class="img-responsive">

class可以添加多个内容

响应式的列重置-响应式实时工具、偏移列、嵌套列、列排序


Bootstrap css
1.btn/btn-block
预定义按钮颜色：btn-primary,btn-info，btn-danger
2.text-primary，text-danger

FontAwesome图库：矢量图形

i指代图标

页面设计

