Vue
<template></template>
<script></script>
<style></style>

实例
new Vue({ //  创建一个 Vue 的根实例
  el: '#app', // 绑定id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
  router, //  注入路由配置
  store, // 注入
  template: '<App/>',  // 配置根模板 即打开页面显示那个组件
  components: {
    App  //  注入组件
  }
});

Component
1.全局组件/局部组件
Vue.component('my-component', {
template:,
data: function(){},
})
2.模板
文本{{}}
v-html
v-if/else
v-show
v-for
v-on: XXX，缩写@
v-bind：XXX(HTML属性值)，缩写:
3.Prop
prop是父组件用来传递数据的一个自定义属性。
自定义事件
父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！
我们可以使用 v-on 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件

指令

Route
配置
Path
Name
Component
[children]
<router-view></router-view>

插件
vue-element
vue-touch

vuex

JSX
1.插入数组，自动展示所有成员
2.{}
3.自定义属性添加data-*
4.{/*注释...*/}
5.使用JSX声明<script type="text/babel"> 
6.内联样式自动添加px

组件
1.Render
2.constructor
3.Props
getDefaultProps():为 props 设置默认值
PropTypes()：Props 验证
setProps
replaceProps
ref
4.State
getInitialState
setState：修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
replaceState
5.其它
forceUpdate
findDOMNode
isMounted：判断组件是否已挂载到DOM中

生命周期
组件的生命周期可分成三个状态：
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM
生命周期的方法有：
componentWillMount 在渲染前调用,在客户端也在服务端。
componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。
componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。

Redux
createStore(
reducer,//state 的计算方法
applyMiddleware()//中间件
)
store.getState()
store.dispatch()
store.subscribe():

常用中间件

其他
React Native (简称RN)是Facebook开源的跨平台移动应用开发框架
通信方式
1.父组件通过props向子组件传递
2.DeviceEventEmitter
