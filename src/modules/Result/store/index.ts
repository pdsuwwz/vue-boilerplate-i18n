import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import { getDemoTestList } from '@/modules/Result/api'

import { overviewMock } from '@/modules/Result/data'

interface OverviewOptions {
  title: string | any
  content: string | any
}

export interface IResultModule {
  demoList: any
  overviewData: OverviewOptions
}

export const useResultStore = defineStore('Result', {
  state: (): IResultModule => {
    return {
      demoList: {},
      overviewData: {
        title: '',
        content: ''
      }
    }
  },
  getters: {
    demoList: (state) => state.demoList
  },

  actions: {
    async getResultOverview ({ commit }, query) {
      // const res = await getDemoTestList(query)
      // return this.filterResponse(res, null, () => {})
      await sleep(800)
      const res = {
        msg: 'ok',
        error: 0,
        data: overviewMock
      }

      return this.filterResponse(res, ({ data }) => {
        this.overviewData = data
      }, () => {})
    }
  }
})

