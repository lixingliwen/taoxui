
import Vue from 'vue';
import App from './App.vue';
//导入iview 组件库
import iview from 'iview';
import 'iview/dist/styles/iview.css';
import "../css/test.css";
//使用vue.use 添加iview插件
Vue.use(iview)

console.log(App)

new Vue({
    el: '#app',
    components:{
        App,
    },
    template: '<App/>'
  })
  
