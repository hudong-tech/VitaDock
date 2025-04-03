<template>
	<view style="background-color: #f3f4f6; min-height: 100vh;">
		<!-- 页面内容区域 -->
		<view class="content-area p-4">
			<!-- 连接提示区域 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="flex items-center justify-center" style="margin-bottom: 16px;">
					<view class="rounded-full bg-gray-200 flex items-center justify-center" style="width: 70px; height: 70px;">
						<image src="/static/icons/common/bluetooth.svg" style="width: 24px; height: 24px;" mode="aspectFit"></image>
					</view>
				</view>
				<view class="text-center" style="margin-bottom: 12px;">
					<text class="text-lg font-bold text-gray-700" style="display: block; margin-bottom: 6px;">未连接智能手环</text>
					<text class="text-sm text-gray-500" style="display: block;">连接后可同步健康数据，管理手环设置</text>
				</view>
				<button class="block w-full" @click="navigateToDevicePairing" style="background-color: #0d4e81; color: white; border-radius: 8px; height: 44px; line-height: 44px; font-size: 16px; border: none; font-weight: bold;">立即连接手环</button>
			</view>

			<!-- 健康知识区 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 16px;">
				<view class="flex items-center mb-3">
					<view style="color: #FF9800; margin-right: 8px;">
						<image src="/static/icons/common/lightbulb.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
					</view>
					<text style="font-size: 15px; color: #333; font-weight: 500;">港口工作健康提示</text>
				</view>
				
				<view style="margin-bottom: 10px; border-radius: 8px; overflow: hidden; background-color: #EBF5FF; border-left: 4px solid #1E88E5; padding: 12px;">
					<text style="font-size: 14px; color: #333; line-height: 1.4;">炎热天气作业时，每小时至少补充300-500ml水，避免中暑风险。</text>
				</view>
				
				<view style="border-radius: 8px; overflow: hidden; background-color: #E8F5E9; border-left: 4px solid #43A047; padding: 12px;">
					<text style="font-size: 14px; color: #333; line-height: 1.4;">长时间站立工作，每隔1小时活动5分钟，保持下肢血液循环。</text>
				</view>
			</view>

			<!-- 功能预览区 -->
			<view class="mb-4">
				<text class="font-bold text-gray-700 mb-3 block">功能预览</text>
				<!-- 功能卡片1 -->
				<view class="data-card bg-white mb-3 disabled-card shadow-sm" style="background-color: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
					<view class="absolute inset-0 flex items-center justify-center disabled-overlay">
						<view class="bg-white px-3 py-1 rounded-full text-xs text-gray-500 shadow-sm connect-hint">
							<text>连接手环后可用</text>
						</view>
					</view>
					<text class="font-medium text-gray-700 block mb-2">今日健康概览</text>
					<view class="flex justify-around">
						<view class="dashboard-container dashboard-goal">
							<view class="dashboard-outer">
								<view class="dashboard-progress"></view>
								<view class="dashboard-inner">
									<text class="dashboard-value">0</text>
									<text class="dashboard-label">步数</text>
								</view>
							</view>
						</view>
						<view class="dashboard-container dashboard-heart">
							<view class="dashboard-outer">
								<view class="dashboard-progress"></view>
								<view class="dashboard-inner">
									<text class="dashboard-value">0</text>
									<text class="dashboard-label">卡路里</text>
								</view>
							</view>
						</view>
						<view class="dashboard-container dashboard-stand">
							<view class="dashboard-outer">
								<view class="dashboard-progress"></view>
								<view class="dashboard-inner">
									<text class="dashboard-value">0</text>
									<text class="dashboard-label">活动分钟</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 功能卡片2 -->
				<view class="data-card bg-white disabled-card shadow-sm" style="background-color: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
					<view class="absolute inset-0 flex items-center justify-center disabled-overlay">
						<view class="bg-white px-3 py-1 rounded-full text-xs text-gray-500 shadow-sm connect-hint">
							<text>连接手环后可用</text>
						</view>
					</view>
					<text class="font-medium text-gray-700 block mb-2">工作模式</text>
					<view class="flex justify-around mt-2">
						<view class="text-center">
							<view class="mode-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
									<path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
									<path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
								</svg>
							</view>
							<text class="text-xs text-gray-500">高噪音</text>
						</view>
						<view class="text-center">
							<view class="mode-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="5"/>
									<line x1="12" y1="1" x2="12" y2="3"/>
									<line x1="12" y1="21" x2="12" y2="23"/>
									<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
									<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
									<line x1="1" y1="12" x2="3" y2="12"/>
									<line x1="21" y1="12" x2="23" y2="12"/>
									<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
									<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
								</svg>
							</view>
							<text class="text-xs text-gray-500">强光</text>
						</view>
						<view class="text-center">
							<view class="mode-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M8 14a6 6 0 0 0 12 0a8 8 0 0 0-12-8a8 8 0 0 0-9 8a6 6 0 0 0 9 8"/>
									<path d="m17 4-3 3"/>
									<path d="m14 4 3 3"/>
								</svg>
							</view>
							<text class="text-xs text-gray-500">潮湿</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 使用引导区 -->
			<view class="data-card bg-white mb-16 shadow-sm" style="background-color: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
				<view class="flex items-center mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
						<circle cx="12" cy="12" r="10"/>
						<path d="M12 16v-4M12 8h.01"/>
					</svg>
					<text class="font-bold text-gray-700">如何使用智慧健康港</text>
				</view>
				<view class="guide-steps">
					<view class="flex items-center mb-3 guide-step">
						<view class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3 guide-number">
							<text>1</text>
						</view>
						<text class="text-sm text-gray-600">连接您的智能手环</text>
					</view>
					<view class="flex items-center mb-3 guide-step">
						<view class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3 guide-number">
							<text>2</text>
						</view>
						<text class="text-sm text-gray-600">实时监测您的健康数据</text>
					</view>
					<view class="flex items-center guide-step">
						<view class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3 guide-number">
							<text>3</text>
						</view>
						<text class="text-sm text-gray-600">获取积分兑换健康服务</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部导航栏 -->
		<custom-tab-bar></custom-tab-bar>
	</view>
