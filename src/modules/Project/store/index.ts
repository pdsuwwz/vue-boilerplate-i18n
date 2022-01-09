import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import {
  getProjectList,
  getProjectDetail,
  createProject,
  updateTogglePublishStatus
} from '@/modules/Project/api'

import {
  projectDetail,
  projectList
} from '@/modules/Project/data'

export interface ProjectDetailProps {
  corpName: string | null
  createTime: string | null
  id: string | null
  isPublished: true
  name: string | null
  notes: string | null
}
export interface IProjectModule {
  demoList: any
  projectList: any[]
  projectDetail: ProjectDetailProps
}

export const useProjectStore = defineStore('Project', {
  state: (): IProjectModule => {
    return {
      demoList: {},
      projectList: [],
      projectDetail: {
        corpName: '',
        createTime: '',
        id: '',
        isPublished: true,
        name: '',
        notes: ''
      }
    }
  },
  getters: {
    demoList: (state) => state.demoList
  },
  actions: {
    async getSearchProjectByQuery (query) {
      await sleep(2000)
      const res = await getProjectList(query)
      return this.filterResponse(res, null, () => {})
    },
    async getProjectList(params = {}) {
      await sleep(2000)
      // const res = await getProjectList(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {
          projectList
        }
      }
      return this.filterResponse(res, () => {
        this.projectList = res.data.projectList
      }, () => {})
    },
    async createProject (params) {
      // const res = await createProject(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {}
      }
      await sleep(1000)
      return this.filterResponse(res, () => {
        this.projectList.push(JSON.parse(JSON.stringify(projectDetail)))
      })
    },
    async updateTogglePublishStatus ({ commit }, params) {
      const res = await updateTogglePublishStatus(params)
      return this.filterResponse(res, null)
    }
  }
})
