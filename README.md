MVC应用
（1）Module&controller：创建模块应用&用于定义应用
var app = angular.module('myApp', []);
（2）ng-app&ng-controller：指明应用&指明控制器
ng-init：初始化模型
{{}}：模型表达式
{{::}}:one-time
ng-bind：把变量绑定在内嵌内容innerHtml中。模型表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙，区别写在内容中，写在标签中。
ng-bind-html
ng-model：可以将输入域的值与 AngularJS 创建的变量绑定
scope：用于传递应用的域模型对象，可以为scope创建读取方法
1.作用域
2.根作用域：用 rootscope 定义的值，可以在各个 controller 中使用。
*使用Batarang扩展查看

angular.isObject
1.angular.equals(A,B)：比较的两个对象或值是相同类型的，而且它们所有的属性都是相等的。
2.angular.copy()：
3.angular.extend()：方法可以把一个或多个对象中的方法和属性传到一个目的对象中，使得这个对象拥有其他对象相同的方法和属性，如果想要保存一个对象的状态，除了可以调用angular.copy()方法外，还可以把一个空对象｛｝作为第一个对象传入
4.angular.merge()：把数据传入A对象，和extend的区别就是merge是深拷贝

传参
$emit(name,args)向parent controller传递event与data
$broadcast(name,args向child controller传递event与data
$on(name,handler) 用于接收event与data
在$on的方法中的event事件参数，其对象的属性和方法如下
事件属性	目的
event.targetScope	发出或者传播原始事件的作用域
event.currentScope	目前正在处理的事件的作用域
event.name	事件名称
event.stopPropagation()	一个防止事件进一步传播(冒泡/捕获)的函数(这只适用于使用`$emit`发出的事件)
event.preventDefault()	这个方法实际上不会做什么事，但是会设置`defaultPrevented`为true。直到事件监听器的实现者采取行动之前它才会检查`defaultPrevented`的值。
event.defaultPrevented	如果调用了`preventDefault`则为true


$watch(watchExpression, [listener], [objectEquality])：
监听参数，监听函数(new,old)，相等比较的方式。
多个参数“+”分割。
第三个参数，它在默认情况下是false。 
当第三个参数是false时，其实watch函数监视的是数组的地址，而数组的内容的变化不会影响数组地址的变化，所以watch函数监视的是数组的地址，而数组的内容的变化不会影响数组地址的变化，所以watch函数失灵了。
取消监听var XXX=$watch; XXX();

过滤器filter
1.过滤器可以使用一个管道字符（|）添加到表达式和指令中，用于转换数据
2.
过滤器	描述
currency	格式化数字为货币格式。
filter输入过滤	从数组项中选择一个子集。Filter:模型
lowercase	格式化字符串为小写。
orderBy	根据某个表达式排列数组。orderBy：''
uppercase	格式化字符串为大写。
3.自定义

指令
Select（ng-option创建下拉列表，ng-repeat创建下拉框）
ng-disabled 指令直接绑定应用程序数据到 HTML 的 disabled 属性。
ng-include
ng-repeat：对集合和数组中重复，相当于foreach.
	如果ng-repeat绑定的数组中元素有重复，会报错，可使用track by $index（索引）或者item.id（自己的id号）
	v.value as v.name for v in data
ng-if/ng-show/ng-hide
ng-style
ng-class 指令
1.用于给 HTML 元素动态绑定若干个 CSS 类。ng-hide可以作为css类，
2.方式：字符串，对象，一个数组。
（1）字符串，多个类名使用空格分隔。
（2）对象key-value 对，key 为你想要添加的类名，value 是一个布尔值。只有在 value 为 true 时类才会被添加。
如果是数组，可以由字符串或对象组合组成，数组的元素可以是字符串或对象。
ngModel
$viewValue\$setViewValue()\\
自定义指令
1.angular.module('baymaxEvent').directive(“directiveName”,  directiveFactory)指令名小驼峰，使用名横杆
2.属性
	• restrict：调用指令通过元素名E、属性A、类名C、注释M（须设置replace属性为true）。默认值为 EA。
	• templateUrl/template：对应HTML
	• scope：设置当前指令的作用域。
	1）false(默认值)：使用父作用域 ；
	2）true：创建新作用域，新作用域继承了父作用域；
	3）{}：创建新作用域，新作用域不继承父作用域。=（双向绑定）和@（字符串）和&（方法）。
	指令作用域包含两个部分：指令模板的作用域、指令所在DOM的作用域。
	*多个组件在一个dom中做作用域问题
	• replace：是否使用模板替换原有元素。
	1）false（默认）：模板会被当作子元素插入到调用此指令的元素内部
	2）true：将会用模板替换指令所在的DOM；
	• priority：提示编译器执行的顺序优先级，number（默认为0）
	• link：负责操作DOM元素，是定义指令和作用域连接函数：参数为scope、element、attr、controller
	• compile：用来在link函数运行之前进行一些DOM转化，参数：tElement – 指令绑定的元素、attrs。什么时候使用compile?大多数时候，你仅仅只需要编写link函数。这是因为大部分指令都只关心与注册事件监听器，监视器，更新DOM等等，它们在link函数中即可完成。像是ng-repeat这样的指令，需要多次克隆并重复DOM元素，就需要在link函数运行之前使用compile函数。
	• controller：定义与其他指令进行交互的接口函数，指令控制器函数。参数有$scope,$element, $attrs, $transclude
	• require：需要其他指令的控制器require字段，可为自定义指令或内置指令如ng-model等。设置查找控制器时的行为：
	1）无（默认）：如果在当前指令中没有找到所需要的控制器会报错，传给link函数的第四个参数。
	2）?：如果在当前指令中没有找到所需要的控制器，会将null作为传给link函数的第四个参数。
	3）^：先在当先指令寻找，再向上游的指令链中查找require参数所指定的控制器，传给link函数的第四个参数。
	4）^^:先向上游寻找
	5）?^：可选择地加载需要的指令并在父指令链中进行查找。
	• transclude/嵌入：
	1）false（默认）
	2）true：是否嵌入
	3）object：被嵌入内容，需要和ngTransclude指令一起使用，ng-transclude指令所在元素的内容会被指令内容替代，并且此时指令内容受指令外部的作用域控制。？修饰模板可不存在。
	• terminal：Boolean,//（布尔型），true或false,如果为false,则这个参数用来告诉AngularJS停止运行当前元素上比本指令优先级低的指令。优先级相同的指令还是会被执行。
自定义组件Component
	1. 属性
	• templateUrl/template
	• bindings：相当于scope
	• require
	• transclude
	• controller

Angular服务
1.服务是一个函数或对象，可在你的 AngularJS 应用中使用。
2.$location：返回当前页面的 URL 地址
 	window.location	$location.service
目的	允许对当前浏览器位置进行读写操作	允许对当前浏览器位置进行读写操作
API	暴露一个能被读写的对象	暴露jquery风格的读写器
是否在AngularJS应用生命周期中和应用整合	否	可获取到应用生命周期内的每一个阶段，并且和$watch整合
是否和HTML5 API的无缝整合	否	是（对低级浏览器优雅降级）
和应用的上下文是否相关	否，window.location.path返回"/docroot/actual/path"	是，$location.path()返回"/actual/path"
$http：服务向服务器发送请求，应用响应服务器传送过来的数据 方法：Method(get/post)参数：url其他}ajax：url、其他、method
$timeout
$interval：var a = $interval(function(){}，间隔时间，次数).then()   clearInterval(a)
$rootScope：根作用域：用 rootscope 定义的值，可以在各个 controller 中使用。
$emit只能向parent controller传递event与data
$broadcast只能向child controller传递event与data
$on用于接收event与data
$q 异步同步处理
（1）$q.deffer()使用：deferred.notify、Deffer.resolve&deffer.reject、Deffer.promise、Promise.then/catch/finally  
（2）$q.all使用：
$q.when一个 Promise 就是一个代表了异步操作最终完成或者失败的对象
异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了

