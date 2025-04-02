/**
 * 公共组件导出文件
 */
import IconFont from './IconFont.vue'
import icons from './icons.js'

// 导出组件
export {
  IconFont,
  icons
}

// 注册组件插件
export default {
  install(Vue) {
    Vue.component('IconFont', IconFont)
  }
} 