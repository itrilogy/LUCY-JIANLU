# Qwerty Learner - Article Typing 增补开发与迭代追溯日志

本文档用于完整记录整篇文章与代码片段练习模块（Article Typing Module）的开发进度、技术设计落实、文件变更列表及构建验证结果。

设计总纲与优化路线见：[article_typing_design_spec.md](./article_typing_design_spec.md)（含 §11 工程优化方案）。

---

## 1. 开发任务清单与当前进度

| 任务编号 | 模块 / 阶段 | 详细说明 | 状态 | 完成时间 |
| :--- | :--- | :--- | :--- | :--- |
| **TASK-01** | 类型与数据层 | 增加 `ArticleResource` / `ParsedArticleContent` 类型定义；编写轻量注释协议解析器 `src/utils/articleParser.ts` | ✅ 已完成 | 2026-08-07 |
| **TASK-02** | 示例资源数据 | 准备初学者友好的阶梯式代码资源 JSON，并在 `articleDictionary.ts` 中直接包含文本内容（完全消除 fetch 404 导致的白屏） | ✅ 已完成 | 2026-08-07 |
| **TASK-03** | 状态管理层 | 创建 `src/pages/ArticleTyping/store`，实现双缓冲区 Reducer (支持全/半角标点归一化比对、Backspace 修正、Enter 换行与只读行跳过) | ✅ 已完成 | 2026-08-07 |
| **TASK-04** | 视图组件层 | 重构 `CodeEditorView`：字号放大至 `text-lg`，包含毛玻璃雾化遮罩 (Glassmorphism Cover)，支持按任意键启动与光标平滑自动滚动 (Auto Scroll) | ✅ 已完成 | 2026-08-07 |
| **TASK-05** | 页面与路由集成 | 还原原始 `Gallery-N` 100% 外层容器 CSS，最顶层建立 `[🔤 单词]` 与 `[📄 文章]` 包裹 Segment 标签卡，彻底解决卡片挤压 | ✅ 已完成 | 2026-08-07 |
| **TASK-06** | Header 崩盘隐患根治 | 彻底消除 `ArticleTypingPage` 中引入 `Switcher` / `StartButton` 引起的 `TypingContext` 空解构白屏 | ✅ 已完成 | 2026-08-07 |
| **TASK-07** | Sprint A：指标与输入正确性 | `metrics.ts`；首键不吞字；全文匹配才完成；errorKeystrokes / BackspaceRate | ✅ 已完成 | 2026-08-07 |
| **TASK-08** | Sprint A：持久化与入口 | 仅存 `currentArticleId`；`galleryMainModeAtom` + `?mode=`；主页「文章」入口；画廊重定向 | ✅ 已完成 | 2026-08-07 |
| **TASK-09** | Sprint A：体验 | 接入 `useKeySounds`；Esc / 失焦暂停；结算展示退格率 | ✅ 已完成 | 2026-08-07 |
| **TASK-10** | Sprint B：统计闭环 | Dexie 文章会话 + 错字分布 + Analysis | ⏳ 待开始 | — |
| **TASK-11** | Sprint B：练习选项 | `articleTypingConfigAtom` + ArticleSetting：跳过注释 / Tab / 智能缩进 / 忽略大小写 / 说明卡 / 自动滚动 | ✅ 已完成 | 2026-08-07 |
| **TASK-12** | 资源贡献规范 | `docs/article_resource_authoring_guide.md` 标记协议与注册步骤 | ✅ 已完成 | 2026-08-07 |
| **TASK-13** | Sprint C：资源与测试 | 编译管线、扩资源、unit/e2e、lazy route | ⏳ 待开始 | — |

---

## 2. 变更文件追溯表 (Change Log)

