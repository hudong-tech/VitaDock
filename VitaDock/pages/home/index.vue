<template>
	<view style="background-color: #f3f4f6; min-height: 100vh;">
		<!-- 页面内容区域 -->
		<view class="content-area p-4">
			<!-- 连接提示区域 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="flex items-center justify-center" style="margin-bottom: 16px;">
					<view class="rounded-full bg-gray-200 flex items-center justify-center" style="width: 70px; height: 70px;">
						<image src="/static/icons/home/bluetooth.svg" style="width: 24px; height: 24px;" mode="aspectFit"></image>
					</view>
				</view>
				<view class="text-center" style="margin-bottom: 12px;">
					<text class="text-lg font text-gray-700" style="display: block; margin-bottom: 6px;">未连接智能手环</text>
					<text class="text-sm text-gray-500" style="display: block;">连接后可同步健康数据，管理手环设置</text>
				</view>
				<button class="block w-full" @click="navigateToDevicePairing" style="background-color: #0d4e81; color: white; border-radius: 8px; height: 44px; line-height: 44px; font-size: 16px; border: none; font-weight: bold;">立即连接手环</button>
			</view>

			<!-- 健康知识区 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 16px;">
				<view class="flex items-center mb-3">
					<view style="color: #FF9800; margin-right: 8px;">
						<image src="/static/icons/home/lightbulb.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
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
			<view class="mb-8" style="margin-bottom: 32px;">
				<h3 class="font text-gray-700 mb-3 block" style="font-size: 20px;">功能预览</h3>

				
				<!-- 功能卡片1：今日健康概览 -->
				<view class="bg-gray-200 rounded-xl p-4 mb-3 relative" style="border-radius: 12px;">
					<h4 class="text-gray-500 mb-2">今日健康概览</h4>
					
					<view class="absolute inset-0 flex items-center justify-center">
						<view class="bg-white px-3 py-1 rounded-full text-xs text-gray-500 shadow-sm" style="border-radius: 9999px; padding: 4px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
							<text>连接手环后可用</text>
						</view>
					</view>
					
					<view class="flex justify-between">
						<view class="text-center">
							<text class="text-gray-500 block" style="font-size: 20px;">0</text>
							<text class="text-gray-500" style="font-size: 12px;">肩部活动度</text>
						</view>
						<view class="text-center">
							<text class="text-gray-500 block" style="font-size: 20px;">0</text>
							<text class="text-gray-500" style="font-size: 12px;">肩部锻炼时间</text>
						</view>
						<view class="text-center">
							<text class="text-gray-500 block" style="font-size: 20px;">0</text>
							<text class="text-gray-500" style="font-size: 12px;">恢复程度</text>
						</view>
					</view>
				</view>
				
				<!-- 功能卡片2：工作模式 -->
				<view class="bg-gray-200 rounded-xl p-4 relative" style="border-radius: 12px; height: 120px;">
					<h4 class="text-gray-500 mb-2">工作模式</h4>
					
					<view class="absolute inset-0 flex items-center justify-center">
						<view class="bg-white px-3 py-1 rounded-full text-xs text-gray-500 shadow-sm" style="border-radius: 9999px; padding: 4px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
							<text>连接手环后可用</text>
						</view>
					</view>
					
					<view class="flex justify-between mt-2">
						<view class="text-center">
							<view class="mode-icon flex items-center justify-center" style="height: 40px;">
								<image src="/static/icons/home/volume.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
							</view>
							<text class="text-xs text-gray-500">高噪音</text>
						</view>
						<view class="text-center">
							<view class="mode-icon flex items-center justify-center" style="height: 40px;">
								<image src="/static/icons/home/sun.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
							</view>
							<text class="text-xs text-gray-500">强光</text>
						</view>
						<view class="text-center">
							<view class="mode-icon flex items-center justify-center" style="height: 40px;">
								<image src="/static/icons/home/water.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
							</view>
							<text class="text-xs text-gray-500">潮湿</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 使用引导区 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 24px; margin-top: 16px;">
				<view class="flex items-center" style="margin-bottom: 20px;">
					<view style="margin-right: 10px;">
						<image src="/static/icons/home/guide.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
					</view>
					<text class="text-gray-700" style="font-size: 20px;">如何使用智慧健康港</text>
				</view>
				
				<view class="guide-steps-container">
					<view class="flex items-center" style="margin-bottom: 18px;">
						<view style="width: 30px; height: 30px; background-color: #e0f2fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
							<text style="color: #3b82f6; font-size: 16px;">1</text>
						</view>
						<text class="text-gray-600" style="font-size: 15px;">连接您的智能手环</text>
					</view>
					
					<view class="flex items-center" style="margin-bottom: 18px;">
						<view style="width: 30px; height: 30px; background-color: #e0f2fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
							<text style="color: #3b82f6; font-size: 16px;">2</text>
						</view>
						<text class="text-gray-600" style="font-size: 15px;">实时监测您的健康数据</text>
					</view>
					
					<view class="flex items-center">
						<view style="width: 30px; height: 30px; background-color: #e0f2fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
							<text style="color: #3b82f6; font-size: 16px;">3</text>
						</view>
						<text class="text-gray-600" style="font-size: 15px;">获取积分兑换健康服务</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部导航栏 -->
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
.guide-steps-container {
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
	display: none;
}
</style> 