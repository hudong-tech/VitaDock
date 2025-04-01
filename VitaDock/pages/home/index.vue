<template>
	<view class="container">
		<!-- 未连接状态 -->
		<view v-if="!isConnected" class="disconnected-view p-4">
			<image src="/static/images/device-disconnected.png" mode="aspectFit" class="w-40 h-40 mx-auto"></image>
			<view class="text-center mt-4 text-gray-600">
				您尚未连接智能手环
			</view>
			<button class="port-button mt-6 w-full" @click="navigateToDevicePairing">
				立即连接
			</button>
		</view>
		
		<!-- 已连接状态 -->
		<view v-else class="connected-view p-4">
			<!-- 健康数据卡片 -->
			<view class="data-card">
				<view class="flex justify-between items-center mb-3">
					<text class="font-bold text-lg">今日活动</text>
					<text class="text-sm text-blue-500" @click="navigateToHealth">详情 ></text>
				</view>
				
				<view class="flex justify-around">
					<view class="text-center">
						<view class="text-2xl font-semibold">{{ healthData.steps }}</view>
						<view class="text-xs text-gray-500">步数</view>
					</view>
					<view class="text-center">
						<view class="text-2xl font-semibold">{{ healthData.calories }}</view>
						<view class="text-xs text-gray-500">卡路里</view>
					</view>
					<view class="text-center">
						<view class="text-2xl font-semibold">{{ healthData.distance }}</view>
						<view class="text-xs text-gray-500">公里</view>
					</view>
				</view>
			</view>
			
			<!-- 今日运动目标 -->
			<view class="data-card mt-4">
				<view class="flex justify-between items-center mb-3">
					<text class="font-bold text-lg">今日目标</text>
					<text class="text-sm text-gray-500">{{ completedGoals }}/3</text>
				</view>
				
				<view class="goal-item flex items-center justify-between mb-2">
					<view class="flex items-center">
						<view class="goal-icon bg-blue-100 rounded-full p-2 mr-3">
							<view class="iconfont icon-steps text-blue-500"></view>
						</view>
						<view>
							<view class="text-sm">步数目标</view>
							<view class="text-xs text-gray-500">10,000步</view>
						</view>
					</view>
					<view class="progress-bar w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
						<view class="h-full bg-blue-500" :style="{width: (healthData.steps / 100) + '%'}"></view>
					</view>
				</view>
				
				<view class="goal-item flex items-center justify-between mb-2">
					<view class="flex items-center">
						<view class="goal-icon bg-red-100 rounded-full p-2 mr-3">
							<view class="iconfont icon-heart text-red-500"></view>
						</view>
						<view>
							<view class="text-sm">活动时间</view>
							<view class="text-xs text-gray-500">30分钟</view>
						</view>
					</view>
					<view class="progress-bar w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
						<view class="h-full bg-red-500" :style="{width: (healthData.activityMinutes / 30 * 100) + '%'}"></view>
					</view>
				</view>
				
				<view class="goal-item flex items-center justify-between">
					<view class="flex items-center">
						<view class="goal-icon bg-green-100 rounded-full p-2 mr-3">
							<view class="iconfont icon-energy text-green-500"></view>
						</view>
						<view>
							<view class="text-sm">消耗热量</view>
							<view class="text-xs text-gray-500">300卡路里</view>
						</view>
					</view>
					<view class="progress-bar w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
						<view class="h-full bg-green-500" :style="{width: (healthData.calories / 3) + '%'}"></view>
					</view>
				</view>
			</view>
			
			<!-- 设备信息 -->
			<view class="data-card mt-4">
				<view class="flex justify-between items-center mb-3">
					<text class="font-bold text-lg">设备信息</text>
					<text class="text-sm text-blue-500">设置 ></text>
				</view>
				
				<view class="flex items-center">
					<image src="/static/images/device-band.png" mode="aspectFit" class="w-16 h-16"></image>
					<view class="ml-4">
						<view class="text-md font-medium">{{ deviceInfo.name }}</view>
						<view class="text-xs text-gray-500 mt-1">电量：{{ deviceInfo.battery }}%</view>
						<view class="text-xs text-gray-500">固件版本：{{ deviceInfo.firmware }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isConnected: false,
				healthData: {
					steps: 8734,
					calories: 347,
					distance: 5.8,
					activityMinutes: 42
				},
				deviceInfo: {
					name: '智能手环Pro',
					battery: 87,
					firmware: 'v2.1.4'
				}
			}
		},
		computed: {
			completedGoals() {
				let count = 0;
				if (this.healthData.steps >= 10000) count++;
				if (this.healthData.activityMinutes >= 30) count++;
				if (this.healthData.calories >= 300) count++;
				return count;
			}
		},
		onLoad() {
			// 检查是否已连接设备
			const connected = uni.getStorageSync('deviceConnected') || false;
			this.isConnected = connected;
		},
		methods: {
			navigateToDevicePairing() {
				uni.navigateTo({
					url: '/pages/device-pairing/index'
				});
			},
			navigateToHealth() {
				uni.switchTab({
					url: '/pages/health/index'
				});
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 50px; /* 底部tabbar高度 */
	}
	
	.disconnected-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 40%;
	}
	
	.data-card {
		background: #fff;
		border-radius: 12px;
		padding: 15px;
		box-shadow: 0 2px 5px rgba(0,0,0,0.05);
	}
	
	.port-button {
		background-color: #1a5276;
		color: white;
		border-radius: 8px;
		padding: 10px 16px;
		font-weight: bold;
		text-align: center;
		box-shadow: 0 3px 0 rgba(0,0,0,0.1);
	}
</style> 