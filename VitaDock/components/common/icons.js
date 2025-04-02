/**
 * 图标字典文件
 * 集中管理项目中使用的所有图标
 */

// 导航栏图标
export const NavIcons = {
  HOME: 'home-4-fill',
  HOME_OUTLINE: 'home-4-line',
  HEALTH: 'heart-pulse-line',
  HEALTH_FILL: 'heart-pulse-fill',
  POINTS: 'coin-line',
  POINTS_FILL: 'coin-fill',
  SETTINGS: 'settings-3-line',
  SETTINGS_FILL: 'settings-3-fill'
}

// 设备相关图标
export const DeviceIcons = {
  BLUETOOTH: 'bluetooth-line',
  BLUETOOTH_FILL: 'bluetooth-fill',
  WATCH: 'watch-line',
  WATCH_FILL: 'watch-fill',
  BATTERY: 'battery-fill',
  BATTERY_LOW: 'battery-low-fill',
  BATTERY_CHARGE: 'battery-charge-fill',
  LOADER: 'loader-line'
}

// 健康与运动相关图标
export const HealthIcons = {
  HEART: 'heart-line',
  HEART_FILL: 'heart-fill',
  PULSE: 'heart-pulse-line',
  STEPS: 'footprint-line',
  ENERGY: 'energy-line',
  ACTIVITY: 'run-line',
  SLEEP: 'zzz-line',
  WATER: 'water-flash-line',
  MUSCLE: 'muscle-line',
  TIME: 'time-line'
}

// 工作环境模式图标
export const WorkModeIcons = {
  NOISE: 'volume-up-line',
  BRIGHTNESS: 'sun-line',
  HUMIDITY: 'water-flash-line',
  SHIP: 'ship-line'
}

// 其他功能图标
export const OtherIcons = {
  NOTIFICATION: 'notification-line',
  INFO: 'information-line',
  CHECK: 'check-line',
  ARROW_RIGHT: 'arrow-right-s-line',
  ARROW_LEFT: 'arrow-left-s-line',
  PLUS: 'add-line',
  MINUS: 'subtract-line',
  WIFI: 'wifi-fill',
  GUIDE: 'guide-line',
  LIGHTBULB: 'lightbulb-flash-line',
  MEDAL: 'medal-line'
}

// 导出所有图标分类
export default {
  nav: NavIcons,
  device: DeviceIcons,
  health: HealthIcons,
  workMode: WorkModeIcons,
  other: OtherIcons
} 