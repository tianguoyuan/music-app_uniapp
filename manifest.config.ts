// manifest.config.ts
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import path from 'node:path'
import { loadEnv } from 'vite'

// 获取环境变量的范例
const env = loadEnv(process.env.NODE_ENV!, path.resolve(process.cwd(), 'env'))
const {
  VITE_APP_TITLE,
  VITE_APP_DESC,
  VITE_UNI_APPID,
  VITE_WX_APPID,
  VITE_APP_PUBLIC_BASE,
  VITE_FALLBACK_LOCALE,
} = env

export default defineManifestConfig({
  name: VITE_APP_TITLE,
  appid: VITE_UNI_APPID,
  description: VITE_APP_DESC,
  versionName: '1.0.0',
  versionCode: '100',
  transformPx: false,
  locale: VITE_FALLBACK_LOCALE, // 'zh-Hans'
  h5: {
    router: {
      base: VITE_APP_PUBLIC_BASE,
    },
  },
  /* 5+App特有相关 */
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    compatible: {
      ignoreVersion: true,
    },
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0,
    },
    /* 模块配置 */
    modules: {},
    /* 应用发布信息 */
    distribute: {
      /* android打包配置 */
      android: {
        minSdkVersion: 30,
        targetSdkVersion: 30,
        abiFilters: ['armeabi-v7a', 'arm64-v8a'],
        permissions: [
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>',
          '<uses-permission android:name="android.permission.VIBRATE"/>',
          '<uses-permission android:name="android.permission.READ_LOGS"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-feature android:name="android.hardware.camera.autofocus"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.CAMERA"/>',
          '<uses-permission android:name="android.permission.GET_ACCOUNTS"/>',
          '<uses-permission android:name="android.permission.READ_PHONE_STATE"/>',
          '<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.WAKE_LOCK"/>',
          '<uses-permission android:name="android.permission.FLASHLIGHT"/>',
          '<uses-feature android:name="android.hardware.camera"/>',
          '<uses-permission android:name="android.permission.WRITE_SETTINGS"/>',
        ],
      },
      /* ios打包配置 */
      ios: {},
      /* SDK配置 */
      sdkConfigs: {},
      /* 图标配置 */
      icons: {
        android: {
          hdpi: 'unpackage/res/icons/72x72.png',
          xhdpi: 'unpackage/res/icons/96x96.png',
          xxhdpi: 'unpackage/res/icons/144x144.png',
          xxxhdpi: 'unpackage/res/icons/192x192.png',
        },
        ios: {
          appstore: 'unpackage/res/icons/1024x1024.png',
          ipad: {
            app: 'unpackage/res/icons/76x76.png',
            'app@2x': 'unpackage/res/icons/152x152.png',
            notification: 'unpackage/res/icons/20x20.png',
            'notification@2x': 'unpackage/res/icons/40x40.png',
            'proapp@2x': 'unpackage/res/icons/167x167.png',
            settings: 'unpackage/res/icons/29x29.png',
            'settings@2x': 'unpackage/res/icons/58x58.png',
            spotlight: 'unpackage/res/icons/40x40.png',
            'spotlight@2x': 'unpackage/res/icons/80x80.png',
          },
          iphone: {
            'app@2x': 'unpackage/res/icons/120x120.png',
            'app@3x': 'unpackage/res/icons/180x180.png',
            'notification@2x': 'unpackage/res/icons/40x40.png',
            'notification@3x': 'unpackage/res/icons/60x60.png',
            'settings@2x': 'unpackage/res/icons/58x58.png',
            'settings@3x': 'unpackage/res/icons/87x87.png',
            'spotlight@2x': 'unpackage/res/icons/80x80.png',
            'spotlight@3x': 'unpackage/res/icons/120x120.png',
          },
        },
      },
    },
  },
  /* 快应用特有相关 */
  quickapp: {},
  /* 小程序特有相关 */
  'mp-weixin': {
    appid: VITE_WX_APPID,
    setting: {
      urlCheck: false,
    },
    usingComponents: true,
    // __usePrivacyCheck__: true,
  },
  'mp-alipay': {
    usingComponents: true,
    styleIsolation: 'shared',
  },
  'mp-baidu': {
    usingComponents: true,
  },
  'mp-toutiao': {
    usingComponents: true,
  },
  uniStatistics: {
    enable: false,
  },
  vueVersion: '3',
})
