<template>
	<view style="background-color: #f3f4f6; min-height: 100vh;">
		<view class="content-area p-4">
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px;">
				<view style="padding: 16px 16px 16px;">
					<view class="flex justify-between items-center" style="margin-bottom: 16px;">
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
				<view class="section-header" style="margin-bottom: 20px;">
					<h3 class="font-bold text-gray-700">今日运动记录</h3>
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
				<view class="section-header" style="margin-bottom: 20px;">
					<h3 class="font-bold text-gray-700">健康指标</h3>
				</view>
				
				<view class="health-indicators">
					<!-- 心率指标 -->
					<view style="margin-bottom: 24px;">
						<view class="flex justify-between items-center mt-4 mb-4">
							<view class="flex items-center mb-2">
								<view style="width: 32px; height: 32px; background-color: #FEE2E2; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
									<image src="/static/icons/health/heart-pulse-red.svg" style="width: 18px; height: 18px;" mode="aspectFit"></image>
								</view>
								<text class="text-sm text-gray-700">静息心率</text>
							</view>
							<text class="text-gray-700">{{ healthIndicators.heartRate.current }} {{ healthIndicators.heartRate.unit }}</text>
						</view>
						<view style="height: 4px; background-color: #F3F4F6; border-radius: 9999px; margin-bottom: 8px;">
							<view style="height: 4px; background-color: #F87171; border-radius: 9999px;" :style="{ width: healthIndicators.heartRate.progress + '%' }"></view>
						</view>
						<view class="flex justify-between">
							<text class="text-xs text-gray-500">偏低</text>
							<text class="text-xs text-gray-500">正常</text>
							<text class="text-xs text-gray-500">偏高</text>
						</view>
					</view>
					
					<!-- 睡眠指标 -->
					<view style="margin-bottom: 24px;">
						<view class="flex justify-between items-center mb-4">
							<view class="flex items-center mb-2">
								<view style="width: 32px; height: 32px; background-color: #EDE9FE; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
									<image src="/static/icons/health/zzz.svg" style="width: 18px; height: 18px;" mode="aspectFit"></image>
								</view>
								<text class="text-sm text-gray-700">昨晚睡眠</text>
							</view>
							<text class="text-gray-700">{{ healthIndicators.sleep.total.hours }}小时{{ healthIndicators.sleep.total.minutes }}分</text>
						</view>
						<view class="flex items-center" style="margin-bottom: 8px;">
							<view style="height: 16px; background-color: #8B5CF6; border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;" :style="{ width: healthIndicators.sleep.phases.deep.percent + '%' }"></view>
							<view style="height: 16px; background-color: #A78BFA;" :style="{ width: healthIndicators.sleep.phases.light.percent + '%' }"></view>
							<view style="height: 16px; background-color: #DDD6FE; border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;" :style="{ width: healthIndicators.sleep.phases.rem.percent + '%' }"></view>
						</view>
						<view class="flex text-xs text-gray-500">
							<view :style="{ width: healthIndicators.sleep.phases.deep.percent + '%' }">深睡 {{ healthIndicators.sleep.phases.deep.hours }}h{{ healthIndicators.sleep.phases.deep.minutes }}m</view>
							<view :style="{ width: healthIndicators.sleep.phases.light.percent + '%' }">浅睡 {{ healthIndicators.sleep.phases.light.hours }}h{{ healthIndicators.sleep.phases.light.minutes }}m</view>
							<view :style="{ width: healthIndicators.sleep.phases.rem.percent + '%' }">REM {{ healthIndicators.sleep.phases.rem.hours }}h{{ healthIndicators.sleep.phases.rem.minutes }}m</view>
						</view>
					</view>
					
					<!-- 压力水平 -->
					<view style="margin-bottom: 24px;">
						<view class="flex justify-between items-center mb-4">
							<view class="flex items-center mb-2">
								<view style="width: 32px; height: 32px; background-color: #DBEAFE; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
									<image src="/static/icons/health/mental.svg" style="width: 18px; height: 18px;" mode="aspectFit"></image>
								</view>
								<text class="text-sm text-gray-700">压力水平</text>
							</view>
							<text class="text-gray-700">{{ healthIndicators.stress.level }}</text>
						</view>
						<view style="height: 4px; background-color: #F3F4F6; border-radius: 9999px; margin-bottom: 8px;">
							<view style="height: 4px; background-color: #60A5FA; border-radius: 9999px;" :style="{ width: healthIndicators.stress.score + '%' }"></view>
						</view>
						<view class="flex justify-between">
							<text class="text-xs text-gray-500">放松</text>
							<text class="text-xs text-gray-500">中等</text>
							<text class="text-xs text-gray-500">紧张</text>
						</view>
					</view>
					
					<!-- 心情指数 -->
					<view>
						<view class="flex justify-between items-center mb-4">
							<view class="flex items-center mb-2">
								<view style="width: 32px; height: 32px; background-color: #FEF3C7; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
									<image src="/static/icons/health/emotion-happy.svg" style="width: 18px; height: 18px;" mode="aspectFit"></image>
								</view>
								<text class="text-sm text-gray-700">心情指数</text>
							</view>
							<text class="text-gray-700">{{ healthIndicators.mood.status }}</text>
						</view>
						<view style="height: 4px; background-color: #F3F4F6; border-radius: 9999px; margin-bottom: 8px;">
							<view style="height: 4px; background-color: #FBBF24; border-radius: 9999px;" :style="{ width: healthIndicators.mood.score + '%' }"></view>
						</view>
						<view class="flex justify-between">
							<text class="text-xs text-gray-500">低落</text>
							<text class="text-xs text-gray-500">平静</text>
							<text class="text-xs text-gray-500">愉悦</text>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 港口工作健康建议 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="flex items-center" style="margin-bottom: 20px;">
					<image src="/static/icons/health/ship.svg" style="width: 20px; height: 20px; margin-right: 6px; color: rgba(55, 65, 81, 1);" mode="aspectFit"></image>
					<h3 class="font-bold text-gray-700">港口工作健康建议</h3>
				</view>
				
				<view style="border-left: 4px solid #3b82f6; padding-left: 12px; padding-top: 8px; padding-bottom: 8px; margin-bottom: 12px;">
					<text class="text-sm text-gray-700 font-medium block">姿势提示</text>
					<text class="text-xs text-gray-500 block mt-1">今日检测到3次不良姿势，建议注意腰背挺直，避免长时间同一姿势。</text>
				</view>
				
				<view style="border-left: 4px solid #10b981; padding-left: 12px; padding-top: 8px; padding-bottom: 8px;">
					<text class="text-sm text-gray-700 font-medium block">恢复建议</text>
					<text class="text-xs text-gray-500 block mt-1">下班后建议进行10-15分钟的肩颈拉伸，缓解工作带来的肌肉紧张。</text>
				</view>
			</view>
			
			<!-- 晚间饮食建议 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="flex items-center" style="margin-bottom: 20px;">
					<image src="/static/icons/health/restaurant.svg" style="width: 20px; height: 20px; margin-right: 6px; color: rgba(55, 65, 81, 1);" mode="aspectFit"></image>
					<h3 class="font-bold text-gray-700">晚间饮食建议</h3>
				</view>
				
				<view style="border-left: 4px solid #f59e0b; padding-left: 12px; padding-top: 8px; padding-bottom: 8px; margin-bottom: 12px;">
					<text class="text-sm text-gray-700 font-medium block">肩部肌肉修复餐</text>
					<text class="text-xs text-gray-500 block mt-1">工作后适量补充蛋白质，建议食用鱼肉、鸡胸肉等优质蛋白，搭配菠菜等富含镁的蔬菜，有助于肩部肌肉恢复。</text>
				</view>
				
				<view style="border-left: 4px solid #14b8a6; padding-left: 12px; padding-top: 8px; padding-bottom: 8px;">
					<text class="text-sm text-gray-700 font-medium block">注意事项</text>
					<text class="text-xs text-gray-500 block mt-1">晚餐宜清淡，避免过度摄入高油脂食物，不建议饮用咖啡等刺激性饮料，以免影响睡眠质量。</text>
				</view>
			</view>
			
			<!-- 肩部康复训练处方 -->
			<view class="data-card bg-white mb-4" style="background-color: white; border-radius: 12px; padding: 20px 16px;">
				<view class="flex items-center" style="margin-bottom: 20px;">
					<image src="/static/icons/health/heart-pulse.svg" style="width: 20px; height: 20px; margin-right: 6px; color: rgba(55, 65, 81, 1);" mode="aspectFit"></image>
					<h3 class="font-bold text-gray-700">肩部康复训练处方</h3>
				</view>
				
				<view style="background-color: #f9fafb; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
					<view class="flex items-center mb-2">
						<view style="width: 32px; height: 32px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
							<text class="font-bold" style="color: #374151;">1</text>
						</view>
						<text class="font-medium text-gray-700">木棒肩部上举 × 3组，每组12次</text>
					</view>
					<text class="text-xs text-gray-500 block" style="margin-left: 40px;">双手握木棒，肩宽站立，缓慢将木棒从胸前上举过头顶，保持肩胛骨稳定。</text>
				</view>
				
				<view style="background-color: #f9fafb; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
					<view class="flex items-center mb-2">
						<view style="width: 32px; height: 32px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
							<text class="font-bold" style="color: #374151;">2</text>
						</view>
						<text class="font-medium text-gray-700">Y字伸展 × 3组，每组10次</text>
					</view>
					<text class="text-xs text-gray-500 block" style="margin-left: 40px;">俯卧在瑜伽垫上，双手伸直呈Y字形，缓慢上举双臂，感受肩胛骨收紧。</text>
				</view>
				
				<view style="background-color: #f9fafb; border-radius: 8px; padding: 12px;">
					<view class="flex items-center mb-2">
						<view style="width: 32px; height: 32px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
							<text class="font-bold" style="color: #374151;">3</text>
						</view>
						<text class="font-medium text-gray-700">肩内外旋 × 3组，每组15次</text>
					</view>
					<text class="text-xs text-gray-500 block" style="margin-left: 40px;">侧卧，上臂与身体贴合，肘关节弯曲90度，缓慢进行肩关节内外旋活动。</text>
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
			dailyExercises
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