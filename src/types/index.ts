import { RouteRecordRaw } from 'vue-router'

export interface CustomRouteItem extends Omit<RouteRecordRaw, 'children'> {
  title?: string
  icon?: string
  children?: CustomRouteItem[]
}

