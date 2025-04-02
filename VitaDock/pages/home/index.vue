<template>
	<view class="bg-gray-100" style="min-height: 100vh;">
	

		<!-- 页面内容区域 -->
		<view class="content-area p-4">
			<!-- 连接提示区域 -->
			<view class="bg-white rounded-xl p-5 mb-4 shadow-sm">
				<view class="flex items-center justify-center mb-4">
					<view class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
						<icon-font :name="icons.device.BLUETOOTH" color="#9ca3af" size="60"></icon-font>
					</view>
				</view>
				<view class="text-center mb-4">
					<text class="text-lg font-bold text-gray-700">未连接智能手环</text>
					<text class="text-sm text-gray-500 mt-1 block">连接后可同步健康数据，管理手环设置</text>
				</view>
				<button class="port-button block w-full" @click="navigateToDevicePairing">立即连接手环</button>
			</view>

			<!-- 静态健康知识区 -->
			<view class="bg-white rounded-xl p-4 mb-4 shadow-sm">
				<text class="font-bold text-gray-700 mb-3 block">
					<icon-font :name="icons.other.LIGHTBULB" color="#f59e0b" size="32" class="mr-1"></icon-font>
					港口工作健康提示
				</text>
				<view class="p-3 border-l-4 border-blue-500 bg-blue-50 rounded mb-3">
					<text class="text-sm text-gray-700">炎热天气作业时，每小时至少补充300-500ml水，避免中暑风险。</text>
				</view>
				<view class="p-3 border-l-4 border-green-500 bg-green-50 rounded">
					<text class="text-sm text-gray-700">长时间站立工作，每隔1小时活动5分钟，保持下肢血液循环。</text>
				</view>
			</view>

			<!-- 功能预览区 -->
			<view class="mb-4">
				<text class="font-bold text-gray-700 mb-3 block">功能预览</text>
				<!-- 功能卡片1 -->
				<view class="bg-gray-200 rounded-xl p-4 mb-3 relative opacity-80">
					<view class="absolute inset-0 flex items-center justify-center">
						<view class="bg-white px-3 py-1 rounded-full text-xs text-gray-500 shadow-sm">
							<text>连接手环后可用</text>
						</view>
					</view>
					<text class="font-medium text-gray-400 block">今日健康概览</text>
					<view class="flex justify-between mt-2 opacity-70">
						<view class="text-center">
							<text class="text-xl font-bold text-gray-400 block">0</text>
							<text class="text-xs text-gray-500">步数</text>
						</view>
						<view class="text-center">
							<text class="text-xl font-bold text-gray-400 block">0</text>
							<text class="text-xs text-gray-500">卡路里</text>
						</view>
						<view class="text-center">
							<text class="text-xl font-bold text-gray-400 block">0</text>
							<text class="text-xs text-gray-500">活动分钟</text>
						</view>
					</view>
				</view>
				
				<!-- 功能卡片2 -->
				<view class="bg-gray-200 rounded-xl p-4 relative opacity-80">
					<view class="absolute inset-0 flex items-center justify-center">
						<view class="bg-white px-3 py-1 rounded-full text-xs text-gray-500 shadow-sm">
							<text>连接手环后可用</text>
						</view>
					</view>
					<text class="font-medium text-gray-400 block">工作模式</text>
					<view class="flex justify-between mt-3 opacity-70">
						<view class="text-center">
							<view class="mode-icon">
								<icon-font :name="icons.workMode.NOISE" color="#9ca3af" size="32"></icon-font>
							</view>
							<text class="text-xs text-gray-500">高噪音</text>
						</view>
						<view class="text-center">
							<view class="mode-icon">
								<icon-font :name="icons.workMode.BRIGHTNESS" color="#9ca3af" size="32"></icon-font>
							</view>
							<text class="text-xs text-gray-500">强光</text>
						</view>
						<view class="text-center">
							<view class="mode-icon">
								<icon-font :name="icons.workMode.HUMIDITY" color="#9ca3af" size="32"></icon-font>
							</view>
							<text class="text-xs text-gray-500">潮湿</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 使用引导区 -->
			<view class="bg-white rounded-xl p-4 shadow-sm mb-4">
				<text class="font-bold text-gray-700 mb-3 block">
					<icon-font :name="icons.other.GUIDE" color="#3b82f6" size="32" class="mr-1"></icon-font>
					如何使用智慧健康港
				</text>
				<view class="flex items-center mb-2">
					<view class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
						<text>1</text>
					</view>
					<text class="text-sm text-gray-600">连接您的智能手环</text>
				</view>
				<view class="flex items-center mb-2">
					<view class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
						<text>2</text>
					</view>
					<text class="text-sm text-gray-600">实时监测您的健康数据</text>
				</view>
				<view class="flex items-center">
					<view class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
						<text>3</text>
					</view>
					<text class="text-sm text-gray-600">获取积分兑换健康服务</text>
				</view>
			</view>
		</view>

		<!-- 底部导航栏 -->
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
				uni.navigateTo({
					url: '/pages/settings/index'
				});
			},
			navigateToHealth() {
				uni.navigateTo({
					url: '/pages/health/index'
				});
			},
			navigateToPoints() {
				uni.navigateTo({
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
/* 页面特定样式已通过全局样式文件和Tailwind类提供 */
</style> 