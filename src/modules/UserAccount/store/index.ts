/*
 * @Author: pdsuwwz pdsu.wwz@foxmail.com
 * @Date: 2022-01-09 19:11:21
 * @LastEditors: pdsuwwz pdsu.wwz@foxmail.com
 * @LastEditTime: 2022-08-15 14:30:30
 * @FilePath: /vue-boilerplate-i18n/src/modules/UserAccount/store/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by pdsuwwz pdsu.wwz@foxmail.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { store } from '@/store'

import { sleep } from '@/utils/request'
import {
  login,
  logout,
  getUserInfoData,
  updateChangeLanguage
} from '@/modules/UserAccount/api'
import { changeLocale } from '@/locales/useLocale'

export interface IUserAccountState {
  locale: string
  demoList: any
  userInfo: any
}

export const useUserAccountStore = defineStore('UserAccount', {
  state: (): IUserAccountState => {
    return {
      locale: 'en',
      demoList: {},
      userInfo: {}
    }
  },
  getters: {
    // demoList: state => state.demoList
  },
  actions: {
    async GetModuleTestList (params) {
      // TODO: 模拟响应时间
      await sleep(1000)
      // TODO: 模拟 api
      // const result = await getDemoTestList(params)
      const result = {
        test: 'ok'
      }
      this.demoList = result
      return result
    },
    async updateChangeLanguage (params) {
      const result = await updateChangeLanguage(params)
      return this.filterResponse(result)
    },
    setLanguage (data) {
      this.locale = data.locale
    },
    async login (data) {
      await sleep(1000)
      const res = await login(data)
      return this.filterResponse(res, null, () => {})
    },
    async logout () {
      const res = await logout()
      return this.filterResponse(res, null, () => {})
    },
    async getUserInfo () {
      const res = await getUserInfoData()
      await sleep(1000)
      return this.filterResponse(res, ({ data }) => {
        this.userInfo = data
      })
    }
  }
})

// Need to be used outside the setup
export function useUserAccountStoreWithOut() {
  return useUserAccountStore(store)
}
