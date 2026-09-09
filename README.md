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
  <img src="https://img.shields.io/github/license/itrilogy/LUCY-JIANLU" alt="license" />
</p>

---

**鹿溪联合创新实验室** 出品 · 基于开源项目 [Qwerty Learner](https://github.com/RealKai42/qwerty-learner) 二次开发

> **见鹿（JianLu）** 是一款面向「用键盘工作与学习」人群的练习工具：在打字中记单词，在段落与代码中内化专业表达。

---

## ✨ 见鹿特色

### 文章 / 代码段落练习

不再只练单个单词——支持 **英文段落、JS/TS/Python 片段、概念短文** 的全文打字练习。

- **双缓冲输入**：首键启动练习、进度与准确率统计、完成结果弹窗
- **代码编辑器式视图**：玻璃遮罩 / 再练一遍等练习流优化
- **词库与文章双模式切换**：Gallery 中在「单词词典」与「文章词典」之间切换

### 课程树对齐的内容轨道

练习资源按 **知识树 / 课程序列** 组织，覆盖五大方向：

| 轨道 | 内容方向 |
| :--- | :--- |
| `knowledge-eng` | 知识工程：Markdown / Obsidian / Mermaid |
| `cs-programming` | 程序设计与 CS：JS / Python / TS / ROS2 |
| `fintech-code` | 金融科技代码场景 |
| `finance-concept` | 金融与经管概念 |
| `english-literacy` | 通用技术英文素养 |

### Knowledge 分章节词库

在保留 CET / IELTS / 程序员词典等上游词库之外，新增 **Knowledge** 分类，按章节练习（默认章长 20 词），从文章与研究笔记抽取术语。

---

## 🎯 适合谁？

- 需要 **边练打字边记专业词汇** 的学生与从业者
- 金融科技 / CS / 机器人等方向，想把 **术语练成肌肉记忆** 的同学
- 用 Obsidian 做知识工程、希望 **笔记语言同步到手速** 的人
- 原本使用 Qwerty Learner，希望 **从单词升级到段落与代码** 的用户

---

## 🚀 快速开始

```sh
git clone https://github.com/itrilogy/LUCY-JIANLU.git
cd LUCY-JIANLU
yarn install
yarn start
```

默认访问：http://localhost:5173/

---

## 🛠 功能一览

| 能力 | 说明 |
| :--- | :--- |
| 多词库背单词 | CET / 考研 / 雅思托福 / 程序员 / 多语言等 |
| 文章打字 | 段落 / 代码全文练习、指标与结果弹窗 |
| 课程轨道 | 知识工程 · 编程 · FinTech · 金融概念 · 英文素养 |
| Knowledge 词库 | 分章词库，对齐笔记与书单 |
| 音标与发音 | 记忆拼写的同时巩固读音 |
| 错误即重输 | 避免错误肌肉记忆，强化正确路径 |
| 默写模式 | 章节结束后巩固 |
| 暗色模式 | 日常练习体验 |

---

## 📁 仓库结构

```text
src/
  constants/brand.ts          # 产品 / 实验室品牌常量
  pages/ArticleTyping/        # 文章打字练习
  pages/Gallery-N/            # 词典 Gallery（单词 + 文章双模式）
  resources/articles/         # 文章资源按 track 拆分
public/
  dicts/knowledge-*.json      # Knowledge 词库
docs/
  operations_guide.md         # 构建 / 部署 / 品牌资产
  article_*.md                # 文章练习设计与课程映射
```

---

## 📚 文档

| 文档 | 内容 |
| :--- | :--- |
| [操作说明](./docs/operations_guide.md) | 品牌资产、构建、部署、favicon 同步 |
| [文章课程映射](./docs/article_curriculum_map.md) | 知识树 ↔ 练习轨道 |
| [文章资源编写指南](./docs/article_resource_authoring_guide.md) | 如何新增文章资源 |
| [文章打字设计说明](./docs/article_typing_design_spec.md) | 交互与架构要点 |

---

## 🙏 上游致谢

本项目 **二次开发自** 优秀开源软件 [Qwerty Learner](https://github.com/RealKai42/qwerty-learner)。

原项目版权与社媒内容归原作者所有。鹿溪联合创新实验室仅做 **产品化定制、内容扩展与体验改造**，并向原作者与全体贡献者致谢。

请同时遵守本仓库及上游 LICENSE 的要求；二次分发时请保留上游版权与许可证声明。

---

<div align="center">
  <p><strong>见鹿 · JianLu</strong></p>
  <p>打字练习 · 单词记忆 · 知识内化</p>
  <p>鹿溪联合创新实验室 出品</p>
  <p><em>指间林深，心澄见鹿</em></p>
</div>
