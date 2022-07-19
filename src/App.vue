<template>
  <ElConfigProvider
    :locale="currentLocale"
  >
    <router-view v-slot="{ Component }">
      <!-- https://github.com/johnsoncodehk/volar/issues/1405#issuecomment-1148123423 -->
      <Component :is="Component" />
    </router-view>
  </ElConfigProvider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useRoute } from 'vue-router'
import { defineComponent, watch } from 'vue'

import { changeLocale, useLocale } from '@/locales/useLocale'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup () {
    const route = useRoute()

    const currentLocale = useLocale()

    watch(
      () => route.params,
      () => {
        if (route.name === '404') return

        changeLocale(route.params.locale || 'en')
      }
    )

    return {
      currentLocale
    }
  }
})
</script>

<style lang="scss">
@use "@/styles/index.scss";
</style>
