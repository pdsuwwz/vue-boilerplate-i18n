<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar
        :fixed="false"
      >
        <NavigationSideLogo />
      </NavigationNavBar>
    </template>

    <template #side>
      <LayoutSection :title="_t('project.manageTitle')">
        <el-button
          type="primary"
          class="create-action"
          @click="handleCreateProject()"
        >
          <IconFont
            icon="iconestablish"
          />
          {{ _t('project.create') }}
        </el-button>
      </LayoutSection>
    </template>

    <template #content>
      <LayoutSection
        has-divider
        flex-content
      >
        <template #head>
          <SearchCorporation
            @select="handleSelectSearch"
          />
        </template>

        <ProjectTableHeader />
        <ProjectTableBody />
      </LayoutSection>
    </template>
  </LayoutArea>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
  reactive
} from 'vue'
import { useI18n } from 'vue-i18n'

import NavigationSideLogo from '@/components/Navigation/Side/SideLogo.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'

import ProjectForm from '@/modules/Project/components/ProjectForm.vue'
import ProjectTableHeader from '@/modules/Project/components/TableHeader.vue'
import ProjectTableBody from '@/modules/Project/components/TableBody.vue'

import SearchCorporation from '@/components/SearchSelect/SearchCorporation.vue'
import { sleep } from '@/utils/request'
import useCurrentInstance from '@/hooks/useCurrentInstance'

import { useProjectStore } from '@/modules/Project/store'

export default defineComponent({
  name: 'ProjectList',
  components: {
    NavigationNavBar,
    NavigationSideLogo,
    ProjectTableHeader,
    ProjectTableBody,
    SearchCorporation
  },
  // https://github.com/vuejs/vue-next/issues/3649
  setup () {
    const { proxy } = useCurrentInstance()
    const projectStore = useProjectStore()
    const localeInject = useI18n()

    function handleCreateProject () {
      const formData = reactive({
        name: '',
        corpName: '',
        notes: ''
      })

      proxy.$ModalDialog({
        title: localeInject.t('project.create'),
        top: '10vh',
        width: '50vw',
        showClose: true,
        closeOnClickModal: false,
        closeOnPressEscape: false,
        renderComponent: {
          data: formData,
          component: ProjectForm
        },
        async onConfirm (instance, context) {
          const isValid = await instance.validateRules()
          if (!isValid) return Promise.reject(new Error('error'))

          context.fullLoading = true
          const { error, data } = await projectStore.createProject(formData)

          context.fullLoading = false

          if (error) {
            return Promise.reject(new Error('error'))
          }

          projectStore.getProjectList()
        }
      })
    }
    function handleSelectSearch (name?: string) {
      console.log('搜索项目名: ', name)
      projectStore.getProjectList({
        kw: name
      })
    }
    handleSelectSearch()

    return {
      handleCreateProject,
      handleSelectSearch
    }
  }
})

</script>

<style lang="scss" scoped>
.create-action {
  padding: 10px 20px;
  width: 100%;
  font-weight: 600;
}
</style>
