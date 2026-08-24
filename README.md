<div align="center">
  <img src="public/favicon.svg" width="96" height="96" alt="见鹿 · JianLu" />
</div>

<h1 align="center">见鹿 · JianLu</h1>

<p align="center">
  <strong>打字练习 · 单词记忆 · 知识内化</strong>
</p>

<p align="center">
  指间林深，心澄见鹿 · Repetition breeds intuition; clarity emerges from practice.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Product-见鹿%20JianLu-0D5E42" alt="product" />
  <img src="https://img.shields.io/badge/Lab-鹿溪联合创新实验室-047538" alt="lab" />
  <img src="https://img.shields.io/badge/Based%20on-Qwerty%20Learner-6366f1" alt="upstream" />
  <img src="https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20TypeScript-blue" alt="stack" />
</p>

<p align="center">
  <b>鹿溪联合创新实验室</b> 出品 · 基于开源项目
  <a href="https://github.com/RealKai42/qwerty-learner">Qwerty Learner</a>
  二次开发
</p>

---

## 这是什么？

**见鹿（JianLu）** 是一款面向「用键盘工作与学习」人群的练习工具：在打字中记单词，在段落与代码中内化专业表达。

与原版 Qwerty Learner 一脉相承的是 **错误即重输、巩固正确肌肉记忆**；见鹿在此之上，把练习从「词条」延伸到 **文章段落、代码片段、课程对齐的知识词库**，让打字成为知识内化的路径。

> **命名**：取自 Slogan「指间林深，心澄见鹿」——键入林深，豁然见鹿；在反复敲击中把词汇与语法沉淀为肌肉记忆。

| 层级 | 名称 | 说明 |
| :--- | :--- | :--- |
| 产品 | **见鹿 · JianLu** | 本仓库的应用本体 |
| 出品方 | **鹿溪联合创新实验室** | LUXI Joint Innovation Lab |
| 上游 | **Qwerty Learner** | 开源原项目，社媒/捐赠等归属原作者 |

---

## ✨ 见鹿特色（本仓库增量）

### 1. 文章 / 代码段落练习（Article Typing）

不再只练单个单词：支持 **英文段落、JS/TS/Python 片段、概念短文** 的全文打字练习。

- **双缓冲输入**：首键启动练习、进度与准确率统计、完成结果弹窗
- **代码编辑器式视图**：玻璃遮罩 / 再练一遍等练习流优化
- **词库与文章双模式切换**：Gallery 中在「单词词典」与「文章词典」之间切换
- **练习设置可配置**：字体、音效、显示策略等（见 `ArticleSetting`）

入口与实现：

- 路由 / 页面：`src/pages/ArticleTyping/`
- 资源注册：`src/resources/articles/`
- 设计与规范：`docs/article_typing_design_spec.md`、`docs/article_resource_authoring_guide.md`

### 2. 课程树对齐的内容轨道（Curriculum Tracks）

练习资源按 **知识树 / 课程序列** 组织，而非零散清单。映射说明见 [`docs/article_curriculum_map.md`](./docs/article_curriculum_map.md)。

| 轨道 `track` | 内容方向 | 示例 |
| :--- | :--- | :--- |
| `knowledge-eng` | 知识工程 | Markdown / Obsidian / Mermaid |
| `cs-programming` | 程序设计与 CS | JS / Python / TS / ROS2 |
| `fintech-code` | 金融科技代码场景 | FinTech 片段、量化起步 |
| `finance-concept` | 金融与经管概念 | SAFTI 认知地基（英文） |
| `english-literacy` | 通用技术英文素养 | 技术写作短文 |

### 3. Knowledge 分章节词库

在保留 CET / IELTS / 程序员词典等上游词库之外，新增 **Knowledge** 分类，按章节练习（默认章长 20 词），从文章与研究笔记抽取术语：

| 词典 | 侧重 |
| :--- | :--- |
| Knowledge 文章词汇 | 综合主库（约 940 词） |
| Knowledge · FinTech 核心词 | 金融科技 / 风险 / 行为金融等 |
| Knowledge · CS 编程词 | 语法、工程、数据与 SQL |
| Knowledge · 双色球 FinTech 起步 | 爬虫、频次、Markov/GMM、反馈回路 |
| Knowledge · OOMWOO / ROS2 | SLAM、Nav2、Gazebo、嵌入式 |

数据文件：`public/dicts/knowledge-*.json`  
注册：`src/resources/dictionary.ts` 中 `knowledge` 块

### 4. 品牌与产品体验

- 产品标识：**favicon（键帽 + 溪流 + 源启星点）** + 名称 **见鹿 JianLu**
- Footer：实验室官方 Logo +「指间林深，心澄见鹿」阐述
- 主色：**鹿溪绿 `#0D5E42`**、进化青 `#00D2FF`
- 常量集中：`src/constants/brand.ts`

### 5. 二次开发立场（重要）

