import { App } from 'vue'
import setupPinia from './pinia'
import setupQuasar from './quasar'

// 插件管理（vue）
export function setupPlugins(app: App) {
    setupPinia(app)
    setupQuasar(app)
}
