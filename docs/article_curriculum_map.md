# 文章词典 × 知识树课程映射

本文说明练习资源如何对齐两套 Obsidian 研究笔记：

1. **基于 Obsidian 的 Markdown 与知识工程**（约 20 篇笔记，A–F 板块）
2. **金融科技学院 / SAFTI 知识网络**（约 129 篇笔记，大一路线 + 金融地基）

实现入口：`src/resources/articles/`  
标记协议：`docs/article_resource_authoring_guide.md`

---

## 1. 源知识树摘要

### 1.1 知识工程（Markdown → Obsidian → Mermaid）

| 板块 | 主题 | 源文件示例 |
| :--- | :--- | :--- |
| **A** | Markdown 语法与写作规范 | `A1-…语法手册` `A2-…写作规范` |
| **B** | Vault 哲学、界面快捷键、核心插件 | `B1` `B2` `B3` |
| **C** | Callout、双向链接、YAML、LaTeX | `C1`–`C4` |
| **D** | 社区插件、Dataview、模板 CSS | `D1`–`D3` |
| **E** | Mermaid 流程/时序/类图/甘特/样式 | `E1`–`E5` |
| **F** | 工作流整合与方法论 | `F1` `F2` |

学习顺序（源导航）：**A → B → C → D，A 并行 E，最后 F**。

### 1.2 SAFTI 金融科技学院

```
00-导航总览
01-大一上-认知启动
   01-微观经济学
   02-金融科技导论
   03-程序设计基础
   04-高等数学B1
02-大一下-体系初建
   01-宏观经济学
   02-会计学原理
   03-线性代数
   04-概率论与数理统计
03-跨课连接与思维工具
04-金融认知地基（产品/衍生品/市场/危机/行为/复利/框架 + 扩展阅读）
05-大二预览（公司金融/计量/数据库/SQL）
06-大一行动指南
07-资源书单
```

路线图要点：开学先搭 **Obsidian 笔记系统** → 并行微观 + FinTech 导论 + 编程 → 寒假攻坚产品谱系/EMH/固收/DeFi → 大一下宏观/会计/线代/概率 → 暑假量化与 SQL。

---

## 2. 练习资源轨道（Track）

| `track` | 含义 | 主要 `module` | 资源文件 |
| :--- | :--- | :--- | :--- |
| `knowledge-eng` | 知识工程打字 | `KE-A-Markdown` … `KE-F-Integrate` | `path-knowledge-eng.ts` |
| `cs-programming` | 程序设计 / CS 语法 | `SAFTI-01-程序设计` 等 | `path-js/python/ts.ts` + 部分 SAFTI |
| `fintech-code` | 金融科技代码场景 | `SAFTI-FinTech代码` / `SAFTI-04-金融地基` | `path-fintech.ts` + SAFTI 代码篇 |
| `finance-concept` | 金融与经管概念（英文为主） | `SAFTI-01-微观` … `SAFTI-04-*` | `path-safti-concepts.ts` |
| `english-literacy` | 通用技术英文 | `English-Tech` | `path-english.ts` |

字段：`ArticleResource.track` / `module`，并同步写入 `tags` 便于 Gallery 标签筛选。

---

## 3. 推荐练习顺序（给学习者）

| 阶段 | 对齐源树 | 建议练习标签 / 模块 |
| :--- | :--- | :--- |
| 第 0 周 | 搭笔记系统 | `KE-A` → `KE-B` → `KE-C` 基础篇 |
| 大一上前半 | 微观 + 导论 | `SAFTI-01-微观` `SAFTI-01-FinTech导论` |
| 大一上编程 | 程序设计基础 | `SAFTI-01-程序设计` + JS/Python Level1–2 |
| 大一上数学 | 高数边际直觉 | `SAFTI-01-高数` + 复利代码 |
| 寒假 | 金融地基 | `SAFTI-04-金融地基` + `fintech-code` 利息/组合/风险 |
| 大一下 | 宏观/会计/线代/概率 | `SAFTI-02-*` + 跨课 `SAFTI-03-跨课` |
| 暑假 | SQL / 量化预习 | `SAFTI-05-数据库` + Level3 算法/风险代码 |
| 并行 | Mermaid / Dataview | `KE-E` `KE-D` |

---

## 4. 源笔记 → 练习篇映射（节选）

