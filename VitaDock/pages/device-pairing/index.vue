<template>
	<view style="background-color: #f3f4f6; min-height: 100vh;">

		<!-- 页面内容区域 -->
		<view class="content-area p-4">
			<!-- 配对流程指引 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<text class="text-center block" style="font-size: 18px; color: #333; margin-bottom: 16px;">智能手环配对</text>
				
				<view class="flex justify-center" style="margin-bottom: 16px;">
					<view class="rounded-full bg-blue-100 flex items-center justify-center pulse-animation" style="width: 100px; height: 100px;">
						<image src="/static/icons/pairing/bluetooth-blue.svg" style="width: 40px; height: 40px;" mode="aspectFit"></image>
					</view>
				</view>
				
				<text class="text-gray-500 text-center block" style="margin-bottom: 16px;">请确保手环已开机且处于待配对状态</text>
				
				<view style="margin-bottom: 16px;">
					<view class="flex" style="align-items: center;">
						<view style="width: 30px; height: 30px; background-color: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
							<text style="color: white; font-size: 16px;">1</text>
						</view>
						<view style="margin-left: 12px; flex-grow: 1;">
							<text style="color: #333;">开启手机蓝牙</text>
						</view>
						<view style="width: 24px; height: 24px; background-color: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
							<image src="/static/icons/pairing/check.svg" style="width: 14px; height: 14px;" mode="aspectFit"></image>
						</view>
					</view>
				</view>
				
				<view style="margin-bottom: 16px;">
					<view class="flex" style="align-items: center;">
						<view style="width: 30px; height: 30px; background-color: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
							<text style="color: white; font-size: 16px;">2</text>
						</view>
						<view style="margin-left: 12px; flex-grow: 1;">
							<text style="color: #333;">搜索附近设备</text>
						</view>
						<view style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
							<image src="/static/icons/pairing/loader.svg" style="width: 18px; height: 18px;" class="rotating-icon" mode="aspectFit"></image>
						</view>
					</view>
				</view>
				
				<view>
					<view class="flex" style="align-items: center;">
						<view style="width: 30px; height: 30px; background-color: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; opacity: 0.6;">
							<text style="color: white; font-size: 16px;">3</text>
						</view>
						<view style="margin-left: 12px; flex-grow: 1;">
							<text style="color: #9ca3af;">完成配对</text>
						</view>
						<view style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
							<image src="/static/icons/pairing/time.svg" style="width: 16px; height: 16px;" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 搜索结果 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="flex justify-between items-center mb-3">
					<h3 class="font text-gray-700 mb-2">搜索到的设备</h3>
					<text style="font-size: 14px; color: #3b82f6;" @click="refreshDevices">刷新</text>
				</view>
				
				<view class="device-item" style="background-color: #EBF8FF; border-radius: 8px; padding: 14px; margin-bottom: 10px; display: flex; align-items: center;">
					<view style="flex: 1;">
						<text style="font-size: 16px; color: #333; display: block; margin-bottom: 4px;">G23健康手环</text>
						<text style="font-size: 12px; color: #666; display: block;">MAC: 54:AF:97:E2:1B:C8</text>
					</view>
					<button style="background-color: #3b82f6; color: white; font-size: 14px; border-radius: 20px; padding: 6px 16px; border: none;" @click="pairDevice(deviceList[0])">
						配对
					</button>
				</view>
				
				<view class="device-item" style="background-color: #F3F4F6; border-radius: 8px; padding: 14px; display: flex; align-items: center;">
					<view style="flex: 1;">
						<text style="font-size: 16px; color: #333; display: block; margin-bottom: 4px;">未知设备</text>
						<text style="font-size: 12px; color: #666; display: block;">MAC: 00:1A:7D:DA:71:15</text>
					</view>
					<button style="background-color: #E5E7EB; color: #666; font-size: 14px; border-radius: 20px; padding: 6px 16px; border: none;" @click="pairDevice(deviceList[1])">
						配对
					</button>
				</view>
			</view>
			
			<!-- 配对提示 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<h3 class="font text-gray-700 mb-3">配对提示</h3>
				<view class="pairing-tips">
					<view class="tip-item"><text>请确保手环距离手机不超过20厘米</text></view>
					<view class="tip-item"><text>若搜索不到设备，可尝试重启手环</text></view>
					<view class="tip-item"><text>部分手环需长按按钮进入配对模式</text></view>
					<view class="tip-item"><text>配对成功后，手环将自动与手机同步时间</text></view>
				</view>
			</view>
			
			<!-- 功能优势卡片 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<h3 class="font text-gray-700 mb-3">配对后可以使用的功能</h3>
				
				<view class="flex mb-3">
					<view style="width: 40px; height: 40px; border-radius: 50%; background-color: #dbeafe; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
						<image src="/static/icons/pairing/heart-pulse.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
					</view>
					<view>
						<text class="text-sm font text-gray-700" style="display: block; margin-bottom: 2px;">健康监测</text>
						<text class="text-xs text-gray-500" style="display: block;">实时监测步数、心率和睡眠质量</text>
					</view>
				</view>
				
				<view class="flex mb-3">
					<view style="width: 40px; height: 40px; border-radius: 50%; background-color: #dcfce7; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
						<image src="/static/icons/pairing/notification.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
					</view>
					<view>
						<text class="text-sm font text-gray-700" style="display: block; margin-bottom: 2px;">消息提醒</text>
						<text class="text-xs text-gray-500" style="display: block;">重要消息振动提醒，不错过工作通知</text>
					</view>
				</view>
				
				<view class="flex">
					<view style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
						<image src="/static/icons/pairing/ship.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
					</view>
					<view>
						<text class="text-sm font text-gray-700" style="display: block; margin-bottom: 2px;">港口工作模式</text>
						<text class="text-xs text-gray-500" style="display: block;">针对不同工作环境优化手环性能</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部按钮 -->
		<view class="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200" style="height: 50px; display:flex; align-items:center; justify-content:center;">
			<view class="port-button block w-full text-center" @click="navigateToSettings">
				返回设置
			</view>
		</view>
	</view>
