/**
 * 智慧健康港 - 设备信息模拟数据
 * 根据原型页面提供模拟数据
 */

// 可搜索到的设备列表
export const deviceList = [
  {
    id: '54:AF:97:E2:1B:C8',
    name: 'G23健康手环',
    rssi: -65, // 信号强度(dBm)
    available: true,
    selected: true // 默认选中的设备
  },
  {
    id: '00:1A:7D:DA:71:15',
    name: '未知设备',
    rssi: -82,
    available: true,
    selected: false
  },
  {
    id: 'BC:FF:4D:65:E0:A9',
    name: '员工手环0024',
    rssi: -75,
    available: true,
    selected: false
  }
];

// 已连接的设备信息
export const connectedDevice = {
  id: '54:AF:97:E2:1B:C8',
  name: 'G23健康手环',
  model: 'G23 Pro',
  battery: 87, // 电池电量百分比
  firmware: 'v2.1.4',
  lastSync: '2023-03-31 18:45:12', // 上次同步时间
  macAddress: '54:AF:97:E2:1B:C8',
  status: 'connected', // disconnected, connecting, connected
  connectionTime: '2023-03-30 08:15', // 首次连接时间
  sensors: [
    'accelerometer', // 加速度计
    'gyroscope',     // 陀螺仪
    'heartRate',     // 心率传感器
    'posture',       // 姿态传感器
    'temperature'    // 温度传感器
  ]
};

// 设备设置
export const deviceSettings = {
  notifications: {
    enabled: true,
    vibration: true,
    types: {
      calls: true,
      messages: true, 
      workAlerts: true,
      healthAlerts: true
    }
  },
  display: {
    brightness: 70, // 亮度(%)
    timeout: 10, // 熄屏超时(秒)
    orientation: 'auto', // auto, left, right
    clockFace: 'digital' // digital, analog, simple
  },
  workout: {
    autoDetect: true,
    reminderInterval: 45, // 活动提醒间隔(分钟)
    goals: {
      shoulderActivity: 85, // 肩部活动目标(度)
      dailyExercise: 30, // 每日锻炼目标(分钟)
      calories: 300 // 每日消耗卡路里目标
    }
  },
  workModes: [
    {
      id: 1,
      name: '高噪音环境',
      icon: 'volume-up',
      active: false,
      settings: {
        vibrationStrength: 'high',
        displayBrightness: 100,
        batteryMode: 'normal'
      }
    },
    {
      id: 2,
      name: '强光环境',
      icon: 'sun',
      active: true,
      settings: {
        vibrationStrength: 'medium',
        displayBrightness: 100,
        batteryMode: 'normal'
      }
    },
    {
      id: 3,
      name: '潮湿环境',
      icon: 'water-flash',
      active: false,
      settings: {
        vibrationStrength: 'medium',
        displayBrightness: 70,
        batteryMode: 'power-saving'
      }
    }
  ],
  system: {
    language: 'zh_CN',
    timeFormat: '24h',
    units: 'metric',
    firmware: {
      current: 'v2.1.4',
      available: 'v2.1.5',
      updateAvailable: true
    }
  }
};

// 配对状态
export const pairingStatus = {
  bluetoothEnabled: true,
  scanning: true,
  step: 2, // 1:开启蓝牙, 2:搜索设备, 3:完成配对
  deviceFound: true,
  errorMessage: null
}; 