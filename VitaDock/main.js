import App from './App'

// 主应用
// #ifndef VUE3
import Vue from 'vue'
import CustomTabBar from './components/business/CustomTabBar.vue'

Vue.config.productionTip = false

// 全局注册CustomTabBar组件
Vue.component('custom-tab-bar', CustomTabBar)

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import CustomTabBar from './components/business/CustomTabBar.vue'

export function createApp() {
  const app = createSSRApp(App)
  
  // 全局注册CustomTabBar组件
  app.component('custom-tab-bar', CustomTabBar)
  
  return {
    app
  }
}
// #endif