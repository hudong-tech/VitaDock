<template>
	<view style="background-color: #f3f4f6; min-height: 100vh;">
		<view class="content-area p-4">
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px;">
				<view style="padding: 16px 16px 16px;">
					<view class="flex justify-between items-center mb-3">
						<h3 class="font-bold text-gray-700">本周肩部数值报告</h3>
						<view class="flex items-center text-xs text-blue-500">
							<text>月度报告 ></text>
						</view>
					</view>

					<!-- 柱状图 -->
					<view class="w-full flex justify-between items-end" style="height: 120px; margin-bottom: 24px; margin-top: 24px;">
						<view v-for="(item, index) in weeklyActivity" :key="index" class="flex flex-col items-center" style="flex: 1;">
							<view 
								style="width: 28px; border-top-left-radius: 6px; border-top-right-radius: 6px;"
								:style="{
									height: `${item.shoulderAngle}px`,
									backgroundColor: item.day === '日' ? '#3b82f6' : (item.isHighlight ? '#60a5fa' : '#e5e7eb')
								}"
							></view>
							<text 
								style="font-size: 12px; margin-top: 8px;"
								:style="{
									color: item.day === '日' ? '#3b82f6' : '#6b7280',
									fontWeight: item.day === '日' ? '600' : '400'
								}"
							>
								{{ item.day === '日' ? '今' : item.day }}
							</text>
						</view>
					</view>

					<!-- 底部数据展示 -->
					<view class="flex justify-between">
						<view class="text-center">
							<text class="text-xs text-gray-500 block" style="margin-bottom: 2px;">肩部活动角度</text>
							<text class="font-bold text-gray-700">{{ healthData.shoulderActivity }}°</text>
						</view>
						<view class="text-center">
							<text class="text-xs text-gray-500 block" style="margin-bottom: 2px;">肩部锻炼时间</text>
							<text class="font-bold text-gray-700">{{ healthData.exerciseMinutes }}分钟/天</text>
						</view>
						<view class="text-center">
							<text class="text-xs text-gray-500 block" style="margin-bottom: 2px;">达标天数</text>
							<text class="font-bold text-gray-700">{{ healthData.completedDays }}/7</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="section-header">
					<h3 class="font-bold text-gray-700 mb-3">今日运动记录</h3>
				</view>
				
				<!-- 运动记录时间轴 -->
				<view class="timeline">
					<view v-for="exercise in dailyExercises" :key="exercise.id" class="timeline-item relative pl-8 mb-4">
						<!-- 时间轴点 -->
						<view class="absolute left-7 top-3 w-4 h-4 rounded-full bg-blue-500" style="transform: translateX(-50%);"></view>
						
						<!-- 运动项目卡片 -->
						<view class="bg-white rounded-lg p-4 shadow-sm" style="border: 1px solid #d1d5db; border-radius: 8px;">
							<view class="flex justify-between items-start">
								<view style="flex: 1;">
									<text class="font text-gray-700 block mb-2">{{ exercise.name }}</text>
									<text class="text-xs text-gray-500 block mb-2">{{ exercise.startTime }} - {{ exercise.endTime }}</text>
									<view class="flex items-center mt-2">
										<view class="badge mr-2" :style="{ 
											backgroundColor: exercise.intensity.includes('低') ? '#A3E4D7' : 
											(exercise.intensity.includes('中高') ? '#F39C12' : '#FFD700'),
											padding: '4px 10px'
										}">
											<text style="font-size: 14px; font-weight: 500;">{{ exercise.intensity }}</text>
										</view>
										<text class="text-xs text-gray-500" style="margin-left: 8px;">消耗{{ exercise.calories }}卡</text>
									</view>
								</view>
								
								<!-- 为训练类型显示圆形 -->
								<view v-if="exercise.type !== 'work'" style="width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 8px;" :style="{ 
									backgroundColor: exercise.type === 'shoulder' ? '#dbeafe' : '#dcfce7'
								}">
									<image 
										:src="exercise.type === 'shoulder' ? '/static/icons/health/muscle.svg' : '/static/icons/health/health.svg'" 
										style="width: 28px; height: 28px;"
										mode="aspectFit"
									></image>
								</view>
								
								<!-- 为工作类型直接显示图标 -->
								<view v-else style="margin-left: 8px;">
									<image 
										src="/static/icons/pairing/ship.svg"
										style="width: 40px; height: 40px;"
										mode="aspectFit"
									></image>
								</view>
							</view>
							
							<view class="mt-4">
								<view class="flex justify-between items-center mb-2">
									<text class="text-xs text-gray-500">{{ exercise.improvement.metric }}</text>
									<text class="text-xs text-gray-700">{{ 
										exercise.improvement.value.includes('%') ? '提升 ' + exercise.improvement.value : exercise.improvement.value 
									}}</text>
								</view>
								
								<!-- 根据不同类型显示不同的进度指示器 -->
								<view v-if="exercise.type === 'shoulder'" style="height: 24px; background-color: #f3f4f6; border-radius: 9999px; overflow: hidden; position: relative;">
									<!-- 模拟肩部活动曲线 -->
									<view class="w-full h-full">
										<view class="absolute inset-0">
											<view class="w-full h-full flex items-center">
												<view class="w-full">
													<image src="/static/icons/health/health-line.svg" mode="widthFix" style="width: 100%;" />
												</view>
											</view>
										</view>
									</view>
								</view>
								
								<view v-else style="height: 8px; background-color: #f3f4f6; border-radius: 9999px;">
									<view style="height: 8px; border-radius: 9999px;" :style="{ 
										width: exercise.type === 'recovery' ? '55%' : '80%',
										backgroundColor: exercise.type === 'recovery' ? '#10B981' : '#F59E0B'
									}"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="section-header">
					<h3 class="font-bold text-gray-700 mb-3">健康指标</h3>
				</view>
				
				<view class="health-indicators">
					<view class="indicator-item">
						<view class="indicator-header">
							<view class="flex items-center">
								<icon-font :name="icons.health.HEART" color="#ef4444" size="36"></icon-font>
								<text class="ml-2">静息心率</text>
							</view>
							<text class="indicator-value">{{ healthIndicators.heartRate.current }} {{ healthIndicators.heartRate.unit }}</text>
						</view>
						<view class="progress-bar">
							<view class="progress" :style="{ width: healthIndicators.heartRate.progress + '%' }"></view>
						</view>
					</view>
					
					<view class="indicator-item">
						<view class="indicator-header">
							<view class="flex items-center">
								<icon-font :name="icons.health.SLEEP" color="#8b5cf6" size="36"></icon-font>
								<text class="ml-2">昨晚睡眠</text>
							</view>
							<text class="indicator-value">{{ healthIndicators.sleep.total.hours }}小时{{ healthIndicators.sleep.total.minutes }}分</text>
						</view>
						<view class="sleep-phases">
							<view class="phase deep" :style="{ width: healthIndicators.sleep.phases.deep.percent + '%' }"></view>
							<view class="phase light" :style="{ width: healthIndicators.sleep.phases.light.percent + '%' }"></view>
							<view class="phase rem" :style="{ width: healthIndicators.sleep.phases.rem.percent + '%' }"></view>
						</view>
					</view>
					
					<view class="indicator-item">
						<view class="indicator-header">
							<view class="flex items-center">
								<icon-font :name="icons.health.STRESS" color="#3b82f6" size="36"></icon-font>
								<text class="ml-2">压力水平</text>
							</view>
							<text class="indicator-value">{{ healthIndicators.stress.level }}</text>
						</view>
						<view class="progress-bar">
							<view class="progress" :style="{ width: healthIndicators.stress.score + '%' }"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 自定义底部导航栏 -->
		<custom-tab-bar></custom-tab-bar>
	</view>
