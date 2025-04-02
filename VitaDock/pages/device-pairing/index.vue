<template>
	<view class="bg-gray-100" style="min-height: 100vh;">
		<!-- 微信小程序顶部状态栏 -->
		<view class="wx-status-bar">
			<view class="flex items-center">
				<text class="ri-arrow-left-s-line mr-2" @click="navigateBack"></text>
				<text class="font-bold">设备配对</text>
			</view>
			<view class="flex items-center">
				<view class="wx-more-btn"></view>
				<view class="wx-close-btn"></view>
			</view>
		</view>

		<!-- 页面内容区域 -->
		<view class="content-area p-4">
			<!-- 配对流程指引 -->
			<view class="bg-white rounded-xl p-5 mb-4 shadow-sm">
				<text class="font-bold text-gray-700 text-center mb-6 block">智能手环配对</text>
				
				<view class="flex justify-center mb-6">
					<view class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center pulse-animation">
						<text class="ri-bluetooth-line text-4xl text-blue-500"></text>
					</view>
				</view>
				
				<text class="text-gray-500 text-center mb-8 block">请确保手环已开机且处于待配对状态</text>
				
				<view class="flex items-center justify-between mb-4">
					<view class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
						<text>1</text>
					</view>
					<view class="flex-1 ml-3">
						<text class="text-sm text-gray-700">开启手机蓝牙</text>
					</view>
					<view class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
						<text class="ri-check-line text-green-500"></text>
					</view>
				</view>
				
				<view class="flex items-center justify-between mb-4">
					<view class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
						<text>2</text>
					</view>
					<view class="flex-1 ml-3">
						<text class="text-sm text-gray-700">搜索附近设备</text>
					</view>
					<view class="w-6 h-6 search-animation">
						<text class="ri-loader-line text-blue-500"></text>
					</view>
				</view>
				
				<view class="flex items-center justify-between">
					<view class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
						<text>3</text>
					</view>
					<view class="flex-1 ml-3">
						<text class="text-sm text-gray-400">完成配对</text>
					</view>
					<view class="w-6 h-6">
						<text class="ri-time-line text-gray-300"></text>
					</view>
				</view>
			</view>
			
			<!-- 搜索结果 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<view class="flex justify-between items-center mb-3">
					<text class="font-medium text-gray-700">搜索到的设备</text>
					<text class="text-xs text-blue-500" @click="refreshDevices">刷新</text>
				</view>
				
				<view class="list-item bg-blue-50 rounded-lg border border-blue-200">
					<view class="list-item-icon">
						<text class="ri-watch-line text-blue-500"></text>
					</view>
					<view class="list-item-title">
						<text class="font-medium text-gray-700">G23健康手环</text>
						<text class="text-xs text-gray-500 block">MAC: 54:AF:97:E2:1B:C8</text>
					</view>
					<button class="text-xs bg-blue-500 text-white px-3 py-1 rounded-full" @click="pairDevice(deviceList[0])">
						配对
					</button>
				</view>
				
				<view class="list-item">
					<view class="list-item-icon">
						<text class="ri-watch-line text-gray-400"></text>
					</view>
					<view class="list-item-title">
						<text class="font-medium text-gray-700">未知设备</text>
						<text class="text-xs text-gray-500 block">MAC: 00:1A:7D:DA:71:15</text>
					</view>
					<button class="text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full" @click="pairDevice(deviceList[1])">
						配对
					</button>
				</view>
			</view>
			
			<!-- 配对提示 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<text class="font-medium text-gray-700 mb-2 block">配对提示</text>
				<view class="text-sm text-gray-500 pl-5 list-disc">
					<view class="mb-1"><text>请确保手环距离手机不超过20厘米</text></view>
					<view class="mb-1"><text>若搜索不到设备，可尝试重启手环</text></view>
					<view class="mb-1"><text>部分手环需长按按钮进入配对模式</text></view>
					<view><text>配对成功后，手环将自动与手机同步时间</text></view>
				</view>
			</view>
			
			<!-- 功能优势卡片 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<text class="font-medium text-gray-700 mb-3 block">配对后可以使用的功能</text>
				
				<view class="flex mb-3">
					<view class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
						<text class="ri-heart-pulse-line text-blue-500"></text>
					</view>
					<view>
						<text class="text-sm font-medium text-gray-700">健康监测</text>
						<text class="text-xs text-gray-500 block">实时监测步数、心率和睡眠质量</text>
					</view>
				</view>
				
				<view class="flex mb-3">
					<view class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
						<text class="ri-notification-line text-green-500"></text>
					</view>
					<view>
						<text class="text-sm font-medium text-gray-700">消息提醒</text>
						<text class="text-xs text-gray-500 block">重要消息振动提醒，不错过工作通知</text>
					</view>
				</view>
				
				<view class="flex">
					<view class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
						<text class="ri-ship-line text-orange-500"></text>
					</view>
					<view>
						<text class="text-sm font-medium text-gray-700">港口工作模式</text>
						<text class="text-xs text-gray-500 block">针对不同工作环境优化手环性能</text>
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
import { icons } from '@/components/common'

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
/* 动画效果 */
@keyframes pulse {
	0% { transform: scale(1); opacity: 1; }
	50% { transform: scale(1.1); opacity: 0.7; }
	100% { transform: scale(1); opacity: 1; }
}
.pulse-animation {
	animation: pulse 2s infinite;
}

@keyframes search {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
.search-animation {
	animation: search 2s linear infinite;
}
</style> 