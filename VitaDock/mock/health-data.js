/**
 * 智慧健康港 - 健康数据模拟
 * 根据原型页面提供模拟数据
 */

// 当日健康数据汇总
export const healthData = {
  // 肩部健康指标
  shoulderActivity: 78, // 肩部活动角度（度）
  shoulderStability: 85, // 肩部稳定性（百分比）
  shoulderComfort: 90, // 肩部舒适度（百分比）
  
  // 基本健康统计
  exerciseMinutes: 42, // 每日锻炼分钟数
  completedDays: 5, // 本周达标天数
  caloriesBurned: 325, // 消耗卡路里
  
  // 今日运动目标完成情况
  goalsCompleted: 2, // 已完成的目标数
  totalGoals: 3, // 总目标数
  goalProgress: {
    shoulderExercise: 85, // 肩部锻炼目标完成率（百分比）
    activityTime: 70, // 活动时间目标完成率（百分比）
    calorieBurn: 65 // 热量消耗目标完成率（百分比）
  }
};

// 每周活动记录
export const weeklyActivity = [
  { day: '一', date: '03-25', shoulderAngle: 65, exerciseMinutes: 30 },
  { day: '二', date: '03-26', shoulderAngle: 68, exerciseMinutes: 35 },
  { day: '三', date: '03-27', shoulderAngle: 70, exerciseMinutes: 40 },
  { day: '四', date: '03-28', shoulderAngle: 72, exerciseMinutes: 38 },
  { day: '五', date: '03-29', shoulderAngle: 75, exerciseMinutes: 45 },
  { day: '六', date: '03-30', shoulderAngle: 76, exerciseMinutes: 40 },
  { day: '日', date: '03-31', shoulderAngle: 78, exerciseMinutes: 42 }
];

// 今日运动记录
export const dailyExercises = [
  {
    id: 1,
    name: '仰卧木棒肩屈训练',
    startTime: '08:20',
    endTime: '08:45',
    duration: 25,
    intensity: '中等强度',
    calories: 65,
    type: 'shoulder',
    improvement: {
      metric: '肩部活动度',
      value: '15%'
    },
    icon: 'muscle'
  },
  {
    id: 2,
    name: '俯卧Y字伸展',
    startTime: '13:10',
    endTime: '13:35',
    duration: 25,
    intensity: '低强度',
    calories: 40,
    type: 'recovery',
    improvement: {
      metric: '肩胛带稳定性',
      value: '25%'
    },
    icon: 'health'
  },
  {
    id: 3,
    name: '下午码头作业',
    startTime: '15:00',
    endTime: '17:30',
    duration: 150,
    intensity: '中高强度',
    calories: 220,
    type: 'work',
    improvement: {
      metric: '活动幅度',
      value: '较大'
    },
    progressPercent: 85,
    icon: 'ship'
  }
];

// 健康指标数据
export const healthIndicators = {
  heartRate: {
    current: 62,
    unit: 'bpm',
    status: 'normal', // low, normal, high
    range: {
      min: 50,
      max: 100
    },
    progress: 40 // 进度百分比
  },
  sleep: {
    total: {
      hours: 7,
      minutes: 32
    },
    phases: {
      deep: {
        hours: 1,
        minutes: 52,
        percent: 25
      },
      light: {
        hours: 3,
        minutes: 25,
        percent: 45
      },
      rem: {
        hours: 2,
        minutes: 15,
        percent: 30
      }
    },
    quality: 'good' // poor, normal, good
  },
  stress: {
    level: '中等', // 放松, 中等, 紧张
    score: 55, // 0-100
    status: 'normal' // low, normal, high
  },
  mood: {
    status: '愉悦', // 低落, 平静, 愉悦
    score: 80, // 0-100
    trend: 'rising' // falling, stable, rising
  }
};

// 睡眠数据详情
export const sleepData = {
  lastNight: {
    bedTime: '22:45',
    wakeTime: '06:17',
    totalTime: 452, // 分钟
    deepSleep: 112, // 分钟
    lightSleep: 205, // 分钟
    remSleep: 135, // 分钟
    awakeTime: 15, // 分钟
    quality: 87 // 百分比
  },
  weeklyAverage: {
    totalTime: 438, // 分钟
    deepSleep: 105, // 分钟
    lightSleep: 215, // 分钟
    remSleep: 118, // 分钟
    quality: 82 // 百分比
  }
}; 