| 变更时间 | 修改类型 | 文件路径 | 变更说明 |
| :--- | :--- | :--- | :--- |
| 2026-08-07 | 新增 | `docs/article_typing_design_spec.md` | 详细架构设计规范文档 |
| 2026-08-07 | 新增 | `docs/article_typing_development_log.md` | 开发追溯日志文件 |
| 2026-08-07 | 修改 | `src/store/index.ts` | 新增 `currentArticleAtom` 持久化全局存储选中的文章资源 |
| 2026-08-07 | 修改 | `src/typings/article.ts` | 更新 `ArticleResource` 包含 `content` 字段，实现静态解耦 |
| 2026-08-07 | 修改 | `src/typings/index.ts` | 导出 article.ts 类型定义 |
| 2026-08-07 | 新增 | `src/utils/articleParser.ts` | 编写轻量注释协议解析器（识别 `//:` 只读解构卡片） |
| 2026-08-07 | 修改 | `src/resources/articleDictionary.ts` | 内置 4 份跨语言练习资源数据，彻底解决网络 fetch 404 导致的白屏隐患 |
| 2026-08-07 | 修改 | `src/pages/ArticleTyping/store/index.ts` | 增加 `normalizeChar` 与 `isCharMatch` 函数，支持全角/半角标点归一化比对 |
| 2026-08-07 | 新增 | `src/pages/Gallery-N/ArticleDictionaryWithoutCover.tsx` | 点击文章卡片时更新 `currentArticleAtom` 并精准跳转 |
| 2026-08-07 | 重构 | `src/pages/Gallery-N/index.tsx` | 补全缺失的 `galleryState` 状态解构，解决运行态未定义抛错导致的字典页空白 |
| 2026-08-07 | 重构 | `src/pages/ArticleTyping/index.tsx` | 移除 `Switcher` / `StartButton`，消除 TypingContext 白屏 |
| 2026-08-07 | 修改 | `src/index.tsx` | Gallery 同步 import；文章相关路由 |
| 2026-08-07 | 修复 | `src/pages/ArticleTyping/components/CodeEditorView.tsx` | Hooks 顺序修正 |
| 2026-08-07 | 修复 | `src/pages/Gallery-N/index.tsx` | 默认文章 Tab `all`；`code` 聚合代码片段 |
| 2026-08-07 | 增补 | `docs/article_typing_design_spec.md` §11 | 工程优化方案、架构约束、Sprint A–D 路线图与验收标准 |
| 2026-08-07 | 新增 | `src/pages/ArticleTyping/metrics.ts` | Acc/WPM/KPM/BackspaceRate/isComplete 纯函数 |
| 2026-08-07 | 重构 | `src/pages/ArticleTyping/store/*` | 接入 metrics；钳制输入长度；全文匹配完成；errorKeystrokes；PAUSE |
| 2026-08-07 | 重构 | `src/store/index.ts` | `currentArticleIdAtom` + 派生 `currentArticleAtom`；`galleryMainModeAtom` |
| 2026-08-07 | 重构 | `src/pages/ArticleTyping/index.tsx` | 首键不吞字；音效；Esc/失焦暂停；Gallery `?mode=article` 链接 |
| 2026-08-07 | 重构 | `src/pages/Gallery-N/index.tsx` | 持久化主模式 + URL `mode` 同步 |
| 2026-08-07 | 修改 | `src/pages/Typing/index.tsx` | Header「📄 文章」入口 |
| 2026-08-07 | 修改 | `src/index.tsx` | `/article-gallery` 重定向至 `/gallery?mode=article` |
| 2026-08-07 | 增补 | `docs/article_typing_design_spec.md` §12 | 首键/指标栏/设置作用域/结算弹窗/专用配置产品决策 |
| 2026-08-07 | 修复 | `src/pages/ArticleTyping/index.tsx` | **准备态任意键只揭遮罩，不写入首字符**；暂停后才恢复并录入 |
| 2026-08-07 | 新增 | `ArticleSpeed.tsx` | 底部指标卡对齐单词 Speed（时间/WPM/KPM/正确率/退格率/进度） |
| 2026-08-07 | 新增 | `ArticleResultModal.tsx` | 完成结算全屏弹窗，对齐 ResultScreen 形态 |
| 2026-08-07 | 新增 | `ArticleSwitcher.tsx` | 工具栏仅挂共享项（SoundSwitcher + 深色），杜绝 TypingContext 组件 |
| 2026-08-07 | 视觉 | `CodeEditorView.tsx` | 准备遮罩对齐单词：`backdrop-blur-sm` 透出内容；字号随 foreignFont；绿/红/灰配色；练习区加高加宽 |
| 2026-08-07 | 视觉 | `ArticleSpeed` / 页面布局 | 指标卡与主区 `max-w-5xl`，形态贴近单词 Speed |
| 2026-08-07 | 新增 | `src/pages/ArticleTyping/config.ts` | 文章专用配置类型与默认值 |
| 2026-08-07 | 新增 | `articleTypingConfigAtom`（store） | 独立持久化，不与单词 Setting 混写 |
| 2026-08-07 | 新增 | `ArticleSetting.tsx` | 文章齿轮设置弹窗（跳过注释/Tab/缩进/大小写/说明/滚动） |
| 2026-08-07 | 接线 | parser / store / index / CodeEditorView | skipComments 重解析；Enter 智能缩进；Tab 宽度；ignoreCase |
| 2026-08-07 | 新增 | `docs/article_resource_authoring_guide.md` | 标记协议、元数据、注册步骤、编译管线建议 |

---

## 3. Sprint A 验收记录

| 验收项 | 结果 |
| :--- | :--- |
| 文章页无 TypingContext 白屏 | ✅ 代码路径已隔离 |
| 首键揭开遮罩并写入字符 | ✅ 启动后 fall-through 处理按键 |
| 错字不可「假完成」 | ✅ `isArticleComplete` |
| 仅持久化 articleId | ✅ `currentArticleIdAtom` |
| Gallery 文章模式可记忆/可 query | ✅ atom + `?mode=article` |
| 主页可见文章入口 | ✅ Typing Header NavLink |
| 键音 + 暂停 | ✅ useKeySounds + Esc/blur |
| 生产构建 | ✅ `npm run build` 通过（2026-08-07） |

---

## 4. 后续待办（摘自设计 §11.5）

- Sprint B：Dexie 会话、错字分布 UI、skipComments / 智能缩进、扩资源  
- Sprint C：资源编译管线、自定义粘贴、测试与 lazy route  
- Sprint D：错题片段复习、分享图等差异化能力  
