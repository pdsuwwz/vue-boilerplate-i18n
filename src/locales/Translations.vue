<template>
  <el-dropdown
    class="translations-box"
    :class="{
      'is-dark': dark
    }"
    trigger="click"
    popper-class="translations-box"
    @command="handleChange"
  >
    <span class="icon-outer">
      <!-- Translations<el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon> -->
      <LogoIcon
        :dark="dark"
      />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(localeItem, index) in localesList"
          :key="index"
          :command="localeItem"
          :disabled="currentLocale === localeItem.localeCode"
        >
          <span class="custom-dropdown-item">
            {{ localeItem.localeName }}
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { localesMapping } from '@/locales/config'
import { useUserAccountStore } from '@/modules/UserAccount/store'

import { useRoute, useRouter } from 'vue-router'

import { ArrowDown } from '@element-plus/icons-vue'
import LogoIcon from '@/locales/LogoIcon.vue'
import { changeLocale } from '@/locales/useLocale'

export default defineComponent({
  name: 'TranslationsBox',
  components: {
    ArrowDown,
    LogoIcon
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const userAccountStore = useUserAccountStore()
    const localesList = ref(localesMapping)
    const currentLocale = computed(() => userAccountStore.locale)

    const handleChange = (targetLocaleItem) => {
      setTimeout(() => {
        const { localeCode } = targetLocaleItem
        router.replace({
          params: {
            ...route.params,
            locale: localeCode
          }
        })
        changeLocale(localeCode)
      })
    }

    return {
      localesList,
      currentLocale,
      handleChange
    }
  }
})
</script>
<style lang="scss">
.translations-box {
  display: flex;
  align-items: center;
  color: #fff;
  cursor: initial;
  user-select: none;

  &.is-dark {
    color: #495164;
  }

  .icon-outer {
    display: flex;
    align-items: center;

    & > * {
      transition: 0.3s;
    }

    &:hover > * {
      color: $color-primary;
    }
  }

  .custom-dropdown-item {
    white-space: nowrap;
  }
}
</style>
