/**
 * 智慧健康港 - 首页数据模拟
 * 根据首页原型页面提供模拟数据
 */

// 今日健康概览
export const healthOverview = {
  shoulderAngle: {
    value: 78,
    unit: '°',
    label: '肩部活动角度',
    progress: 70
  },
  exerciseTime: {
    value: 42,
    unit: '分钟',
    label: '肩部锻炼时间',
    progress: 60
  },
  recoveryRate: {
    value: 92,
    unit: '%',
    label: '恢复程度',
    progress: 92
  }
};

// 健康状态仪表盘
export const healthDashboard = {
  shoulderActivity: {
    value: 85,
    label: '肩部活动度'
  },
  stability: {
    value: 75,
    label: '稳定性'
  },
  comfort: {
    value: 90,
    label: '舒适度'
  }
};

// 今日运动记录
export const todayExercises = [
  {
    id: 1,
    name: '仰卧木棒肩屈训练',
    startTime: '08:20',
    endTime: '08:45',
    duration: 25,
    intensity: '中等强度',
    borderColor: 'blue'
  },
  {
    id: 2,
    name: '俯卧Y字伸展',
    startTime: '13:10',
    endTime: '13:35',
    duration: 25,
    intensity: '低强度',
    borderColor: 'green'
  }
];

// 工作环境模式
export const workModes = [
  {
    id: 1,
    name: '高噪音环境',
    icon: 'volume-up',
    active: false
  },
  {
    id: 2,
    name: '强光环境',
    icon: 'sun',
    active: true
  },
  {
    id: 3,
    name: '潮湿环境',
    icon: 'water-flash',
    active: false
  }
];

// 港口健康提示
export const healthTips = {
  date: '今日',
  content: '长时间高举手臂搬运货物，易导致肩部不适。建议每隔一小时进行2分钟肩部放松，如肩膀绕环、肩膀耸起再放松等小动作。'
};

// 近期成就
export const recentAchievements = [
  {
    id: 1,
    title: '肩部康复达人',
    description: '连续7天完成肩部康复训练',
    points: 50,
    icon: 'medal',
    color: 'yellow'
  },
  {
    id: 2,
    title: '活动度提升',
    description: '肩部活动角度提升15°',
    points: 30,
    icon: 'muscle',
    color: 'blue'
  }
]; 