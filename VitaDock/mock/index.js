/**
 * 智慧健康港 - 模拟数据入口文件
 */

// 导入首页数据
import {
  healthOverview,
  healthDashboard,
  todayExercises,
  workModes,
  healthTips,
  recentAchievements
} from './home-data.js';

// 导入其他模块数据
import { healthData, weeklyActivity, healthIndicators, sleepData } from './health-data.js';
import { deviceList, connectedDevice, deviceSettings } from './device-info.js';
import { userPoints, earnRules, redeemItems } from './points-data.js';

// 统一导出所有模拟数据
export default {
  // 首页数据
  home: {
    healthOverview,
    healthDashboard,
    todayExercises,
    workModes,
    healthTips,
    recentAchievements
  },
  
  // 健康数据
  health: {
    data: healthData,
    weeklyActivity,
    indicators: healthIndicators,
    sleep: sleepData
  },
  
  // 设备信息
  device: {
    list: deviceList,
    connected: connectedDevice,
    settings: deviceSettings
  },
  
  // 积分数据
  points: {
    user: userPoints,
    rules: earnRules,
    redeem: redeemItems
  }
}; 