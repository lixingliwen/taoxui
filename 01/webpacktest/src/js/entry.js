import "../css/test.css";
// import ' ./node_modules/vue-loader/lib/plugin.js';
import Vue from 'vue';
import App from './App.vue';

console.log(App)

new Vue({
    el: '#app',
    components:{
        App
    },
    template: '<App/>'
  })
  