Angular路由
uiRouter
是基于state的，可嵌套的。
	1. $urlRouterProvider 服务提供者，用来配置路由重定向
	2. $stateProvider 服务提供者，用来配置路由:
	$stateProvider.state(''-指定父子关系,{url（/:name）,templateUrl,controller,params,onEnter,onExit})
	3. $state服务：用来显示当前路由状态信息
	方法：go(id,params)、reload()、get()
	属性：current、params
	事件：$stateChangeError、 $stateChangeStart、$stateChangeSuccess、 $stateNotFound
	4. ui-view指令：路由模板渲染，对应的 dom 相关联
	5. ui-sref指令：点击跳转,ui-sref不支持动态绑定
	1.ui-sref="#state-id({name1: value1, name2: value2})"
	2.route设置state添加params: {time: ':time', name: ':name'},
	3.controller接收：注入$stateParams，$scope.name1 = $stateParams.name1;
ngRoute
	1. $routeProvider服务提供者：
	2. $route服务
	3. ng-view、ng-href指令
module.config(['$routeProvider', function($routeProvider){    
	$routeProvider
	.when(url,{
        template:string, //在ng-view中插入简单的html内容
        templateUrl:string, //在ng-view中插入html模版文件
        controller:string,function / array, //在当前模版上执行的controller函数
        controllerAs:string, //为controller指定别名
       redirectTo:string,function, //重定向的地址
       resolve:object<key,function> //指定当前controller所依赖的其他模块
     });
	 .otherwise({redirectTo:'/'});
}]);

AngularJS 动画
需要引入 angular-animate.min.js 库，还需在应用中使用模型 ngAnimate。
<element ng-switch="expression">
  <element ng-switch-when="value"></element>
  <element ng-switch-default></element>
</element>

ng-model 指令也可以：
为应用程序数据提供类型验证（number、email、required）。
为应用程序数据提供状态（invalid、dirty、touched、error）。
为 HTML 元素提供 CSS 类required
ng-model 指令根据表单域的状态添加/移除以下类：
ng-empty
ng-not-empty
ng-touched
ng-untouched
ng-valid
ng-invalid
ng-dirty
ng-pending
ng-pristine
绑定 HTML 元素到 HTML 表单。

命名方式
1.小驼峰
2.驼峰
3.横杠

1.Angular社区
Puls.goole.com/u/0/communities/11536882070087033075
www.angularjs.org
Buildwith.angularjs.org
Batarang

滚屏加载：ng-infiniteScroll
