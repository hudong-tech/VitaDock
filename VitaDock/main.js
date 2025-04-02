import App from './App'

// 主应用
// #ifndef VUE3
import Vue from 'vue'
import commonComponents from './components/common'

// 引入Remix Icon图标
import 'remixicon/fonts/remixicon.css'

// 注册公共组件
Vue.use(commonComponents)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import commonComponents from './components/common'

export function createApp() {
  const app = createSSRApp(App)
  
  // 注册公共组件
  app.use(commonComponents)
  
  return {
    app
  }
}
// #endif