</template>

<script>
import { icons } from '@/components/common/index/index.js'

export default {
	data() {
		return {
			icons,
			deviceList: [
				{
					name: 'G23健康手环',
					mac: '54:AF:97:E2:1B:C8',
					selected: true,
					paired: false
				},
				{
					name: '未知设备',
					mac: '00:1A:7D:DA:71:15',
					selected: false,
					paired: false
				}
			],
			searching: true
		}
	},
	onLoad() {
		console.log('设备配对页面加载')
		// 模拟设备搜索
		setTimeout(() => {
			this.searching = false
		}, 3000)
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		navigateToSettings() {
			uni.navigateTo({
				url: '/pages/settings/index'
			});
		},
		refreshDevices() {
			// 显示刷新提示
			uni.showToast({
				title: '刷新设备列表中...',
				icon: 'loading',
				duration: 2000
			});
			
			// 模拟刷新过程
			setTimeout(() => {
				uni.showToast({
					title: '已刷新',
					icon: 'success',
					duration: 1000
				});
			}, 2000);
		},
		pairDevice(device) {
			// 显示配对中提示
			uni.showLoading({
				title: '配对中...'
			});
			
			// 模拟配对过程
			setTimeout(() => {
				uni.hideLoading();
				device.paired = true;
				
				uni.showToast({
					title: '配对成功',
					icon: 'success',
					duration: 1500
				});
				
				// 存储已配对状态
				uni.setStorageSync('deviceConnected', true);
				
				// 延迟后返回首页
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/home/index'
					});
				}, 1500);
			}, 2000);
		}
	}
}
</script>

<style>
/* 加强呼吸动画效果 */
@keyframes pulse {
	0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
	50% { transform: scale(1.05); opacity: 0.8; box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
	100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}
.pulse-animation {
	animation: pulse 2s infinite ease-in-out;
}

/* 旋转动画 */
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
.rotating-icon {
	animation: rotate 1.5s linear infinite;
}

/* 设备列表样式 */
.list-item {
	display: flex;
	align-items: center;
	padding: 12px;
	border-radius: 8px;
	margin-bottom: 10px;
}
.list-item-icon {
	margin-right: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.list-item-title {
	flex: 1;
}

/* 卡片样式 */
.data-card {
  margin-bottom: 16px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

/* 设备项样式 */
.device-item {
  margin-bottom: 10px;
}
.device-item:last-child {
  margin-bottom: 0;
}

/* 配对提示样式 */
.pairing-tips {
  padding-left: 12px;
}

.tip-item {
  position: relative;
  padding-left: 12px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.tip-item:last-child {
  margin-bottom: 0;
}

.tip-item:before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 4px;
  height: 4px;
  background-color: #666;
  border-radius: 50%;
}
</style> 