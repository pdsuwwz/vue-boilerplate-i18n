<template>
  <ElConfigProvider
    :locale="currentElementLang"
  >
    <router-view v-slot="{ Component }">
      <!-- https://github.com/johnsoncodehk/volar/issues/1405#issuecomment-1148123423 -->
      <Component :is="Component" />
    </router-view>
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { changeLocale, useLocale } from '@/locales/useLocale'

const route = useRoute()

const { currentElementLang } = useLocale()
watch(
  () => route.params,
  () => {
    if (route.name === '404') return

    changeLocale(route.params.locale)
  }
)
</script>

<style lang="scss">
@use "@/styles/index";
</style>
