import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import LyTab from 'ly-tab';
Vue.use(LyTab);

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

// 导入路由模块
import router from "./router/router.js"

// 引入状态管理store模块
import store from "./store/index"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