</template>

<script>
import '@/styles/dashboard.css'
import '@/styles/tailwind.css'
import CustomTabBar from '@/components/business/CustomTabBar.vue'
import { healthData, weeklyActivity, healthIndicators, dailyExercises } from '@/mock/health-data.js'

export default {
	components: {
		CustomTabBar
	},
	data() {
		return {
			title: '健康数据',
			healthData,
			weeklyActivity,
			healthIndicators,
			dailyExercises,
			icons: {
				health: {
					MUSCLE: 'muscle',
					HEALTH: 'health',
					SHIP: 'ship',
					HEART: 'heart',
					SLEEP: 'sleep',
					STRESS: 'stress'
				},
				other: {
					ARROW_RIGHT: 'arrow-right'
				}
			}
		}
	},
	computed: {
		// 计算柱状图最大高度
		maxShoulderAngle() {
			return Math.max(...this.weeklyActivity.map(item => item.shoulderAngle))
		}
	},
	onLoad() {
		console.log('健康数据页面加载')
		console.log('周数据:', this.weeklyActivity)
		console.log('健康数据:', this.healthData)
	},
	methods: {
		
	}
}
</script>

<style>
@import '@/styles/dashboard.css';
@import '@/styles/tailwind.css';

/* 时间轴样式 */
.timeline {
	position: relative;
	padding-left: 20px;
}

.timeline::before {
	content: '';
	position: absolute;
	left: 8px;
	top: 0;
	width: 2px;
	height: 100%;
	background: #e5e7eb;
}

.timeline-item {
	position: relative;
	padding-bottom: 20px;
	margin-bottom: 4px;
}

.timeline-item:last-child {
	padding-bottom: 0;
}

/* 徽章样式 */
.badge {
	display: inline-block;
	padding: 2px 8px;
	border-radius: 12px;
	font-size: 12px;
	color: #333;
}
</style> 