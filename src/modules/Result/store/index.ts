/*
 * @Author: pdsuwwz pdsu.wwz@foxmail.com
 * @Date: 2022-01-09 19:11:21
 * @LastEditors: pdsuwwz pdsu.wwz@foxmail.com
 * @LastEditTime: 2022-08-15 14:30:55
 * @FilePath: /vue-boilerplate-i18n/src/modules/Result/store/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by pdsuwwz pdsu.wwz@foxmail.com, All Rights Reserved.
 */
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
    // demoList: (state) => state.demoList
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

