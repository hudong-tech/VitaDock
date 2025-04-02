<template>
  <i :class="iconClass" :style="computedStyle"></i>
</template>

<script>
/**
 * 通用图标组件
 * 
 * 使用方法：
 * <icon-font name="home-4-fill" size="24" color="#1a5276" />
 */
export default {
  name: 'IconFont',
  props: {
    // 图标名称，参考 Remix Icon 命名，不需要前缀 ri-
    name: {
      type: String,
      required: true
    },
    // 图标大小，单位为 rpx
    size: {
      type: [Number, String],
      default: 24
    },
    // 图标颜色
    color: {
      type: String,
      default: ''
    },
    // 自定义 class
    customClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      // 组合图标的class
      return [
        'ri-' + this.name,
        this.customClass
      ]
    },
    computedStyle() {
      // 设置图标大小和颜色
      const style = {}
      if (this.size) {
        style.fontSize = `${this.size}rpx`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  }
}
</script>

<style>
/* 确保已引入 remixicon 样式，如果没有则在App.vue或单独的文件中引入 */
/* 也可以在这里直接引入CDN链接或本地样式 */
</style> 