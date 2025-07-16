# vue-boilerplate-i18n

[![Deploy](https://github.com/pdsuwwz/vue-boilerplate-i18n/workflows/gh-pages/badge.svg)](https://github.com/pdsuwwz/vue-boilerplate-i18n/actions/workflows/deploy.yml)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pdsuwwz/vue-boilerplate-i18n/deploy.yml?branch=main)](https://github.com/pdsuwwz/vue-boilerplate-i18n/deployments/activity_log?environment=github-pages)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/vue-boilerplate-i18n?color=blue)](https://github.com/pdsuwwz/vue-boilerplate-i18n/blob/main/LICENSE)

🌏 Starter using Vite 7 + Vue 3.x + Pinia 3.x + TypeScript + i18n + UnoCSS + Unplugin + Element-Plus 2.x + ESLint v9 to fast build a prototyping

一个适用国际化多语言(i18n)扩展、帮助你快速开发 B 端 🚀🚀🚀 Vue3 + Vite6 + TS + Pinia 中小型后台管理系统的原型模板项目框架，集成 vue-i18n-next 💪


__[💻 Live Demo 在线体验](https://pdsuwwz.github.io/vue-boilerplate-i18n/#/zh-hans)__


## 🌱 不同版本
目前一共有以下五个不同技术栈的仓库模板在持续维护，请尝试后选择适合自己的模板使用

(推荐基于在[当前仓库](https://github.com/pdsuwwz/vue-boilerplate-i18n/generate)基础上二次开发)

- 💥 (推荐) [TS + Pinia + 🌐 低耦合(i18n)多语言 Vite6 + Vue3 + UnoCSS + Element-Plus2 + vue-i18n@next](https://github.com/pdsuwwz/vue-boilerplate-i18n)

- ⚡️ TS + Pinia 版 [Vite5 + Vue3 + TS + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/pinia-starter-ts)
- ⚡️ JS + Pinia 版 [Vite5 + Vue3 + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-pinia-starter)

- ⚡️ TS + Vuex4 版 [Vite6 + Vue3 + TS + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-ts-starter)
- ⚡️ JS + Vuex4 版 [Vite5 + Vue3 + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-starter)


## 🪄 使用不同的 UI 库

如果更偏好使用 [Naive UI](https://www.naiveui.com/) 作为 UI 库, 这里也为你准备了几个相应的模板项目，可在此基础上进行业务二次开发和定制：

- 🏄‍♂️ [Naive UI 基础模板，集成常用技术栈](https://github.com/pdsuwwz/vite-naive-template)
- 🗂️ [基于 Naive UI 的 Tab 多页签切换选项卡演示](https://github.com/pdsuwwz/vue3-tab-demo)


## 🎉 Features

* 支持 __Vite 7 + Vue 3 + TypeScript__
* UI 框架: __Element Plus 2.x__
* 状态管理: __Pinia 3.x__
* 自动导入，解放双手: __Unplugin Auto Import__
* 原子化 CSS: __UnoCSS__
* 单元测试框架: __Vitest__
* 代码规范化检测: __Husky + lint-staged__
* 内置 __ESlint(v9)__ 和 __Stylelint__, 可在此基础上扩充你想要的 Lint 配置规范
* 内置封装了一个**可能比较好用的** Axios , 需要时配合 Pinia Actions 一起食用
* 封装了 \<IconFont \/> 组件, 可直接使用 IconFont 图标
* 内置全局 **$ModalDialog** 插件, 支持使用 service 式地动态调用此插件来显示任意组件
* 内置 **vue-i18n-next**, 支持到 VueRouter 路由级别切换语言，可编写国际化配置文件及扩展其他语言
* 路由鉴权已帮你封装好，同时配合 Nprogress, 只需要修改 permission.ts 文件即可
* 自带一个模块化的组件开发环境，可按照 modules 目录解耦页面组件、路由组件、样式等文件
* 高度封装但不失灵活，内部抽象出了一个完整的业务流程供你参考，涉及三个核心页面：登录、列表和明细
* 节省你配置的时间，因此该项目的**轻量化**致使你只需要专心编写自己的业务代码即可


## 前置条件

* Vue 3.5.x
* Node >= 22.x
* Pnpm 9.x
* **VS Code 插件 `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**


## 运行效果

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154831095-32a64eee-01ce-49be-ad64-626f0d276559.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/168773776-2d43c03d-54dd-4364-8830-0bba65603ef4.png">


## 安装和运行

* 安装依赖

```bash
pnpm i
```

* 本地开发

```bash
pnpm dev
```


## 单元测试

* 执行单测

```bash
pnpm test
```

* 执行覆盖率测试

```bash
pnpm test:coverage
```


## 💡 提示

* 若 Husky 未生效，可能是由于未完成初始化，尝试执行以下命令进行初始化:

```bash
pnpm run prepare
```


## 😎 Awesome

* [awesome-vite](https://github.com/pdsuwwz/awesome-vite)


## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)

