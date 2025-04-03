<template>
  <view class="health-container">
    <view class="page-title">健康数据</view>
    
    <view class="data-section">
      <view class="section-header">
        <text class="section-title">每日活动状态</text>
        <view class="date-selector">
          <icon-font :name="icons.other.ARROW_LEFT" color="#999" size="36"></icon-font>
          <text class="date-text">今日</text>
          <icon-font :name="icons.other.ARROW_RIGHT" color="#999" size="36"></icon-font>
        </view>
      </view>
      
      <view class="data-cards">
        <view class="data-card">
          <view class="card-icon bg-blue-100">
            <icon-font :name="icons.health.STEPS" color="#3b82f6" size="44"></icon-font>
          </view>
          <view class="card-data">
            <text class="data-value">8,734</text>
            <text class="data-label">步数</text>
          </view>
        </view>
        
        <view class="data-card">
          <view class="card-icon bg-red-100">
            <icon-font :name="icons.health.HEART" color="#ef4444" size="44"></icon-font>
          </view>
          <view class="card-data">
            <text class="data-value">42</text>
            <text class="data-label">活动分钟</text>
          </view>
        </view>
        
        <view class="data-card">
          <view class="card-icon bg-green-100">
            <icon-font :name="icons.health.ENERGY" color="#10b981" size="44"></icon-font>
          </view>
          <view class="card-data">
            <text class="data-value">347</text>
            <text class="data-label">卡路里</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="data-section">
      <view class="section-header">
        <text class="section-title">肩部活动数据</text>
      </view>
      
      <!-- 使用dashboard样式 -->
      <view class="flex justify-between">
        <view class="dashboard-container">
          <view class="dashboard-outer dashboard-goal">
            <view class="dashboard-progress"></view>
            <view class="dashboard-inner">
              <text class="dashboard-value">78°</text>
              <text class="dashboard-label">活动角度</text>
            </view>
          </view>
        </view>
        
        <view class="dashboard-container">
          <view class="dashboard-outer dashboard-heart">
            <view class="dashboard-progress"></view>
            <view class="dashboard-inner">
              <text class="dashboard-value">42分</text>
              <text class="dashboard-label">锻炼时间</text>
            </view>
          </view>
        </view>
        
        <view class="dashboard-container">
          <view class="dashboard-outer dashboard-stand">
            <view class="dashboard-progress"></view>
            <view class="dashboard-inner">
              <text class="dashboard-value">92%</text>
              <text class="dashboard-label">恢复进度</text>
            </view>
          </view>
        </view>
      </view>
      
      <view class="shoulder-data">
        <view class="data-item">
          <text class="data-label">平均活动角度</text>
          <text class="data-value highlight">78°</text>
        </view>
        
        <view class="data-item">
          <text class="data-label">肩部锻炼时间</text>
          <text class="data-value highlight">42分钟</text>
        </view>
        
        <view class="data-item">
          <text class="data-label">康复进度</text>
          <text class="data-value highlight">92%</text>
        </view>
      </view>
    </view>
    
    <view class="data-section">
      <view class="section-header">
        <text class="section-title">近期锻炼记录</text>
        <text class="view-more">查看更多</text>
      </view>
      
      <view class="exercise-record">
        <view class="record-item">
          <view class="record-icon">
            <icon-font :name="icons.health.ACTIVITY" color="#1a5276" size="44"></icon-font>
          </view>
          <view class="record-info">
            <text class="record-title">仰卧木棒肩屈训练</text>
            <text class="record-time">今天 08:20-08:45</text>
          </view>
          <view class="record-stats">
            <text class="record-duration">25分钟</text>
            <text class="record-intensity">中等强度</text>
          </view>
        </view>
        
        <view class="record-item">
          <view class="record-icon">
            <icon-font :name="icons.health.ACTIVITY" color="#1a5276" size="44"></icon-font>
          </view>
          <view class="record-info">
            <text class="record-title">俯卧Y字伸展</text>
            <text class="record-time">今天 13:10-13:35</text>
          </view>
          <view class="record-stats">
            <text class="record-duration">25分钟</text>
            <text class="record-intensity">低强度</text>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 自定义底部导航栏 -->
    <custom-tab-bar></custom-tab-bar>
  </view>
</template>

<script>
import CustomTabBar from '@/components/business/CustomTabBar.vue'

export default {
  components: {
    CustomTabBar
  },
  data() {
    return {
      icons,
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
  padding-bottom: 120rpx;
  background-color: #f5f8fa;
  min-height: 100vh;
}

.page-title {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 30rpx;
}

.data-section {
  margin-bottom: 30rpx;
  background-color: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
}

.section-title {
  font-size: 30rpx;
  font-weight: 500;
  color: #333;
}

.date-selector {
  display: flex;
  align-items: center;
}

.date-text {
  margin: 0 10rpx;
  font-size: 26rpx;
  color: #666;
}

.view-more {
  font-size: 26rpx;
  color: #1a5276;
}

.data-cards {
  display: flex;
  justify-content: space-between;
}

.data-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rpx 10rpx;
}

.card-icon {
  width: 90rpx;
  height: 90rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 10rpx;
}

.bg-blue-100 {
  background-color: #e6f2ff;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.bg-green-100 {
  background-color: #d1fae5;
}

.card-data {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.data-value {
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
}

.data-label {
  font-size: 24rpx;
  color: #999;
  margin-top: 5rpx;
}

.shoulder-data {
  display: flex;
  justify-content: space-between;
}

.data-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rpx 10rpx;
}

.highlight {
  font-size: 34rpx;
  font-weight: 600;
  color: #1a5276;
}

.exercise-record {
  margin-top: 10rpx;
}

.record-item {
  display: flex;
  align-items: center;
  padding: 15rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
}

.record-item:last-child {
  border-bottom: none;
}

.record-icon {
  width: 80rpx;
  height: 80rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f9ff;
  border-radius: 10rpx;
}

.record-info {
  flex: 1;
  margin-left: 20rpx;
}

.record-title {
  font-size: 28rpx;
  color: #333;
}

.record-time {
  font-size: 24rpx;
  color: #999;
  margin-top: 5rpx;
}

.record-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.record-duration {
  font-size: 28rpx;
  color: #333;
  font-weight: 500;
}

.record-intensity {
  font-size: 24rpx;
  color: #999;
  margin-top: 5rpx;
}
</style> 