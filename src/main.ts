import 'virtual:uno.css'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupI18n } from '@/locales'

import App from '@/App.vue'

import '@/assets/fonts'

import Mixin from '@/mixins'
import Widgets from '@/widgets'

const app = createApp(App)

function setupPlugins() {
  app
    .use(Widgets)
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
