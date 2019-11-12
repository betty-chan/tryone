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