| 源笔记主题 | 练习资源 id（示例） |
| :--- | :--- |
| A1 Markdown 语法 | `ke-md-headings-list-level1` `ke-md-emphasis-code-level1` `ke-md-table-gfm-level2` |
| B1 Vault 哲学 | `ke-obsidian-vault-level1` |
| C1 Callout / C2 链接 | `ke-callout-level2` `ke-obsidian-wikilink-level1` |
| C3 YAML / C4 LaTeX | `ke-yaml-frontmatter-level2` `ke-latex-inline-level2` |
| D2 Dataview | `ke-dataview-query-level3` |
| E1–E3 Mermaid | `ke-mermaid-flowchart-level2` `ke-mermaid-sequence-level2` `ke-mermaid-gantt-level3` |
| 微观供需/弹性/信息 | `safti-micro-*-en-*` |
| FinTech 定义/产品/监管 | `safti-fintech-*-en-*` |
| 程序设计数据类型 | `safti-prog-types-finance-py-l1` |
| 复利的力量 | `safti-math-compound-code-l1` + 既有 `fintech-compound-*` |
| 会计恒等式/复式记账 | `safti-acct-*` |
| 概率与 VaR | `safti-prob-*` + `fintech-var-*` |
| SQL 入门 | `safti-sql-*` |
| 行为金融/危机/EMH/DeFi/ESG | `safti-found-*-en-*` |

既有 JS/Python/FinTech/TS/English 篇通过 `withTrack(...)` **挂载**到 `cs-programming` / `fintech-code` / `english-literacy`，避免重复粘贴正文。

---

## 5. 规模与维护

- 知识工程轨道：`path-knowledge-eng.ts`（可随 A–F 笔记继续加篇）
- SAFTI 概念轨道：`path-safti-concepts.ts`（按学期模块扩展）
- 语法与代码：原 `path-js|python|ts|fintech|english` 保留，由 `index.ts` 统一挂轨

新增资源时：

1. 判定属于 KE 还是 SAFTI 哪一 `module`
2. 设置 `track` + `module` + Level
3. 使用 `//:` / `#:` 说明协议
4. 在本文件「映射」表补一行（可选但推荐）

---

## 6. Gallery 使用提示

- 标签筛选：`SAFTI`、`KnowledgeEng`、`KE-A`、`FinTech`、`Level 1` 等
- 语种 Tab：Code / JS·TS / Python / 英文 仍按 `language`/`category` 过滤
- 「技术文档」类别多用于 Markdown/Mermaid/SQL/YAML 敲击

---

*生成对齐源：本机 Obsidian  
`Research Notes/基于 Obsidian 的Markdown与知识工程`  
`Research Notes/金融科技学院/SAFTI-知识网络`*

---

## 7. 配套单词词典（Knowledge 块）

从文章练习素材提炼的**标准单词词典**（与 CET / 代码练习相同机制：卡片 → 章节选择 → 练习）：

| 词典 id | 名称 | 文件 | 规模 |
| :--- | :--- | :--- | :--- |
| `knowledge-from-articles` | Knowledge 文章词汇 | `public/dicts/knowledge-from-articles.json` | **943 词 / 约 48 章** |
| `knowledge-fintech-core` | Knowledge · FinTech 核心词 | `public/dicts/knowledge-fintech-core.json` | **220 词 / 约 11 章** |
| `knowledge-cs-core` | Knowledge · CS 编程词 | `public/dicts/knowledge-cs-core.json` | **220 词 / 约 11 章** |
| `knowledge-ssq-fintech-start` | Knowledge · 双色球 FinTech 起步 | `public/dicts/knowledge-ssq-fintech-start.json` | **85 词 / 约 5 章** |
| `knowledge-robotics-ros2` | Knowledge · OOMWOO / ROS2 | `public/dicts/knowledge-robotics-ros2.json` | **130 词 / 约 7 章** |

**扩展源（本轮）**：

- `SAFTI-知识网络/07-资源书单`（曼昆/米什金/博迪/罗斯/赫尔/塔勒布/卡尼曼/席勒等概念）
- `01-双色球研究作业-洪浩耀的FinTech起步`（爬虫、频次检验、Markov/GMM、反馈、庄家、工程化）
- `开源扫地机器人-oomwoo/oomwoo`（ROS2、SLAM、Nav2、Gazebo、嵌入式、安全与模块化）

**配套文章练习**：`path-ssq-fintech.ts`、`path-robotics.ts`

- **Gallery 位置**：单词词典 → 语言 Tab「英语」→ 分类块 **Knowledge**
- **章节切分**：沿用全局 `CHAPTER_LENGTH = 20`
- **主库主题递进**（文章模块 + 原笔记继续提炼）：  
  程序基础 → 结构/异步 → 工程 → 复利/TVM → 市场交易 → 风险量化 → 金融产品 → SAFTI 经管 → 行为/监管 → 知识工程 → Mermaid → 技术协作 →  
  **高数数值 → 线代组合 → 概率统计 → 宏观货币 → 会计报表 → 固收衍生品 → 投资学 CAPM → FinTech 监管认证 → 博弈行为 → 数据/ML → SQL → Obsidian 深入 → Mermaid 深入 → 公司金融估值 → 量化交易**
- **笔记源**：`金融科技学院/SAFTI-知识网络`（约 129 篇）+ `基于 Obsidian 的 Markdown 与知识工程`（A–F 共 20 篇）
