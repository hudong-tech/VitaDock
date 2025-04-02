<template>
	<view class="bg-gray-100" style="min-height: 100vh;">
		<!-- 微信小程序顶部状态栏 -->
		<view class="wx-status-bar">
			<view class="flex items-center">
				<text class="font-bold">设置</text>
			</view>
			<view class="flex items-center">
				<view class="wx-more-btn"></view>
				<view class="wx-close-btn"></view>
			</view>
		</view>

		<!-- 页面内容区域 -->
		<view class="content-area p-4">
			<!-- 用户信息 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<view class="flex items-center">
					<view class="port-avatar mr-4">
						<view class="port-avatar-crane"></view>
						<view class="port-avatar-ship"></view>
						<view class="port-avatar-content">张</view>
					</view>
					<view>
						<text class="font-bold text-gray-700 block">港口调度员</text>
						<text class="text-xs text-gray-500 mt-1 block">ID: 2024056789</text>
						<view class="flex items-center mt-1">
							<text class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">专业版用户</text>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 设备连接状态 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<view class="flex justify-between items-center">
					<view class="flex items-center">
						<view class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
							<text class="ri-bluetooth-line text-green-500"></text>
						</view>
						<view>
							<text class="font-medium text-gray-700 block">智能手环</text>
							<text class="text-xs text-green-500 block">已连接 - G23健康手环</text>
						</view>
					</view>
					<text class="text-sm text-blue-500" @click="navigateToDevicePairing">
						重新配对
					</text>
				</view>
				<view class="mt-3 pt-3 border-t border-gray-100">
					<view class="flex justify-between text-sm">
						<text class="text-gray-500">电池电量: <text class="text-gray-700 font-bold">87%</text></text>
						<text class="text-gray-500">固件版本: <text class="text-gray-700 font-bold">v2.1.4</text></text>
					</view>
				</view>
			</view>
			
			<!-- 手环设置 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<text class="font-bold text-gray-700 mb-3 block">手环设置</text>
				
				<!-- 亮度调节 -->
				<view class="settings-item">
					<view class="settings-item-left">
						<text class="ri-sun-line settings-icon"></text>
						<text class="text-gray-700">屏幕亮度</text>
					</view>
					<view class="w-32">
						<slider min="1" max="5" value="4" class="slider" />
					</view>
				</view>
				
				<!-- 震动强度 -->
				<view class="settings-item">
					<view class="settings-item-left">
						<text class="ri-vibrate-line settings-icon"></text>
						<text class="text-gray-700">震动强度</text>
					</view>
					<view class="w-32">
						<slider min="1" max="5" value="3" class="slider" />
					</view>
				</view>
				
				<!-- 勿扰模式 -->
				<view class="settings-item">
					<view class="settings-item-left">
						<text class="ri-moon-line settings-icon"></text>
						<text class="text-gray-700">勿扰模式</text>
					</view>
					<view class="toggle">
						<switch color="#1a5276" />
					</view>
				</view>
				
				<!-- 表盘选择 -->
				<view class="settings-item">
					<view class="settings-item-left">
						<text class="ri-watch-line settings-icon"></text>
						<text class="text-gray-700">表盘样式</text>
					</view>
					<view class="flex items-center text-blue-500 text-sm">
						<text>港口主题</text>
						<text class="ri-arrow-right-s-line ml-1"></text>
					</view>
				</view>
			</view>
			
			<!-- 工作环境模式 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<text class="font-bold text-gray-700 mb-3 block">工作环境模式</text>
				
				<view class="flex justify-between">
					<view class="text-center w-1/3">
						<view class="mode-icon mx-auto">
							<text class="ri-volume-up-line"></text>
						</view>
						<text class="text-xs text-gray-500 block">高噪音环境</text>
						<text class="text-xs text-gray-500 mt-1 block">增强震动提醒</text>
					</view>
					<view class="text-center w-1/3">
						<view class="mode-icon active mx-auto">
							<text class="ri-sun-line text-white"></text>
						</view>
						<text class="text-xs font-medium text-gray-700 block">强光环境</text>
						<text class="text-xs text-gray-500 mt-1 block">最高屏幕亮度</text>
					</view>
					<view class="text-center w-1/3">
						<view class="mode-icon mx-auto">
							<text class="ri-water-flash-line"></text>
						</view>
						<text class="text-xs text-gray-500 block">潮湿环境</text>
						<text class="text-xs text-gray-500 mt-1 block">手势灵敏度调整</text>
					</view>
				</view>
			</view>
			
			<!-- 其他设置 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<view class="settings-item">
					<view class="settings-item-left">
						<text class="ri-notification-line settings-icon"></text>
						<text class="text-gray-700">消息通知</text>
					</view>
					<text class="ri-arrow-right-s-line text-gray-400"></text>
				</view>
				
				<view class="settings-item">
					<view class="settings-item-left">
						<text class="ri-heart-pulse-line settings-icon"></text>
						<text class="text-gray-700">健康目标设置</text>
					</view>
					<text class="ri-arrow-right-s-line text-gray-400"></text>
				</view>
				
				<view class="settings-item">
					<view class="settings-item-left">
						<text class="ri-lock-line settings-icon"></text>
						<text class="text-gray-700">隐私设置</text>
					</view>
					<text class="ri-arrow-right-s-line text-gray-400"></text>
				</view>
				
				<view class="settings-item border-0">
					<view class="settings-item-left">
						<text class="ri-information-line settings-icon"></text>
						<text class="text-gray-700">关于我们</text>
					</view>
					<text class="ri-arrow-right-s-line text-gray-400"></text>
				</view>
			</view>
			
			<view class="text-center mb-4">
				<button class="port-button w-full">同步设置到手环</button>
			</view>
		</view>

		<!-- 底部导航栏 -->
		<view class="tabbar">
			<view class="tabbar-item" @click="navigateToHome">
				<text class="ri-home-4-line tabbar-icon"></text>
				<text>首页</text>
			</view>
			<view class="tabbar-item">
				<text class="ri-heart-pulse-line tabbar-icon"></text>
				<text>健康</text>
			</view>
			<view class="tabbar-item">
				<text class="ri-coin-line tabbar-icon"></text>
				<text>积分兑换</text>
			</view>
			<view class="tabbar-item active">
				<text class="ri-settings-3-fill tabbar-icon"></text>
				<text>设置</text>
			</view>
		</view>
	</view>
</template>

<script>
import { icons } from '@/components/common'

export default {
	data() {
		return {
			icons
		}
	},
	methods: {
		navigateToDevicePairing() {
			uni.navigateTo({
				url: '/pages/device-pairing/index'
			})
		},
		navigateToHome() {
			uni.switchTab({
				url: '/pages/home/index'
			})
		}
	}
}
</script>

<style>
@import '../../styles/port-avatar.css';
</style> 