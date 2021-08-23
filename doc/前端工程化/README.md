## 前端工程化

```
前端工程化是使用软件工程的技术和方法来进行前端的开发流程、技术、工具、经验等规范化、标准化，
其主要目的为了提高开发过程中的开发效率，减少不必要的重复工作时间。
```

### 研发流程
```
技术选型
初始化
开发
本地测试
代码提交
编译、打包、构建
部署
集成测试
发布上线
监控运维
```

### 代码托管
```
GitHub

Gitee

GitLab
```

### Node.JS
`七天学会NodeJS`：[七天学会NodeJS](https://nqdeng.github.io/7-days-nodejs/)

#### 包管理
```
cnpm
npm
yarn
npx
```

#### 开发框架
```
Express
Koa
Egg
```



### 开发框架

#### CSS 框架
`Tailwind CSS`：[Tailwind CSS文档](https://www.tailwindcss.cn/)

`bilibili视频`：[Tailwind CSS 安装步骤｜Vanilla Vue React](https://www.bilibili.com/video/BV1fp4y1x752)

#### JavaScript 框架
`React`：[React文档](https://react.docschina.org/)

### 封装库

#### 组件库
`Ant Design（React）`：[Ant Design（React）文档](https://ant-design.gitee.io/index-cn)

#### 数据可视化
`AntV`：[AntV文档](https://antv.gitee.io/zh)

#### 组件（插件）
```
富文本编辑器
弹窗
轮播图
```

#### 工具库
```
jQuery
Lodash
Axios
时间处理 Moment.js
...
```

#### 字体图标库
```
 IconFont
```

### 脚手架
```
Vue CLI

create-react-app

✅ Yeoman
```

### 前端架构设计
`MVVM`：[MVC，MVP 和 MVVM 的图示](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

`SPA（单页面应用）和MPA（多页面应用）`：[SPA（单页面应用）和MPA（多页面应用）](https://www.jianshu.com/p/a02eb15d2d70)

#### 服务端渲染
```
Next.js（React）https://www.nextjs.cn/docs

Nuxt.js（Vue）
```

#### BFF
```
Backend For Frontend（服务于前端的后端），就是服务器设计 API 时会考虑前端的使用，
并在服务端直接进行业务逻辑的处理。
```
`BFF`：[BFF](https://www.jianshu.com/p/eb1875c62ad3)

#### 微前端
```
💬 描述：将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的小块，从而解决庞大的一整块后端服务带来的变更与扩展方面的限制。

📚 资源：https://zhuanlan.zhihu.com/p/96464401

qiankun

single-spa
```


### CSS in JS

#### CSS 模块化
`CSS Modules`：[CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

`styled-components`：[styled-components](https://github.com/hengg/styled-components-docs-zh)


### 开发调试
```
💬 描述：本地开发时热更新，提升开发效率。

webpack-dev-server

serve
```

#### 内网穿透
```
💬 描述：将内网外网通过 nat 隧道打通，让内网的网站、数据让外网可以访问。

Ngrok https://ngrok.com/(国外)

NATAPP https://natapp.cn/(国内)
```

### CSS 预编译
```
Sass
https://www.bilibili.com/video/BV17W411w7nL
https://www.sass.hk/docs/
Less
PostCSS
Stylus
```

### 测试

#### 测试分类
```
⭐️ UT 单元测试
SIT 系统集成测试
E2E 端到端测试
UAT 用户验收测试
```

#### Mock
```
mock http://mockjs.com/
```

#### 测试框架
```
✅ Jest

Enzyme

✅ Puppeteer（Headless Browser）

Mocha

Jasmine
```

### 代码质量

#### 开发规范
```
💬 描述：依照规范写出的代码会更加合理。

📚 资源：Airbnb 代码规范 https://github.com/BingKui/javascript-zh

CSS Style Guide

JavaScript Style Guide
```

#### 类型校验
```
TypeScript
```

#### 代码检查
```
ESLint
StyleLint
```

#### 代码风格
```
💬 描述：根据配置自动格式化代码，统一格式。

Prettier
```

#### 提交规范
```
约定式提交
提交检查
💬 描述：在提交代码时触发一些操作，比如检查代码的风格等。

pre-commit

husky
```

### 构建工具

#### 自动化构建
```
💬 描述：按照配置好的流程自动打包构建项目，提高团队的开发效率，降低项目的维护难度。

Gulp

✅ npm script

Grunt
```

#### 打包工具
```
💬 描述：将各种零散的📚 资源文件打包为可在浏览器等环境运行的代码。

⭐️ Webpack

✅ Rollup

✅ Vite

Parcel

Snowpack
```

#### CI / CD
`bilibili视频`：[CI/CD到底是什么？十分钟理解企业级DevOps](https://www.bilibili.com/video/BV1zf4y127vu)
```
💬 描述：通过在应用开发阶段引入自动化来频繁向客户交付应用。
GitLab CI
✅ Jenkins
```

### 部署

####  Web 服务器

##### Nginx
```
💬 描述：高性能的 HTTP 和反向代理 web 服务器。

📚 资源：腾讯云动手实验室 https://cloud.tencent.com/developer/labs/gallery

反向代理

解决跨域

改写请求
```

##### 容器
```
✅ Docker
💬 描述：容器是一个标准化的软件单元，它将代码及其所有依赖关系打包，以便应用程序从一个计算环境可靠快速地运行到另一个计算环境。Docker容器镜像是一个轻量的独立的可执行的软件包。包含程序运行的时候所需的一切：代码，运行时间，系统工具，系统库和设置。

📚 资源：Docker 从入门到实践 https://vuepress.mirror.docker-practice.com/

Dockerfile

Kubernetes
部署策略
全量发布
蓝绿部署
滚动发布
灰度发布

监控告警
前端埋点
错误监控
性能监控
行为监控
```
