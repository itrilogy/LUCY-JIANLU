import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/**
 * Track: knowledge-eng
 * 对齐《基于 Obsidian 的 Markdown 与知识工程》A–F 板块
 * A Markdown → B Obsidian → C 扩展语法 → D 插件 → E Mermaid → F 整合
 */
export const KNOWLEDGE_ENG_ARTICLES: ArticleResource[] = [
  // ── A Markdown 基础 ───────────────────────────────────────
  def({
    id: 'ke-md-headings-list-level1',
    name: 'KE-A · Markdown 标题与列表',
    description: '板块A：# 标题、有序/无序列表敲击练习',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Markdown', 'Level 1', 'KE-A'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'knowledge-eng',
    module: 'KE-A-Markdown',
    content: `//: 💡 标题用 # 后接空格；列表用 - 或 1.
# Knowledge Base
## Daily Notes
### Inbox

- Capture ideas quickly
- Link related notes later
1. Write a fleeting note
2. Process it into a concept note
3. Connect it on the graph`,
  }),

  def({
    id: 'ke-md-emphasis-code-level1',
    name: 'KE-A · 强调与行内代码',
    description: '板块A：粗体、斜体、行内 code 与代码块',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Markdown', 'Level 1', 'KE-A'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'knowledge-eng',
    module: 'KE-A-Markdown',
    content: `//: 💡 强调语法与代码围栏
Use *italic* for soft emphasis and **bold** for key terms.
Inline code looks like \`npm run build\`.

\`\`\`bash
# install and start
npm install
npm run dev
\`\`\`

> A good note is short, atomic, and linkable.`,
  }),

  def({
    id: 'ke-md-link-image-level1',
    name: 'KE-A · 链接与图片语法',
    description: '板块A：外链、引用链接基础',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Markdown', 'Level 1', 'KE-A'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'knowledge-eng',
    module: 'KE-A-Markdown',
    content: `//: 💡 链接 [text](url)
Read the [Markdown Guide](https://www.markdownguide.org/).
Local images use relative paths like ![diagram](./assets/flow.png).

//: 💡 参考式链接便于维护
See the [vault philosophy][vault].

[vault]: ./B1-obsidian-vault.md`,
  }),

  def({
    id: 'ke-md-table-gfm-level2',
    name: 'KE-A · GFM 表格',
    description: '板块A：GitHub Flavored Markdown 表格',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Markdown', 'Level 2', 'KE-A'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-A-Markdown',
    content: `//: 💡 表格：表头、对齐、分隔行
| Topic | Level | Status |
| :--- | :---: | ---: |
| Markdown | 1 | done |
| Obsidian | 2 | doing |
| Mermaid | 2 | todo |

Use alignment markers \`:---\`, \`:---:\`, \`---:\`.`,
  }),

  def({
    id: 'ke-md-writing-rules-level2',
    name: 'KE-A · 写作规范英文短则',
    description: '板块A2：原子笔记、一事一题',
    category: '英文文章',
    tags: ['KnowledgeEng', 'English', 'Level 2', 'KE-A'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-A-Markdown',
    content: `//: 💡 原子化
One note should capture one idea.
If a note needs many "and"s, split it.

//: 💡 可链接
Write so another note can link here without context dump.
Prefer clear titles over cute titles.`,
  }),

  // ── B Obsidian 核心 ───────────────────────────────────────
  def({
    id: 'ke-obsidian-vault-level1',
    name: 'KE-B · Vault 哲学英文',
    description: '板块B1：本地优先、纯文本、你拥有数据',
    category: '英文文章',
    tags: ['KnowledgeEng', 'Obsidian', 'Level 1', 'KE-B'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'knowledge-eng',
    module: 'KE-B-Obsidian',
    content: `//: 💡 本地优先
Your vault is a folder of plain Markdown files.
You own the files even if the app changes.

//: 💡 链接优先
Knowledge grows by connecting notes, not by perfect folders alone.
Start with a daily note, then promote durable ideas.`,
  }),

  def({
    id: 'ke-obsidian-wikilink-level1',
    name: 'KE-B · Wiki 链接语法',
    description: '板块B/C：[[双向链接]] 敲击',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Obsidian', 'Level 1', 'KE-B', 'KE-C'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'knowledge-eng',
    module: 'KE-B-Obsidian',
    content: `//: 💡 双向链接
I am studying [[Compound Interest]] after [[Time Value of Money]].
Alias links: [[Compound Interest|the power of compounding]].

//: 💡 块引用与嵌入（概念）
Embed a note with ![[Daily/2026-06-12]].
Link to a heading with [[Note#Section]].`,
  }),

  def({
    id: 'ke-obsidian-hotkeys-level2',
    name: 'KE-B · 快捷键与工作流短文',
    description: '板块B2：快速切换、命令面板意识',
    category: '英文文章',
    tags: ['KnowledgeEng', 'Obsidian', 'Level 2', 'KE-B'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-B-Obsidian',
    content: `//: 💡 命令面板
Prefer the command palette over hunting menus.
Name actions so future-you can search them.

//: 💡 分屏阅读
Open a source note on the left and a working note on the right.
Capture links while reading, not after you forget the context.`,
  }),

  // ── C 扩展语法 ───────────────────────────────────────────
  def({
    id: 'ke-callout-level2',
    name: 'KE-C · Callout 语法',
    description: '板块C1：> [!note] 等提示块',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Obsidian', 'Level 2', 'KE-C'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-C-Extended',
    content: `//: 💡 Callout 块
> [!note] Atomic notes
> Keep each idea small enough to reuse.

> [!warning] Fragile links
> Renaming without updating links breaks the graph.

> [!tip] Templates
> Use templates for recurring note structures.`,
  }),

  def({
    id: 'ke-yaml-frontmatter-level2',
    name: 'KE-C · YAML Frontmatter',
    description: '板块C3：笔记元数据头',
    category: '技术文档',
    tags: ['KnowledgeEng', 'YAML', 'Level 2', 'KE-C'],
    language: 'english',
    codeLanguage: 'yaml',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-C-Extended',
    content: `//: 💡 Frontmatter 模板（敲击练习）
---
title: Compound Interest
type: concept
status: evergreen
tags:
  - finance
  - math
created: 2026-06-12
---

//: 💡 正文从 frontmatter 之后开始
Compound growth multiplies prior gains.`,
  }),

  def({
    id: 'ke-latex-inline-level2',
    name: 'KE-C · 行内与块级公式标记',
    description: '板块C4：$...$ 与 $$...$$ 敲击',
    category: '技术文档',
    tags: ['KnowledgeEng', 'LaTeX', 'Level 2', 'KE-C', 'SAFTI'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-C-Extended',
    content: `//: 💡 复利公式在笔记中的写法
Inline: $FV = PV (1+r)^n$.

Block:

$$
FV = PV \\times (1 + r)^n
$$

//: 💡 72 法则
Years to double $\\approx 72 / (100r)$ when $r$ is the decimal rate.`,
  }),

  // ── D 插件 / Dataview ─────────────────────────────────────
  def({
    id: 'ke-dataview-query-level3',
    name: 'KE-D · Dataview 查询入门',
    description: '板块D2：LIST/TABLE 查询敲击',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Dataview', 'Level 3', 'KE-D'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    track: 'knowledge-eng',
    module: 'KE-D-Plugins',
    content: `//: 💡 Dataview 代码块
\`\`\`dataview
TABLE status, file.mtime
FROM "SAFTI-知识网络"
WHERE contains(tags, "saf-ti/核心概念")
SORT file.mtime DESC
\`\`\`

//: 💡 LIST 简表
\`\`\`dataview
LIST
FROM #finance
WHERE status = "evergreen"
\`\`\``,
  }),

  def({
    id: 'ke-template-daily-level2',
    name: 'KE-D · 日记模板骨架',
    description: '板块D3：Daily note 结构敲击',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Template', 'Level 2', 'KE-D'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-D-Plugins',
    content: `//: 💡 Daily template
---
date: {{date}}
tags:
  - daily
---

## Focus
- 

## Notes
- 

## Links
- [[Inbox]]
- [[Projects]]`,
  }),

  // ── E Mermaid ─────────────────────────────────────────────
  def({
    id: 'ke-mermaid-flowchart-level2',
    name: 'KE-E · Mermaid 流程图',
    description: '板块E1：flowchart LR 基础',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Mermaid', 'Level 2', 'KE-E'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-E-Mermaid',
    content: `//: 💡 学习路线流程图
\`\`\`mermaid
flowchart LR
  A[Markdown] --> B[Obsidian]
  B --> C[Links Graph]
  A --> D[Mermaid]
  C --> E[Knowledge System]
  D --> E
\`\`\``,
  }),

  def({
    id: 'ke-mermaid-sequence-level2',
    name: 'KE-E · Mermaid 时序图',
    description: '板块E1：sequenceDiagram 敲击',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Mermaid', 'Level 2', 'KE-E'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-E-Mermaid',
    content: `//: 💡 笔记处理时序
\`\`\`mermaid
sequenceDiagram
  participant U as User
  participant D as Daily Note
  participant C as Concept Note
  U->>D: capture fleeting idea
  D->>C: promote and rewrite
  C->>C: add links and tags
\`\`\``,
  }),

  def({
    id: 'ke-mermaid-state-level3',
    name: 'KE-E · Mermaid 状态图',
    description: '板块E2：笔记生命周期状态',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Mermaid', 'Level 3', 'KE-E'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    track: 'knowledge-eng',
    module: 'KE-E-Mermaid',
    content: `//: 💡 笔记状态机
\`\`\`mermaid
stateDiagram-v2
  [*] --> Fleeting
  Fleeting --> Literature: source digest
  Fleeting --> Concept: rewrite idea
  Literature --> Concept: extract claim
  Concept --> Evergreen: stabilize
  Evergreen --> [*]
\`\`\``,
  }),

  def({
    id: 'ke-mermaid-gantt-level3',
    name: 'KE-E · Mermaid 甘特图',
    description: '板块E3：学期学习节奏示意',
    category: '技术文档',
    tags: ['KnowledgeEng', 'Mermaid', 'Level 3', 'KE-E', 'SAFTI'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    track: 'knowledge-eng',
    module: 'KE-E-Mermaid',
    content: `//: 💡 大一上节奏（示意）
\`\`\`mermaid
gantt
  title Freshman Fall Focus
  dateFormat  YYYY-MM-DD
  section Core
  Microeconomics     :a1, 2026-09-01, 90d
  Programming Basics :a2, 2026-09-15, 75d
  section Build
  Obsidian Vault     :b1, 2026-09-01, 30d
  FinTech Glossary   :b2, after b1, 40d
\`\`\``,
  }),

  // ── F 整合 ────────────────────────────────────────────────
  def({
    id: 'ke-workflow-loop-level2',
    name: 'KE-F · 知识工程工作流短文',
    description: '板块F：捕获→整理→连接→输出',
    category: '英文文章',
    tags: ['KnowledgeEng', 'English', 'Level 2', 'KE-F'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-F-Integrate',
    content: `//: 💡 闭环
Capture quickly. Process deliberately.
Connect notes before you archive them.

//: 💡 输出倒逼输入
Write a weekly summary from your graph.
Teaching a concept is the best retrieval practice.`,
  }),

  def({
    id: 'ke-para-method-level2',
    name: 'KE-F · PARA 整理法英文',
    description: 'Projects / Areas / Resources / Archives',
    category: '英文文章',
    tags: ['KnowledgeEng', 'English', 'Level 2', 'KE-F'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'knowledge-eng',
    module: 'KE-F-Integrate',
    content: `//: 💡 PARA
Projects have deadlines. Areas need standards.
Resources are topics you may reuse. Archives are cold storage.

//: 💡 移动而非完美分类
Prefer moving a note when its status changes
over inventing endless nested folders on day one.`,
  }),
]
