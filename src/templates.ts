export interface ResumeTemplate {
  id: string;
  name: string;
  content: string;
}

const codeBlock = '\`\`\`';

export const templates: ResumeTemplate[] = [
  {
    id: 'classic',
    name: '经典简历模板',
    content: `# 张三

## 个人信息
- **电话**: 138-0000-0000
- **邮箱**: zhangsan@example.com
- **地址**: 北京市朝阳区
- **GitHub**: [github.com/zhangsan](https://github.com/zhangsan)

---

## 工作经历

### 高级前端工程师
**某科技有限公司** | 2022.06 - 至今

- 负责公司核心产品的前端架构设计与开发
- 带领 5 人团队完成多个大型项目的交付
- 优化构建流程，将打包时间缩短 60%
- 推动团队技术栈升级，引入微前端架构

### 前端工程师
**某互联网公司** | 2020.03 - 2022.05

- 参与电商平台前端开发，日活用户 100 万+
- 开发可复用组件库，提升团队开发效率 40%
- 负责性能优化，首屏加载时间从 3s 降至 1.2s

---

## 教育背景

### 计算机科学与技术 · 本科
**某知名大学** | 2016.09 - 2020.06

- GPA: 3.8/4.0
- 获得校级一等奖学金两次

---

## 专业技能

| 技能类别 | 详细内容 |
|---------|---------|
| 前端框架 | React, Vue, Next.js, Nuxt.js |
| 编程语言 | TypeScript, JavaScript, Node.js |
| 样式方案 | CSS, SCSS, Tailwind CSS, Styled Components |
| 工程化 | Vite, Webpack, ESLint, Jest, Cypress |
| 其他 | Git, Docker, CI/CD, 性能优化 |

---

## 项目经历

- [x] 企业级后台管理系统（React + TypeScript）
- [x] 移动端 H5 电商平台（Vue 3 + Vite）
- [x] 数据可视化大屏（ECharts + D3.js）
- [ ] 开源组件库建设中
`,
  },
  {
    id: 'minimal',
    name: '简约简历模板',
    content: `# 李四
*前端开发工程师*

📱 139-1234-5678 · ✉️ lisi@email.com · 🔗 [linkedin.com/in/lisi](https://linkedin.com/in/lisi)

---

### 工作经验

**高级前端开发** · ABC 科技 · 2021 - 现在

> 负责产品从 0 到 1 的前端搭建，主导技术选型与架构设计

- 使用 React + TypeScript 构建 SaaS 平台，服务 500+ 企业客户
- 设计并实现前端监控系统，错误捕获率达 99%
- 优化 Webpack 构建配置，构建速度提升 50%

**前端开发** · XYZ 互联网 · 2019 - 2021

- 参与移动端 H5 页面开发，月活用户 200 万
- 维护内部 UI 组件库，覆盖 30+ 业务场景

---

### 技术栈

**熟练掌握**
React · TypeScript · Node.js · Webpack · Vite

**有使用经验**
Vue · Next.js · GraphQL · Docker · AWS

---

### 教育

**软件工程** · 某大学 · 2015 - 2019
`,
  },
  {
    id: 'tech',
    name: '技术极客模板',
    content: `# 王五
## Full Stack Developer

> "Code is poetry written in logic."

**Contact**
| | |
|---|---|
| Email | wangwu@dev.io |
| Phone | +86 186-0000-8888 |
| Location | Shanghai, China |
| Website | wangwu.dev |
| GitHub | @wangwu |

---

## 💼 Experience

### Tech Lead @ StartupX
*2023 - Present*

Architected microservices backend serving 10M+ requests/day.

**Highlights:**
- Reduced API latency by **70%** through caching strategy
- Implemented CI/CD pipeline, deploy time from 30min → 3min
- Mentored 6 junior developers

### Senior Engineer @ BigCorp
*2020 - 2023*

Full stack development on enterprise platform.

---

## 🛠 Skills

### Languages
${codeBlock}
TypeScript ████████████░░░░ 85%
Python     ██████████░░░░░░ 70%
Go         ████████░░░░░░░░ 60%
Rust       ██████░░░░░░░░░░ 40%
${codeBlock}

### Frameworks & Tools
- **Frontend:** React, Next.js, Tailwind, Zustand
- **Backend:** Node.js, Express, NestJS, PostgreSQL, Redis
- **DevOps:** Docker, Kubernetes, AWS, Terraform
- **Testing:** Jest, Vitest, Playwright, Cypress

---

## 🎓 Education

**M.S. Computer Science** - Fudan University (2018-2020)
**B.S. Software Engineering** - Tongji University (2014-2018)

---

## 🏆 Achievements

- [x] Open source contributor to React (3 PRs merged)
- [x] Speaker at JSConf China 2024
- [x] LeetCode Guardian (Top 1%)
- [ ] Writing technical book (WIP)
`,
  },
];