- 本站 **基于** [Qwerty Learner](https://github.com/RealKai42/qwerty-learner) 二次开发
- **原项目版权与社媒内容归原作者所有**；Footer 中 GitHub / 微信 / 小红书 / 捐赠 / VSCode 插件等 **保持上游信息**
- 鹿溪联合创新实验室仅做 **产品化定制、内容扩展与体验改造**

---

## 🎯 适合谁？

- 需要 **边练打字边记专业词汇** 的学生与从业者  
- 金融科技 / CS / 机器人等方向，想把 **术语练成肌肉记忆** 的同学  
- 用 Obsidian 做知识工程、希望 **笔记语言同步到手速** 的人  
- 原本使用 Qwerty Learner，希望 **从单词升级到段落与代码** 的用户  

---

## 🛠 功能一览

### 见鹿增强

| 能力 | 说明 |
| :--- | :--- |
| 文章打字 | 段落 / 代码全文练习、指标与结果弹窗 |
| 课程轨道 | 知识工程 · 编程 · FinTech · 金融概念 · 英文素养 |
| Knowledge 词库 | 分章词库，对齐笔记与书单 |
| Gallery 双模式 | 单词词典 ↔ 文章词典 |
| 品牌体系 | 见鹿产品标识 + 实验室 Footer |

### 继承自 Qwerty Learner（核心能力保留）

| 能力 | 说明 |
| :--- | :--- |
| 多词库背单词 | CET / 考研 / 雅思托福 / 程序员 / 多语言等 |
| 音标与发音 | 记忆拼写的同时巩固读音 |
| 默写模式 | 章节结束后巩固 |
| 速度与正确率 | WPM、准确率等量化反馈 |
| 错题本 / 数据分析 | 本地练习数据与统计 |
| 错误即重输 | 避免错误肌肉记忆 |
| 暗色模式等 | 日常练习体验 |

原版设计思想简述：把 **英语单词记忆** 与 **键盘肌肉记忆** 结合；输入错误需重输，确保正确路径被强化。对机考与「提笔忘字」人群尤其有用。详见上游说明：[RealKai42/qwerty-learner](https://github.com/RealKai42/qwerty-learner)。

---

## 📁 仓库结构（增量相关）

```text
src/
  constants/brand.ts          # 产品 / 实验室品牌常量
  pages/ArticleTyping/        # 文章打字练习
  pages/Gallery-N/            # 词典 Gallery（单词 + 文章双模式）
  resources/articles/         # 文章资源按 track 拆分
  resources/articleDictionary.ts
  assets/logo.svg             # 产品 favicon 标识
  assets/lab-logo.svg         # 实验室 Logo（Footer）
public/
  dicts/knowledge-*.json      # Knowledge 词库
  favicon.svg
docs/
  operations_guide.md         # 构建 / 部署 / 品牌资产
  article_*.md                # 文章练习设计与课程映射
```

---

## 🚀 本地运行

本项目基于 **React + Vite + TypeScript**，依赖 **Node.js** 与 **Yarn**。

```sh
git clone https://github.com/itrilogy/jianlu.git
cd jianlu
yarn install
yarn start
```

默认访问：<http://localhost:5173/>

> 环境检查、Windows/macOS 一键脚本等仍可参考上游文档中的 `scripts/` 说明（若脚本随仓库保留）。

### 部署提示

- 构建产物目录一般为 `build`（以 `vite.config` / 部署配置为准）
- 私有仓库部署请使用自有 Vercel / Cloudflare / 内网静态托管配置

---

## 📚 文档

| 文档 | 内容 |
| :--- | :--- |
| [**操作说明**](./docs/operations_guide.md) | 品牌资产、构建、1Panel 部署、favicon 同步 |
| [文章课程映射](./docs/article_curriculum_map.md) | 知识树 ↔ 练习轨道 |
| [文章资源编写指南](./docs/article_resource_authoring_guide.md) | 如何新增文章资源 |
| [文章打字设计说明](./docs/article_typing_design_spec.md) | 交互与架构要点 |
| [开发日志](./docs/article_typing_development_log.md) | 迭代记录 |
| [导入词典](./docs/toBuildDict.md) | 上游词典贡献方式 |
| [贡献准则](./docs/CONTRIBUTING.md) | 上游协作约定 |

---

## 🙏 上游致谢与必要说明

本项目 **二次开发自** 优秀开源软件：

- 仓库：https://github.com/RealKai42/qwerty-learner  
- 官网：https://qwerty.kaiyi.cool/  
- VSCode 插件：[Marketplace](https://marketplace.visualstudio.com/items?itemName=Kaiyi.qwerty-learner) · [插件仓库](https://github.com/Kaiyiwing/qwerty-learner-vscode)

上游具备丰富的考试词库、API 词库、社区荣誉（GitHub Trending、少数派推荐、Gitee GVP 等）。见鹿在其练习引擎与交互基础上扩展 **文章练习、知识词库与课程化内容**，并向原作者与全体贡献者致谢。

**许可**：请同时遵守本仓库及上游 [LICENSE](./LICENSE) 的要求；二次分发时请保留上游版权与许可证声明。

**社媒 / 捐赠**：Footer 中展示的 GitHub、社群、捐赠、ICP（若有）等信息，以 **原项目维护方** 为准；见鹿私有部署版已按需调整备案展示，但上游链接与致谢予以保留。

---

## 🗺 Roadmap（见鹿方向）

- [ ] 文章练习与 Knowledge 词库的进度互通  
- [ ] 更多 SAFTI / 行业轨道内容  
- [ ] 练习报告与知识掌握度可视化  
- [ ] 可选的本地 / 私有部署文档完善  

欢迎在 Issue 中提出课程内容与产品体验建议。

---

<div align="center">
  <p><strong>见鹿 · JianLu</strong></p>
  <p>打字练习 · 单词记忆 · 知识内化</p>
  <p>鹿溪联合创新实验室 出品</p>
  <p><em>指间林深，心澄见鹿</em></p>
</div>
