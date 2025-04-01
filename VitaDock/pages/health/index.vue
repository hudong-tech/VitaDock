<template>
  <view class="health-container">
    <view class="page-title">健康数据</view>
    <view class="content-placeholder">健康数据页面开发中...</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '健康数据'
    }
  },
  onLoad() {
    console.log('健康数据页面加载')
  },
  methods: {
    
  }
}
</script>

<style>
.health-container {
  padding: 30rpx;
}
.page-title {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}
.content-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300rpx;
  background-color: #f5f5f5;
  border-radius: 12rpx;
  color: #999;
}
</style> 