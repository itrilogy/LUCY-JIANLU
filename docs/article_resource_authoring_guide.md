# 文章 / 代码词典资源：标记协议与生成说明

本文档供后续贡献者与维护者使用，说明如何编写、标注、注册一篇可用于 **Article Typing（整篇/代码练习）** 的资源。

相关实现：

| 文件 | 职责 |
| :--- | :--- |
| `src/utils/articleParser.ts` | 源码 → Token 解析 |
| `src/resources/articleDictionary.ts` | 导出入口（re-export） |
| `src/resources/articles/` | **分路径资源库**（knowledge-eng / safti-concepts / js / python / fintech / ts / english） |
| `docs/article_curriculum_map.md` | 与 Obsidian「知识工程 + SAFTI」课程树的映射与推荐练习顺序 |
| `src/typings/article.ts` | `ArticleResource` / `ArticleLineToken` 类型 |
| `public/articles/*.json` | 可选静态副本（与内联 content 宜保持一致） |

设计背景见：`docs/article_typing_design_spec.md` §3、§9、§10。

---

## 1. 资源形态总览

一篇练习资源 = **元数据** + **正文 content**。

当前推荐做法（与现网一致）：

1. 在编辑器中用「源码 + 轻量标记」写好文本；
2. 把全文写入 `articleDictionary.ts` 的 `content` 字段（避免运行时 fetch 404）；
3. （可选）同步一份到 `public/articles/{id}.json` 便于审阅与未来编译管线。

```
源码草稿 (.js / .py / .md 文本)
        │  人工或脚本
        ▼
ArticleResource { id, name, ..., content }
        │  运行时 parseArticleSource()
        ▼
ParsedArticleContent { tokens[] }
```

---

## 2. 轻量标记协议（Comment Protocol）

解析按 **行** 进行（`\n` / `\r\n` 分割）。行首空白后匹配前缀。

### 2.1 标记一览

| 行前缀（行首可有缩进） | `type` | `isTypable` | 界面表现 |
| :--- | :--- | :---: | :--- |
| `//:` 或 `/*:` 或 `#:` | `explanation` | **false** | 琥珀色「💡 逻辑说明」卡片，**永不参与敲击** |
| `//` 或 `/*` 或 `#`（非上面的 `:` 形式） | `comment` | 默认 **true**；用户开启「跳过注释」后为 false | 斜体灰色；可敲或跳过 |
| 其他任意行（含空行） | `code` | **true** | 正常代码/正文，严格比对 |

> **注意：** `//:` 必须带冒号。`//` 与 `//:` 是两种语义，不要混用。

### 2.2 示例（JavaScript）

```javascript
//: 💡 闭包示例：返回一个持有外部变量的函数
function createCounter() {
  //: 声明局部变量 count
  let count = 0;

  // Increment and return current count
  return function () {
    count++;
    return count;
  };
}
```

解析结果语义：

| 行 | 类型 | 是否敲击 |
| :--- | :--- | :---: |
| `//: 💡 闭包示例…` | explanation | 否（卡片展示「💡 闭包示例…」） |
| `function createCounter() {` | code | 是 |
| `//: 声明局部变量 count` | explanation | 否 |
| `  let count = 0;` | code | 是 |
| `  // Increment…` | comment | 是（可配置跳过） |
| `  return function () {` | code | 是 |
| … | … | … |

### 2.3 示例（Python）

```python
#: 💡 阶乘：边界检查与递归
def factorial(n):
    # Check for invalid input
    if n < 0:
        raise ValueError('n must be non-negative')
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)
```

Python 使用 `#:` 作只读说明、`#` 作可敲注释。

### 2.4 示例（英文短文）

英文也可复用同一协议；说明仍可用 `//:`（或统一用 `#:`）：

```text
//: 💡 关于清晰代码的思考
Any fool can write code that a computer can understand.
Good programmers write code that humans can understand.

//: 💡 持续重构
Always leave the code cleaner than you found it.
```

### 2.5 空行

空行 `type=code`、`isTypable=true`，比对时对应目标串中的空行（`\n\n` 之间的空字符串行）。  
编写时请与期望用户敲击的换行结构一致。

### 2.6 当前解析器限制（贡献时需知）

| 限制 | 说明 |
| :--- | :--- |
| 仅按行匹配 | 行内 `code // comment` 整行当作 code |
| 块注释 | 不跨行解析 `/* ... */` 块；多行请每行单独标记或写成 code |
| 字符串内的 `//` | 若整行以 `//` 开头才当注释；`"http://x"` 行首不是 `//`，仍是 code |
| 缩进 | 行内前导空格原样保留在 `token.text`，参与比对 |

---

## 3. `ArticleResource` 元数据字段

```typescript
type ArticleResource = {
  id: string                 // 全局唯一，建议 kebab-case：js-basics-level1
  name: string               // 展示标题
  description: string        // 卡片简介
  category: '代码片段' | '英文文章' | '技术文档' | '自定义'
  tags: string[]             // 如 ['JavaScript', 'Level 1']
  language: 'javascript' | 'typescript' | 'python' | 'cpp' | 'java' | 'go' | 'english'
  codeLanguage?: string      // 高亮/解析提示，如 'javascript' | 'python' | 'markdown'
  content: string            // 全文（含标记），必填
  length: number             // 约计字符数（展示用，可 content.length）
  lineCount: number          // 约计行数
  level?: 1 | 2 | 3 | 4      // 阶梯难度
  author?: string
}
```

### 3.1 难度 Level 建议