</template>

<script>
	import { icons } from '@/components/common/index/index.js'
	import CustomTabBar from '@/components/business/CustomTabBar.vue'
	
	export default {
		components: {
			CustomTabBar
		},
		data() {
			return {
				icons
			}
		},
		onLoad() {
			console.log('首页加载')
			// 记录debug信息
			this.debugInfo()
		},
		methods: {
			navigateToDevicePairing() {
				uni.navigateTo({
					url: '/pages/device-pairing/index'
				});
			},
			navigateToSettings() {
				uni.switchTab({
					url: '/pages/settings/index'
				});
			},
			navigateToHealth() {
				uni.switchTab({
					url: '/pages/health/index'
				});
			},
			navigateToPoints() {
				uni.switchTab({
					url: '/pages/points/index'
				});
			},
			// 用于调试的方法
			debugInfo() {
				console.log('当前页面路径:', getCurrentPages())
				console.log('组件加载:', !!this.icons)
			}
		}
	}
</script>

<style>
@import '@/styles/dashboard.css';

/* 连接提示区域样式 */
.device-icon-container {
	border: 2px dashed #3b82f6;
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
	}
	70% {
		box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
	}
}

/* 健康提示区域样式 */
.health-tips-swiper {
	height: 80px;
}

/* 功能预览区样式 */
.disabled-card {
	position: relative;
	overflow: hidden;
}

.disabled-overlay {
	background-color: rgba(255, 255, 255, 0.7);
	z-index: 10;
}

.connect-hint {
	animation: bounce 2s infinite;
}

@keyframes bounce {
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-5px);
	}
}

/* 使用引导样式 */
.guide-steps {
	position: relative;
}

.guide-step {
	position: relative;
	z-index: 1;
}

.guide-number {
	font-weight: bold;
	border: 2px solid #dbeafe;
}

.guide-steps:before {
	content: '';
	position: absolute;
	top: 16px;
	left: 16px;
	width: 2px;
	height: calc(100% - 32px);
	background-color: #dbeafe;
	z-index: 0;
}
</style> 