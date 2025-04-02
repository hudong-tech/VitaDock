<template>
  <view class="tabbar">
    <view 
      class="tabbar-item" 
      v-for="(item, index) in tabs" 
      :key="index"
      @click="switchTab(item.pagePath)"
      :class="{ active: current === index }"
    >
      <icon-font :name="current === index ? item.iconActive : item.icon" :color="current === index ? activeColor : color" size="44" class="tabbar-icon"></icon-font>
      <text class="tabbar-text">{{ item.text }}</text>
    </view>
  </view>
</template>

<script>
import { icons } from '@/components/common'

export default {
  name: 'CustomTabBar',
  data() {
    return {
      current: 0, // 当前选中的tab索引
      color: '#999', // 默认颜色
      activeColor: '#1a5276', // 选中颜色
      tabs: [
        {
          pagePath: '/pages/home/index',
          text: '首页',
          icon: icons.nav.HOME_OUTLINE,
          iconActive: icons.nav.HOME
        },
        {
          pagePath: '/pages/health/index',
          text: '健康',
          icon: icons.health.PULSE,
          iconActive: icons.health.PULSE
        },
        {
          pagePath: '/pages/points/index',
          text: '积分',
          icon: icons.nav.POINTS,
          iconActive: icons.nav.POINTS_FILL
        },
        {
          pagePath: '/pages/settings/index',
          text: '设置',
          icon: icons.nav.SETTINGS,
          iconActive: icons.nav.SETTINGS_FILL
        }
      ]
    }
  },
  created() {
    // 获取当前页面路径，设置当前选中tab
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const currentPath = `/${currentPage.route}`;
    
    this.tabs.forEach((item, index) => {
      if (item.pagePath === currentPath) {
        this.current = index;
      }
    });
  },
  methods: {
    switchTab(path) {
      // 切换页面
      uni.switchTab({
        url: path
      });
      
      // 更新当前选中索引
      this.tabs.forEach((item, index) => {
        if (item.pagePath === path) {
          this.current = index;
        }
      });
    }
  }
}
</script>

<style>
/* 组件自定义样式可以在这里添加或覆盖通用样式 */
</style> 