| Level | 目标 | 内容建议 |
| :---: | :--- | :--- |
| 1 | 基础语法与控制流 | if/for、简单函数、基础标点 |
| 2 | 数据结构与 API | map/filter、对象字面量、短英文段 |
| 3 | OOP / 异步 | class、Promise、async/await |
| 4 | 工程片段 | 路由、Hook、小算法 |

### 3.2 Gallery 筛选约定

| Gallery Tab | 匹配逻辑 |
| :--- | :--- |
| 全部 | 全部资源 |
| Code | `category === '代码片段'` 或 `language !== 'english'` |
| JS / TS | `language` 为 `javascript` 或 `typescript` |
| Python | `language === 'python'` |
| 英文文章 | `language === 'english'` |

新增资源时请填对 `language` / `category`，否则 Tab 下不可见。

---

## 4. 注册步骤（当前仓库手写流程）

### 步骤 A：编写源码草稿

1. 新建草稿文件（本地即可），如 `resources-draft/js-map-filter.js`（不必入库）。
2. 用 `//:` / `#:` 写中文说明；需要用户练习的注释用普通 `//`。
3. 控制篇幅：建议 **可敲字符 150–500**，行数 **8–40**，避免一次练习过长。

### 步骤 B：填入 `articleDictionary.ts`

```typescript
{
  id: 'js-map-filter-level2',
  name: 'JS map / filter 链式调用',
  description: '练习数组链式调用与回调箭头函数结构',
  category: '代码片段',
  tags: ['JavaScript', 'Level 2'],
  language: 'javascript',
  codeLanguage: 'javascript',
  content: `//: 💡 过滤偶数并平方
const nums = [1, 2, 3, 4, 5, 6];
// Keep even numbers only
const result = nums.filter((n) => n % 2 === 0).map((n) => n * n);
console.log(result);`,
  length: 180,
  lineCount: 5,
  level: 2,
},
```

### 步骤 C：（可选）同步 `public/articles/{id}.json`

```json
{
  "id": "js-map-filter-level2",
  "title": "JS map / filter 链式调用",
  "language": "code",
  "codeLanguage": "javascript",
  "content": "..."
}
```

> 现网练习以 `articleDictionary.ts` 的 `content` 为准；`public/articles` 便于审阅，避免两处长期不一致。

### 步骤 D：自检清单

- [ ] `id` 唯一  
- [ ] `//:` 说明不含需敲的代码  
- [ ] 可敲部分无中文（避免 IME 打断；中文只放在 `//:`）  
- [ ] 缩进统一（2 或 4 空格，与练习设置默认 Tab 宽度一致更友好）  
- [ ] Gallery 的 language/category/tags 正确  
- [ ] 本地打开 `/article-typing` 切换该资源，准备遮罩下能透过毛玻璃看到正文  

---

## 5. 运行时解析与用户设置的关系

| 用户设置（文章齿轮） | 对解析/比对的影响 |
| :--- | :--- |
| 跳过英文注释 | `parseArticleSource(..., { skipComments: true })`，comment 行 `isTypable=false` |
| Tab 宽度 | 仅影响 Tab 键插入空格数，不改资源 |
| 智能缩进 | Enter 时自动补下一目标行前导空白 |
| 忽略大小写 | 比对 `isCharMatch(..., { ignoreCase })` |
| 显示逻辑说明 | 隐藏/显示 explanation 卡片，不改 target |
| 自动滚动 | 仅 UI |

**targetText 构建规则：** 所有 `isTypable === true` 的 `token.text` 用 `\n` 连接。

---

## 6. 推荐目录与未来编译管线（可选）

当资源变多时，可采用：

```
resources/articles/
  javascript/
    js-basics-level1.src.js      # 源文件 + 标记
  python/
    python-factorial.src.py
scripts/
  build-articles.mjs             # 扫描 → 生成 articleDictionary 片段或 JSON
public/articles/
  js-basics-level1.json
```

编译脚本伪流程：

1. 读 `*.src.*` 全文为 `content`；  
2. 从 front-matter 或旁路 `meta.json` 读 id/name/level；  
3. 校验标记（`//:` 行不应过长、id 唯一）；  
4. 输出 `public/articles/{id}.json` 并更新注册表。

**当前阶段不强制脚本**；手写注册即可。标记协议保持稳定，以便日后自动化。

---

## 7. Front-matter 约定（可选，供脚本使用）

若采用独立源文件，可在文件头使用：

```javascript
// @id js-basics-level1
// @name JS 基础控制流与函数
// @level 1
// @language javascript
// @category 代码片段
// @tags JavaScript,Level 1

//: 💡 正文从这里开始
function checkAdult(age) {
  ...
}
```

`@` 元数据行 **不要** 使用 `//:`（避免被当成 explanation 展示给用户）。  
解析脚本应剥离 `@` 行后再把剩余作为 `content`。

---

## 8. 质量与版权

- 练习文本仅供个人学习敲击；注明 `author` / 许可证（若摘录开源片段）。  
- 避免过长第三方代码；优先短 snippet + 自写示例。  
- 中文说明面向初学者，简洁、一句一行。  

---

## 9. 快速对照：标记字符

| 语言习惯 | 只读说明 | 可敲注释 |
| :--- | :--- | :--- |
| JS / TS / C 系 | `//: ...` | `// ...` |
| Python / Shell | `#: ...` | `# ...` |
| 通用块注释头 | `/*: ...` | `/* ...`（单行） |

---

**维护提示：** 修改标记语义时，同步更新 `articleParser.ts` 与本文档，并在 `docs/article_typing_development_log.md` 记一笔。
