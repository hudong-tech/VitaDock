/**
 * 智慧健康港 - 积分数据模拟
 * 根据原型页面提供模拟数据
 */

// 用户积分信息
export const userPoints = {
  total: 165, // 当前积分
  lifetime: 420, // 历史总积分
  level: 2, // 用户等级
  nextLevel: {
    points: 300, // 下一等级所需积分
    remainingPoints: 135 // 还需积分
  },
  history: [
    {
      date: '2023-03-31',
      action: '完成肩部锻炼',
      points: 10,
      category: 'exercise'
    },
    {
      date: '2023-03-31',
      action: '达成每日步数目标',
      points: 5,
      category: 'steps'
    },
    {
      date: '2023-03-30',
      action: '连续打卡奖励',
      points: 50,
      category: 'streak'
    },
    {
      date: '2023-03-30',
      action: '完成肩部锻炼',
      points: 10,
      category: 'exercise'
    },
    {
      date: '2023-03-29',
      action: '健康测试满分',
      points: 30,
      category: 'test'
    },
    {
      date: '2023-03-28',
      action: '完成肩部锻炼',
      points: 10,
      category: 'exercise'
    }
  ]
};

// 积分获取规则
export const earnRules = [
  {
    id: 1,
    name: '每日步数',
    description: '每完成2,000步',
    points: 5,
    icon: 'footprint',
    color: 'blue'
  },
  {
    id: 2,
    name: '健康运动',
    description: '每10分钟有效运动',
    points: 10,
    icon: 'run',
    color: 'green'
  },
  {
    id: 3,
    name: '优质睡眠',
    description: '每晚睡眠超过7小时',
    points: 15,
    icon: 'zzz',
    color: 'purple'
  },
  {
    id: 4,
    name: '连续打卡',
    description: '连续7天完成运动',
    points: 50,
    icon: 'award',
    color: 'yellow'
  }
];

// 可兑换项目
export const redeemItems = [
  {
    id: 1,
    name: '肩颈放松按摩',
    description: '舒缓长时间工作带来的肩颈紧张，缓解疲劳',
    points: 180,
    duration: 30, // 分钟
    rating: 4.9,
    location: '港区健康中心',
    available: true,
    category: 'massage',
    icon: 'massage',
    color: 'blue'
  },
  {
    id: 2,
    name: '中药热敷理疗',
    description: '缓解肌肉酸痛，促进血液循环，改善睡眠',
    points: 220,
    duration: 45, // 分钟
    rating: 4.8,
    location: '港区健康中心',
    available: true,
    category: 'therapy',
    icon: 'medicine-bottle',
    color: 'green'
  },
  {
    id: 3,
    name: '水疗SPA',
    description: '全身放松，改善疲劳，提高睡眠质量',
    points: 350,
    duration: 60, // 分钟
    rating: 5.0,
    location: '港区健康中心',
    available: false, // 积分不足
    category: 'spa',
    icon: 'water-flash',
    color: 'orange'
  },
  {
    id: 4,
    name: '职场压力疏导',
    description: '心理辅导，缓解工作压力，提高情绪管理能力',
    points: 250,
    duration: 50, // 分钟
    rating: 4.7,
    location: '港区健康中心',
    available: false, // 积分不足
    category: 'mental',
    icon: 'mental-health',
    color: 'red'
  }
];

// 用户最近的兑换记录
export const redeemHistory = [
  {
    id: 101,
    itemId: 1,
    date: '2023-03-15',
    name: '肩颈放松按摩',
    points: 180,
    status: 'completed', // pending, booked, completed, cancelled
    appointmentTime: '2023-03-16 14:30',
    location: '港区健康中心'
  },
  {
    id: 100,
    itemId: 2,
    date: '2023-03-01',
    name: '中药热敷理疗',
    points: 220,
    status: 'completed',
    appointmentTime: '2023-03-02 16:00',
    location: '港区健康中心'
  }
]; 