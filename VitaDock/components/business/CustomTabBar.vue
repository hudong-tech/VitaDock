<template>
  <div class="tabbar">
    <div v-for="(tab, index) in tabs" :key="index" class="tabbar-item" :class="{ active: currentPath === tab.pagePath }" @click="switchTab(tab.pagePath)">
      <img class="tabbar-icon" :src="currentPath === tab.pagePath ? tab.iconActivePath : tab.iconPath" />
      <span>{{ tab.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomTabBar',
  data() {
    return {
      currentPath: '/pages/home/index',
      tabs: [
        {
          pagePath: '/pages/home/index',
          iconPath: '/static/icons/tabbar/home.svg',
          iconActivePath: '/static/icons/tabbar/home-active.svg',
          text: '首页'
        },
        {
          pagePath: '/pages/health/index',
          iconPath: '/static/icons/tabbar/health.svg',
          iconActivePath: '/static/icons/tabbar/health-active.svg',
          text: '健康'
        },
        {
          pagePath: '/pages/points/index',
          iconPath: '/static/icons/tabbar/points.svg',
          iconActivePath: '/static/icons/tabbar/point-active.svg',
          text: '积分'
        },
        {
          pagePath: '/pages/settings/index',
          iconPath: '/static/icons/tabbar/settings.svg',
          iconActivePath: '/static/icons/tabbar/settings-active.svg',
          text: '设置'
        }
      ]
    }
  },
  methods: {
    switchTab(path) {
      if (this.currentPath === path) return
      this.currentPath = path
      uni.switchTab({
        url: path,
        success: () => {
          this.currentPath = path
        }
      })
    }
  },
  created() {
    const pages = getCurrentPages()
    if (pages.length) {
      const currentPage = pages[pages.length - 1]
      this.currentPath = '/' + currentPage.route
    } else {
      this.currentPath = '/pages/home/index'
    }
  }
}
</script>

<style>
@import '@/styles/tabbar.css';

/* 补充tabbar.css中缺少的必要样式 */
.tabbar {
  padding-bottom: env(safe-area-inset-bottom); /* 支持全面屏设备 */
}

.tabbar-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 3px; /* 与tabbar.css保持一致 */
}
</style> 