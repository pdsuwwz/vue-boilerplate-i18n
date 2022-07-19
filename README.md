# vue-boilerplate-i18n

[![Deploy](https://github.com/pdsuwwz/vue-boilerplate-i18n/workflows/gh-pages/badge.svg)](https://github.com/pdsuwwz/vue-boilerplate-i18n/actions/workflows/deploy.yml)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pdsuwwz/vue-boilerplate-i18n/gh-pages/main)](https://github.com/pdsuwwz/vue-boilerplate-i18n/deployments/activity_log?environment=github-pages)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/vue-boilerplate-i18n?color=blue)](https://github.com/pdsuwwz/vue-boilerplate-i18n/blob/main/LICENSE)

🌏  Starter using Vite + Pinia + TypeScript + i18n + Element-Plus to fast build a prototyping


__[🚀 在线演示](https://pdsuwwz.github.io/vue-boilerplate-i18n/#/zh-hans)__


## 🎉 Features

* 支持 __Vue 3 + Vite 2 + TypeScript__
* UI 框架: __Element Plus 2.x__
* 状态管理: __Pinia__
* 单元测试框架: __Jest__
* 内置 __ESlint__ 和 __Stylelint__, 可在此基础上扩充你想要的 Lint 配置规范
* 内置封装了一个**可能比较好用的** Axios , 需要时配合 Vuex Actions 一起食用
* 封装了 \<IconFont \/> 组件, 可直接使用 IconFont 图标
* 内置全局 **$ModalDialog** 插件, 支持使用 service 式地动态调用此插件来显示任意组件
* 内置 **vue-i18n-next**, 支持到 VueRouter 路由级别切换语言，可编写国际化配置文件及扩展其他语言
* 路由鉴权已帮你封装好，同时配合 Nprogress, 只需要修改 permission.ts 文件即可
* 自带一个模块化的组件开发环境，可按照 modules 目录解耦页面组件、路由组件、样式等文件
* 高度封装但不失灵活，内部抽象出了一个完整的业务流程供你参考，涉及三个核心页面：登录、列表和明细
* 节省你配置的时间，因此该项目的**轻量化**致使你只需要专心编写自己的业务代码即可


## Screenshot

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154831095-32a64eee-01ce-49be-ad64-626f0d276559.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/168773776-2d43c03d-54dd-4364-8830-0bba65603ef4.png">


## Environment Support

* Vue 3.2.x
* Node >= 14.19.x

## Install

Run `pnpm i` to install the dependencies.

```bash
pnpm i
```

## Run

Run `pnpm dev` to start the frontend dev server.

```bash
pnpm dev
```

## Test

Unit Testing.

```bash
pnpm test
```

Test code coverage.

```bash
pnpm test:coverage
```

## 😎 Awesome

* [awesome-vite](https://github.com/pdsuwwz/awesome-vite)


## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)

