<template>
	<view style="background-color: #f3f4f6; min-height: 100vh;">
		<!-- 页面内容区域 -->
		<view class="content-area p-4">
			<!-- 根据连接状态显示不同内容 -->
			<block v-if="deviceConnected">
				<!-- 健康概览卡片 -->
				<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
					<view class="flex justify-between items-center mb-3">
						<h3 class="font-bold text-gray-700">今日健康概览</h3>
						<view class="flex items-center text-xs text-blue-500" @click="navigateToHealth">
							<text>查看更多 ></text>
						</view>
					</view>
					
					<view class="flex justify-between">
						<view class="text-center">
							<text class="text-2xl font-bold text-gray-700">78°</text>
							<text class="text-xs text-gray-500 block">肩部活动角度</text>
							<view class="mt-1 flex items-center justify-center">
								<view style="height: 4px; width: 64px; background-color: #E5E7EB; border-radius: 2px;">
									<view style="height: 4px; background-color: #10B981; border-radius: 2px; width: 70%;"></view>
								</view>
							</view>
						</view>
						<view class="text-center">
							<text class="text-2xl font-bold text-gray-700">42</text>
							<text class="text-xs text-gray-500 block">肩部锻炼时间(分钟)</text>
							<view class="mt-1 flex items-center justify-center">
								<view style="height: 4px; width: 64px; background-color: #E5E7EB; border-radius: 2px;">
									<view style="height: 4px; background-color: #10B981; border-radius: 2px; width: 60%;"></view>
								</view>
							</view>
						</view>
						<view class="text-center">
							<text class="text-2xl font-bold text-gray-700">92%</text>
							<text class="text-xs text-gray-500 block">恢复程度</text>
							<view class="mt-1 flex items-center justify-center">
								<view style="height: 4px; width: 64px; background-color: #E5E7EB; border-radius: 2px;">
									<view style="height: 4px; background-color: #10B981; border-radius: 2px; width: 92%;"></view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 健康状态仪表盘 -->
				<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
					<h3 class="font-bold text-gray-700 mb-3 block">健康状态仪表盘</h3>
					<view class="flex justify-between px-2">
						<view class="dashboard-container" style="width: 30%; text-align: center;">
							<view class="dashboard-outer" style="width: 80px; height: 80px; margin: 0 auto; position: relative;">
								<view class="dashboard-progress" style="width: 80px; height: 80px; border-radius: 50%; border: 8px solid #42b883; box-sizing: border-box;"></view>
								<view class="dashboard-inner" style="width: 64px; height: 64px; position: absolute; top: 8px; left: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: white; border-radius: 50%;">
									<view class="dashboard-value" style="font-size: 16px; font-weight: bold; color: #42b883;">85%</view>
									<view class="dashboard-label" style="font-size: 10px; color: #6b7280;">肩部活动度</view>
								</view>
							</view>
						</view>
						<view class="dashboard-container" style="width: 30%; text-align: center;">
							<view class="dashboard-outer" style="width: 80px; height: 80px; margin: 0 auto; position: relative;">
								<view class="dashboard-progress" style="width: 80px; height: 80px; border-radius: 50%; border: 8px solid #ff6b6b; box-sizing: border-box;"></view>
								<view class="dashboard-inner" style="width: 64px; height: 64px; position: absolute; top: 8px; left: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: white; border-radius: 50%;">
									<view class="dashboard-value" style="font-size: 16px; font-weight: bold; color: #ff6b6b;">75%</view>
									<view class="dashboard-label" style="font-size: 10px; color: #6b7280;">稳定性</view>
								</view>
							</view>
						</view>
						<view class="dashboard-container" style="width: 30%; text-align: center;">
							<view class="dashboard-outer" style="width: 80px; height: 80px; margin: 0 auto; position: relative;">
								<view class="dashboard-progress" style="width: 80px; height: 80px; border-radius: 50%; border: 8px solid #48a2f0; box-sizing: border-box;"></view>
								<view class="dashboard-inner" style="width: 64px; height: 64px; position: absolute; top: 8px; left: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: white; border-radius: 50%;">
									<view class="dashboard-value" style="font-size: 16px; font-weight: bold; color: #48a2f0;">90%</view>
									<view class="dashboard-label" style="font-size: 10px; color: #6b7280;">舒适度</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 运动数据总览 -->
				<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
					<view class="flex justify-between items-center mb-3">
						<h3 class="font-bold text-gray-700 block">今日运动</h3>
						<view class="text-xs text-blue-500 flex items-center" @click="navigateToHealth">
							<text>详细数据 ></text>
						</view>
					</view>
					
					<view style="border-left: 4px solid #3b82f6; padding-left: 12px; padding-top: 8px; padding-bottom: 8px; padding-right: 12px; margin-bottom: 12px; background-color: #eff6ff; border-radius: 4px;">
						<view class="flex items-center justify-between">
							<view>
								<text class="font-medium text-gray-700 block">仰卧木棒肩屈训练</text>
								<view class="text-xs text-gray-500 mt-1 flex items-center">
									<image src="/static/icons/home/time.svg" style="width: 14px; height: 14px; margin-right: 4px;" mode="aspectFit"></image>
									<text>08:20 - 08:45</text>
								</view>
							</view>
							<view class="text-right">
								<text class="font-bold text-gray-700 block">25分钟</text>
								<text class="text-xs text-gray-500 mt-1 block">中等强度</text>
							</view>
						</view>
					</view>
					
					<view style="border-left: 4px solid #10b981; padding-left: 12px; padding-top: 8px; padding-bottom: 8px; padding-right: 12px; background-color: #f0fdf4; border-radius: 4px;">
						<view class="flex items-center justify-between">
							<view>
								<text class="font-medium text-gray-700 block">俯卧Y字伸展</text>
								<view class="text-xs text-gray-500 mt-1 flex items-center">
									<image src="/static/icons/home/time.svg" style="width: 14px; height: 14px; margin-right: 4px;" mode="aspectFit"></image>
									<text>13:10 - 13:35</text>
								</view>
							</view>
							<view class="text-right">
								<text class="font-bold text-gray-700 block">25分钟</text>
								<text class="text-xs text-gray-500 mt-1 block">低强度</text>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 工作模式快捷切换 -->
				<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
					<h3 class="font-bold text-gray-700 mb-3 block">工作环境模式</h3>
					<view class="flex justify-between">
						<view class="text-center" @click="switchWorkMode('noise')">
							<view class="mode-icon" :class="{ active: activeWorkMode === 'noise' }">
								<image src="/static/icons/home/volume.svg" style="width: 24px; height: 24px;" mode="aspectFit"></image>
							</view>
							<text class="text-xs" :class="activeWorkMode === 'noise' ? 'font-medium text-gray-700' : 'text-gray-500'" style="display: block;">高噪音环境</text>
						</view>
						<view class="text-center" @click="switchWorkMode('light')">
							<view class="mode-icon" :class="{ active: activeWorkMode === 'light' }">
								<image src="/static/icons/home/sun.svg" style="width: 24px; height: 24px;" mode="aspectFit"></image>
							</view>
							<text class="text-xs" :class="activeWorkMode === 'light' ? 'font-medium text-gray-700' : 'text-gray-500'" style="display: block;">强光环境</text>
						</view>
						<view class="text-center" @click="switchWorkMode('humidity')">
							<view class="mode-icon" :class="{ active: activeWorkMode === 'humidity' }">
								<image src="/static/icons/home/water.svg" style="width: 24px; height: 24px;" mode="aspectFit"></image>
							</view>
							<text class="text-xs" :class="activeWorkMode === 'humidity' ? 'font-medium text-gray-700' : 'text-gray-500'" style="display: block;">潮湿环境</text>
						</view>
					</view>
				</view>
				
				<!-- 港口健康提示 -->
				<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
					<view class="flex justify-between items-center mb-3">
						<view class="flex items-center">
							<image src="/static/icons/home/lightbulb.svg" style="width: 20px; height: 20px; margin-right: 4px;" mode="aspectFit"></image>
							<h3 class="font-bold text-gray-700 block">港口健康提示</h3>
						</view>
						<text class="text text-blue-500">今日</text>
					</view>
					<view class="rounded" style="border-left: 6px solid #F59E0B; padding: 12px; background-color: #fefce8;">
						<text class="text-sm text-gray-700">长时间高举手臂搬运货物，易导致肩部不适。建议每隔一小时进行2分钟肩部放松，如肩膀绕环、肩膀耸起再放松等小动作。</text>
					</view>
				</view>
				
				<!-- 近期运动成就 -->
				<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
					<h3 class="font-bold text-gray-700 mb-3 block">近期成就</h3>
					<view class="flex items-center justify-between mb-3">
						<view class="flex items-center">
							<view style="width: 40px; height: 40px; border-radius: 50%; background-color: #fef9c3; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
								<image src="/static/icons/home/medal.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
							</view>
							<view>
								<text class="font-medium text-gray-700 block">肩部康复达人</text>
								<text class="text-xs text-gray-500 block">连续7天完成肩部康复训练</text>
							</view>
						</view>
						<view class="badge bg-yellow-100 text-yellow-600">+50积分</view>
					</view>
					<view class="flex items-center justify-between">
						<view class="flex items-center">
							<view style="width: 40px; height: 40px; border-radius: 50%; background-color: #fef9c3; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
								<image src="/static/icons/home/muscle.svg" style="width: 20px; height: 20px;" mode="aspectFit"></image>
							</view>
							<view>
								<text class="font-medium text-gray-700 block">活动度提升</text>
								<text class="text-xs text-gray-500 block">肩部活动角度提升15°</text>
							</view>
						</view>
						<view class="badge bg-yellow-100 text-yellow-600">+30积分</view>
					</view>
				</view>
			</block>
			
			<block v-else>
				<!-- 未连接状态的现有内容 -->
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
				<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px; margin-top: 16px;">
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
			</block>
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
				deviceConnected: false,
				icons: {},
				activeWorkMode: 'light'
			}
		},
		onLoad() {
			console.log('首页加载')
			// 获取设备连接状态
			this.getDeviceConnectedStatus()
			// 从本地存储获取保存的工作模式
			this.getWorkModeFromStorage()
			// 记录debug信息
			this.debugInfo()
		},
		onShow() {
			console.log('首页显示')
			// 每次页面显示时重新获取设备连接状态
			this.getDeviceConnectedStatus()
		},
		methods: {
			// 获取设备连接状态
			getDeviceConnectedStatus() {
				try {
					const connected = uni.getStorageSync('deviceConnected')
					this.deviceConnected = !!connected
				} catch(e) {
					console.error('获取设备连接状态失败', e)
				}
			},
			// 从本地存储获取工作模式
			getWorkModeFromStorage() {
				try {
					const mode = uni.getStorageSync('workMode')
					if (mode) {
						this.activeWorkMode = mode
					}
				} catch(e) {
					console.error('获取工作模式失败', e)
				}
			},
			// 切换工作模式
			switchWorkMode(mode) {
				this.activeWorkMode = mode
				// 保存到本地存储
				try {
					uni.setStorageSync('workMode', mode)
					// 显示已切换提示
					uni.showToast({
						title: `已切换到${this.getWorkModeName(mode)}`,
						icon: 'none',
						duration: 1500
					})
				} catch(e) {
					console.error('保存工作模式失败', e)
				}
			},
			// 获取工作模式的中文名称
			getWorkModeName(mode) {
				const modeNames = {
					'noise': '高噪音环境',
					'light': '强光环境',
					'humidity': '潮湿环境'
				}
				return modeNames[mode] || '未知模式'
			},
			navigateToDevicePairing() {
				uni.navigateTo({
					url: '/pages/device-pairing/index'
				})
			},
			navigateToSettings() {
				uni.switchTab({
					url: '/pages/settings/index'
				})
			},
			navigateToHealth() {
				uni.switchTab({
					url: '/pages/health/index'
				})
			},
			navigateToPoints() {
				uni.switchTab({
					url: '/pages/points/index'
				})
			},
			// 用于调试的方法
			debugInfo() {
				console.log('当前页面路径:', getCurrentPages())
				console.log('设备连接状态:', this.deviceConnected)
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

/* 模式图标样式 */
.mode-icon {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #f3f4f6;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 8px;
}

.mode-icon.active {
	background-color: #1a5276;
}

.mode-icon.active image {
	filter: brightness(0) invert(1);
}

/* 徽章样式 */
.badge {
	padding: 2px 8px;
	border-radius: 20px;
	font-size: 12px;
}

/* 仪表盘样式 */
.dashboard-container {
	width: 30%;
	text-align: center;
}
</style> 