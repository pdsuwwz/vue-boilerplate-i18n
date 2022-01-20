import { RouteRecordRaw } from 'vue-router'

export type CustomRouteItem = RouteRecordRaw & {
  title?: string
  icon?: string
  children?: Array<CustomRouteItem>
}
