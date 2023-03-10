import * as path from 'path'
import type { Plugin, ResolvedConfig } from 'vite'

export default function FullImportPlugin () {
  let config: ResolvedConfig

  return <Plugin>{
    name: 'FullImportElementPlus',
    async configResolved (conf) {
      config = conf
    },
    transform (code, id) {
      // 判断当前处理的是否是 src/main.ts
      if (path.join(config.root, 'src/main.ts') === id) {
        const ElementPlus = 'ElementPlus'

        // 引入 ElementPlus 和样式
        const importCode = `\nimport ${ElementPlus} from 'element-plus';\n`

        // 在 App 和 Fonts import 代码之间插入 ElementPlus 的 import 代码
        // code = code.slice(0, appIndex) + importCode + code.slice(appIndex, fontsIndex) + code.slice(fontsIndex)

        code = code.replace('const app', ($1) => importCode + $1)
        code = code.replace('.use(', ($1) => `.use(${ElementPlus})` + $1)

        return code
      }
      return code
    }
  }
}
