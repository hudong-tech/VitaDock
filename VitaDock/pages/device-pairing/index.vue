<template>
  <view class="device-pairing-container">
    <view class="page-title">设备配对</view>
    <view class="content-placeholder">设备配对页面开发中...</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '设备配对'
    }
  },
  onLoad() {
    console.log('设备配对页面加载')
  },
  methods: {
    
  }
}
</script>

<style>
.device-pairing-container {
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