<template>
  <ElConfigProvider
    :locale="currentLocale"
  >
    <router-view v-slot="{ Component }">
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

<style lang="sass">
@import '@/styles/index.scss'
</style>
