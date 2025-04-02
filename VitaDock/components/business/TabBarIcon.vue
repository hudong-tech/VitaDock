<template>
  <view class="tab-icon-container">
    <icon-font :name="iconName" :color="color" :size="size"></icon-font>
  </view>
</template>

<script>
import { icons } from '@/components/common'

/**
 * 底部导航栏图标组件
 * 用于在原生tabBar不支持iconfont的情况下，创建自定义tab图标
 */
export default {
  name: 'TabBarIcon',
  props: {
    // 图标类型: home, health, points, settings
    type: {
      type: String,
      required: true
    },
    // 是否处于激活状态
    active: {
      type: Boolean,
      default: false
    },
    // 图标大小
    size: {
      type: [Number, String],
      default: 40
    }
  },
  computed: {
    iconName() {
      // 根据类型和状态返回对应的图标名称
      const iconMap = {
        home: this.active ? icons.nav.HOME : icons.nav.HOME_OUTLINE,
        health: this.active ? icons.health.PULSE : icons.health.PULSE,
        points: this.active ? icons.nav.POINTS_FILL : icons.nav.POINTS,
        settings: this.active ? icons.nav.SETTINGS_FILL : icons.nav.SETTINGS
      }
      return iconMap[this.type] || icons.nav.HOME
    },
    color() {
      // 激活状态的颜色
      return this.active ? '#1a5276' : '#999'
    }
  }
}
</script>

<style scoped>
.tab-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style> 