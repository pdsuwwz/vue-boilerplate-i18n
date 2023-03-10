import ModalDialog from '@/widgets/ModalDialog'
import LocaleInject from '@/widgets/LocaleInject'

export default {
  install (app: App<any>) {
    app.use(ModalDialog)
    app.use(LocaleInject)
  }
}
