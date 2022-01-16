import { createApp } from 'vue'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupI18n } from '@/locales'

import App from '@/App.vue'

import ElementPlus from 'element-plus'
import Fonts from '@/assets/fonts'

import GlobalComponents from '@/components'
import Mixin from '@/mixins'
import Widgets from '@/widgets'

const app = createApp(App)

function setupPlugins() {
  app
    .use(ElementPlus)
    .use(GlobalComponents)
    .use(Widgets)
    .use(Fonts)
    .mixin(Mixin)
}

async function setupApp() {
  setupStore(app)
  await setupI18n(app)
  await setupRouter(app)

  app.mount('#app')
}

setupPlugins()
setupApp()

export default app
