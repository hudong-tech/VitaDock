# 智慧健康港组件库使用说明

## 图标组件 (IconFont)

智慧健康港项目统一使用 IconFont 组件来管理图标，基于 Remix Icon 图标库。

### 使用方法

1. 导入组件和图标字典：

```javascript
import { IconFont, icons } from '@/components/common'
```

2. 在模板中使用组件：

```html
<icon-font 
  name="home-4-fill" 
  color="#1a5276" 
  size="40"
></icon-font>
```

或者使用图标字典：

```html
<icon-font 
  :name="icons.nav.HOME" 
  color="#1a5276" 
  size="40"
></icon-font>
```

### 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| name | String | - | 图标名称，必填，可以直接使用 Remix Icon 的图标名称或使用图标字典 |
| size | Number/String | 24 | 图标大小，单位为 rpx |
| color | String | - | 图标颜色，支持 CSS 颜色值 |
| customClass | String | - | 自定义附加 class |

## 图标字典

为了统一管理图标并提高代码可读性，项目中的所有图标已经被分类整理到图标字典中。

### 图标分类

图标字典按功能分为以下几个类别：

1. **导航图标 (NavIcons)**：用于底部导航栏的图标
2. **设备图标 (DeviceIcons)**：与设备相关的图标，如蓝牙、手表等
3. **健康图标 (HealthIcons)**：与健康和运动相关的图标
4. **工作模式图标 (WorkModeIcons)**：与工作环境相关的图标
5. **其他功能图标 (OtherIcons)**：其他通用功能图标

### 使用示例

```javascript
// 在 data 中引入图标字典
data() {
  return {
    icons
  }
}

// 使用图标字典中的图标
<icon-font :name="icons.nav.HOME" color="#1a5276" size="40"></icon-font>
<icon-font :name="icons.device.BLUETOOTH" color="#3b82f6" size="40"></icon-font>
<icon-font :name="icons.health.HEART" color="#ef4444" size="40"></icon-font>
```

### 图标选择逻辑示例

可以根据数据动态选择图标和颜色：

```javascript
computed: {
  getBatteryIcon() {
    const battery = this.deviceInfo.battery;
    if (battery <= 20) return this.icons.device.BATTERY_LOW;
    return this.icons.device.BATTERY;
  },
  getBatteryColor() {
    const battery = this.deviceInfo.battery;
    if (battery <= 20) return '#ef4444'; // 红色
    if (battery <= 50) return '#f59e0b'; // 黄色
    return '#10b981'; // 绿色
  }
}
```

## 添加新图标

如需添加新图标，请按照以下步骤操作：

1. 确认图标在 Remix Icon 图标库中是否存在
2. 在 `components/common/icons.js` 文件中找到对应分类
3. 添加新图标的常量和值

```javascript
// 添加新图标示例
export const HealthIcons = {
  // 现有图标
  HEART: 'heart-line',
  
  // 添加新图标
  MY_NEW_ICON: 'new-icon-name'
}
```

## 注意事项

1. 项目已全局注册 IconFont 组件，可直接使用，无需额外引入
2. 统一使用图标字典中的图标，便于后期维护和修改
3. 不要直接使用 class 方式引用 Remix Icon，而是通过 IconFont 组件使用 