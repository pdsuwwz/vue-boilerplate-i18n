export interface CustomRouteItem extends Omit<RouteRecordRaw, 'children'> {
  title?: string
  icon?: string
  children?: CustomRouteItem[]
}

