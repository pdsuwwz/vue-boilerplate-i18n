import { App, createVNode, render, nextTick, AppContext, RendererElement, RendererNode, VNode, ComponentPublicInstance, VNodeProps, VNodeTypes, DefineComponent, Ref, ComponentInternalInstance } from 'vue'
import Modal from '@/widgets/ModalDialog/modal.vue'
import { DialogProps } from 'element-plus'

declare module 'vue' {
  export interface VNode {
    destroy?: any
  }
  interface ComponentCustomProperties {
    $ModalDialog: (options: PropsOptionsUnion) => VNode
  }
}

const extractData = (options: PropsOptionsMixed) => {
  const extractSlotComponents = (renderComponent: RenderComponent) => {
    const component: any = {}
    let componantData = {}

    if (renderComponent) {
      const { data } = renderComponent
      componantData = data
      component[renderComponent.component.name] = renderComponent.component
    }

    return {
      component,
      componantData
    }
  }

  const { component, componantData } = extractSlotComponents(options.renderComponent)
  return {
    component,
    componantData
  }
}

interface RenderComponent {
  data?: any
  component?: any
}
type ComponentOriginOptions = {
  title: string
  headerDescText?: string
  headerIcon?: string
  confirmText?: string
  maxHeight?: number | string | 'auto'
  dialogWidth?: string | '500px'
  disabledConfirmButton?: boolean | false
  hideFooter?: boolean | false
  renderComponent: RenderComponent
  onConfirm?: (instance: any, context: any) => Promise<any>
  // onCancel?: (instance: Ref<null>, context: ComponentInternalInstance) => Promise<any>
}

type Mutable = {
  -readonly [K in keyof DialogProps]: DialogProps[K]
}

type PropsOptionsUnion = ComponentOriginOptions | Mutable
type PropsOptionsMixed = ComponentOriginOptions & Mutable

export default {
  install (app: App<any>) {
    app.config.globalProperties.$ModalDialog = function (options: PropsOptionsMixed) {
      const {
        component,
        componantData
      } = extractData(options)

      let vm: VNode | null = createVNode(
        Modal,
        {
          ...options,
          componantData,
          components: component
        }
      )
      for (const name in component) {
        app.component(name, component[name])
      }

      let container: HTMLDivElement | null = document.createElement('div')

      // https://stackoverflow.com/questions/65163775/how-to-destroy-unmount-vue-js-3-components
      vm.destroy = () => {
        if (container) render(null, container)
        container = null
        vm = null
        for (const name in component) {
          delete app._context.components[name]
        }
      }

      vm.appContext = app._context

      render(vm, container)
      if (container.firstElementChild) {
        document.body.appendChild(container.firstElementChild)
      }

      nextTick(() => {
        if (!vm) return

        if (vm.component && vm.component.proxy) {
          (
            vm.component.proxy as ComponentPublicInstance<{
              visible: boolean
            }>
          ).visible = true
        }
      })

      return vm
    }
  }
}
