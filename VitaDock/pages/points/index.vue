<template>
  <view class="points-container">
    <view class="user-points-card">
      <view class="points-title">我的积分</view>
      <view class="points-value">5,280</view>
      <view class="points-tip">完成肩部恢复训练可获取更多积分</view>
    </view>
    
    <view class="exchange-section">
      <view class="section-title">积分兑换</view>
      
      <view class="exchange-items">
        <view class="exchange-item">
          <view class="item-image">
            <icon-font :name="icons.health.HEART" color="#ef4444" size="60"></icon-font>
          </view>
          <view class="item-info">
            <text class="item-name">肩部理疗服务</text>
            <text class="item-desc">专业理疗师提供30分钟肩部按摩</text>
            <view class="item-points">
              <icon-font :name="icons.nav.POINTS" color="#f59e0b" size="32"></icon-font>
              <text>2,000积分</text>
            </view>
          </view>
          <button class="exchange-btn">兑换</button>
        </view>
        
        <view class="exchange-item">
          <view class="item-image">
            <icon-font :name="icons.other.MEDAL" color="#3b82f6" size="60"></icon-font>
          </view>
          <view class="item-info">
            <text class="item-name">工作环境评估</text>
            <text class="item-desc">专业人员评估工作环境并提供改进建议</text>
            <view class="item-points">
              <icon-font :name="icons.nav.POINTS" color="#f59e0b" size="32"></icon-font>
              <text>3,500积分</text>
            </view>
          </view>
          <button class="exchange-btn">兑换</button>
        </view>
        
        <view class="exchange-item">
          <view class="item-image">
            <icon-font :name="icons.health.MUSCLE" color="#10b981" size="60"></icon-font>
          </view>
          <view class="item-info">
            <text class="item-name">高级康复训练课程</text>
            <text class="item-desc">专业康复师指导的肩部训练课程（5节）</text>
            <view class="item-points">
              <icon-font :name="icons.nav.POINTS" color="#f59e0b" size="32"></icon-font>
              <text>5,000积分</text>
            </view>
          </view>
          <button class="exchange-btn disabled">积分不足</button>
        </view>
      </view>
    </view>
    
    <view class="points-rules">
      <view class="rules-title">
        <icon-font :name="icons.other.INFO" color="#1a5276" size="36"></icon-font>
        <text>积分规则</text>
      </view>
      
      <view class="rules-list">
        <view class="rule-item">
          <text class="rule-text">每完成1分钟肩部康复训练 = 10积分</text>
        </view>
        <view class="rule-item">
          <text class="rule-text">连续7天完成训练目标 = 额外200积分</text>
        </view>
        <view class="rule-item">
          <text class="rule-text">肩部活动角度每提升5° = 100积分</text>
        </view>
      </view>
    </view>
    
    <!-- 自定义底部导航栏 -->
    <custom-tab-bar></custom-tab-bar>
  </view>
</template>

<script>
import { icons } from '@/components/common'
import CustomTabBar from '@/components/business/CustomTabBar.vue'

export default {
  components: {
    CustomTabBar
  },
  data() {
    return {
      icons,
      title: '积分兑换'
    }
  },
  onLoad() {
    console.log('积分兑换页面加载')
  },
  methods: {
    
  }
}
</script>

<style>
.points-container {
  padding: 30rpx;
  padding-bottom: 120rpx;
  background-color: #f5f8fa;
  min-height: 100vh;
}

.user-points-card {
  background-color: #1a5276;
  padding: 40rpx 30rpx;
  border-radius: 16rpx;
  color: white;
  margin-bottom: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(26, 82, 118, 0.3);
  text-align: center;
}

.points-title {
  font-size: 28rpx;
  opacity: 0.9;
}

.points-value {
  font-size: 80rpx;
  font-weight: 700;
  margin: 10rpx 0;
}

.points-tip {
  font-size: 24rpx;
  opacity: 0.8;
}

.exchange-section {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
}

.section-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 20rpx;
}

.exchange-items {
  
}

.exchange-item {
  display: flex;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
}

.exchange-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 120rpx;
  height: 120rpx;
  background-color: #f5f8fa;
  border-radius: 12rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-info {
  flex: 1;
  padding: 0 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-name {
  font-size: 28rpx;
  font-weight: 500;
  color: #333;
}

.item-desc {
  font-size: 24rpx;
  color: #999;
  margin: 8rpx 0;
}

.item-points {
  display: flex;
  align-items: center;
}

.item-points text {
  font-size: 26rpx;
  color: #f59e0b;
  margin-left: 8rpx;
  font-weight: 500;
}

.exchange-btn {
  width: 120rpx;
  height: 60rpx;
  background-color: #1a5276;
  color: white;
  font-size: 24rpx;
  border-radius: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.exchange-btn.disabled {
  background-color: #ccc;
}

.points-rules {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
}

.rules-title {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}

.rules-title text {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-left: 10rpx;
}

.rules-list {
  
}

.rule-item {
  padding: 12rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
}

.rule-item:last-child {
  border-bottom: none;
}

.rule-text {
  font-size: 26rpx;
  color: #666;
}
</style> 