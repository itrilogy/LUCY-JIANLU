import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/** Path E · 英文技术 / 金融阅读打字 */
export const ENGLISH_ARTICLES: ArticleResource[] = [
  def({
    id: 'english-essay-level2',
    name: 'Clean Code 编程哲学短文',
    description: '干净代码与持续重构',
    category: '英文文章',
    tags: ['English', 'Philosophy', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 清晰代码
Any fool can write code that a computer can understand.
Good programmers write code that humans can understand.

//: 💡 持续重构
Always leave the code cleaner than you found it.
Small improvements made consistently over time lead to great software.`,
  }),

  def({
    id: 'english-algorithm-complexity-level2',
    name: '英文 · 算法复杂度入门',
    description: 'Big-O 与时间空间权衡',
    category: '英文文章',
    tags: ['English', 'Level 2', '算法', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 时间复杂度
Time complexity describes how the running time of an algorithm grows
as the size of the input increases.

//: 💡 常见量级
Constant time is ideal. Linear time is often acceptable.
Quadratic time may become too slow for large datasets.
Always measure real performance, not only asymptotic notation.`,
  }),

  def({
    id: 'english-fintech-risk-level2',
    name: '英文 · 金融风险基础词汇',
    description: '市场风险与分散投资',
    category: '英文文章',
    tags: ['English', 'Level 2', 'FinTech', '风险'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 市场风险
Market risk is the possibility of losses due to movements in market prices,
including equities, interest rates, foreign exchange, and commodities.

//: 💡 分散投资
Diversification aims to reduce portfolio risk by combining assets
that do not move in perfect correlation.
It does not eliminate risk, but it can improve the risk-return profile.`,
  }),

  def({
    id: 'english-api-rest-level2',
    name: '英文 · REST API 基础概念',
    description: 'HTTP 方法与无状态',
    category: '英文文章',
    tags: ['English', 'Level 2', 'API', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 资源与动词
In a REST API, resources are identified by URLs.
HTTP methods express intent: GET reads, POST creates,
PUT replaces, PATCH updates partially, and DELETE removes.

//: 💡 无状态
Each request should contain enough information for the server
to process it without relying on stored client session context.`,
  }),

  def({
    id: 'english-git-workflow-level1',
    name: '英文 · Git 工作流短句',
    description: 'commit、branch、review',
    category: '英文文章',
    tags: ['English', 'Level 1', 'Git', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    content: `//: 💡 提交与分支
Create a feature branch from main before you start coding.
Write small commits with clear messages that explain why.

//: 💡 代码评审
Open a pull request early for feedback.
Review comments should be specific, kind, and actionable.`,
  }),

  def({
    id: 'english-interest-rates-level2',
    name: '英文 · 利率与现值概念',
    description: '货币时间价值与贴现',
    category: '英文文章',
    tags: ['English', 'Level 2', 'FinTech', '利率'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 货币时间价值
A dollar today is worth more than a dollar tomorrow
because it can be invested to earn interest.

//: 💡 现值
Present value discounts future cash flows by a required rate of return.
Higher discount rates reduce present value of distant cash flows.`,
  }),

  def({
    id: 'english-data-structures-level1',
    name: '英文 · 基础数据结构名词',
    description: '数组、栈、队列、哈希表短文',
    category: '英文文章',
    tags: ['English', 'Level 1', '数据结构', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    content: `//: 💡 数组与链表
Arrays store elements in contiguous memory and support fast index access.
Linked lists make insertion and deletion flexible but slower to scan.

//: 💡 栈与队列
A stack is last-in first-out. A queue is first-in first-out.
Both appear often in algorithms and system design.`,
  }),

  def({
    id: 'english-databases-level2',
    name: '英文 · 数据库与事务 ACID',
    description: '事务四性简要说明',
    category: '英文文章',
    tags: ['English', 'Level 2', '数据库', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 ACID
Atomicity means all or nothing. Consistency keeps valid state transitions.
Isolation controls concurrent interference. Durability keeps committed data after crashes.

//: 💡 索引直觉
Indexes speed up reads by avoiding full table scans,
but they add cost on writes and consume storage.`,
  }),

  def({
    id: 'english-security-basics-level2',
    name: '英文 · 应用安全基础',
    description: '最小权限、加密与防注入意识',
    category: '英文文章',
    tags: ['English', 'Level 2', '安全', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 最小权限
Grant each component only the permissions it needs.
Avoid shared admin credentials in application code.

//: 💡 输入校验
Never trust client input. Validate and encode data to reduce injection risks.
Keep secrets in secure configuration, not in source control.`,
  }),

  def({
    id: 'english-fintech-payments-level2',
    name: '英文 · 支付与清算词汇',
    description: 'authorization、settlement、chargeback',
    category: '英文文章',
    tags: ['English', 'Level 2', 'FinTech', '支付'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 授权与清算
Authorization checks whether funds can be reserved for a payment.
Settlement is the later process that moves money between parties.

//: 💡 拒付
A chargeback occurs when a cardholder disputes a transaction.
Strong fraud controls and clear records reduce operational loss.`,
  }),

  def({
    id: 'english-fintech-markets-level2',
    name: '英文 · 二级市场基础',
    description: 'bid/ask、流动性、做市',
    category: '英文文章',
    tags: ['English', 'Level 2', 'FinTech', '市场'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 买卖价差
The bid is the highest price a buyer will pay.
The ask is the lowest price a seller will accept.
The spread is a common measure of liquidity cost.

//: 💡 流动性
Liquid markets allow sizeable trades with limited price impact.
Illiquid markets can move sharply when order flow is one-sided.`,
  }),

  def({
    id: 'english-os-process-level2',
    name: '英文 · 进程与线程直觉',
    description: '并发与并行基础表述',
    category: '英文文章',
    tags: ['English', 'Level 2', '操作系统', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 进程与线程
A process is an isolated running program with its own memory space.
Threads share memory inside a process and enable concurrent work.

//: 💡 并发
Concurrency is about structuring tasks that make progress together.
Parallelism is about executing multiple tasks at the same physical time.`,
  }),

  def({
    id: 'english-networking-level2',
    name: '英文 · HTTP 与延迟',
    description: '请求响应与延迟来源',
    category: '英文文章',
    tags: ['English', 'Level 2', '网络', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 请求与响应
A client sends an HTTP request and waits for a response status and body.
Caching and compression can reduce bandwidth and latency.

//: 💡 延迟
Latency includes network travel time, queueing, and server processing.
Measure p95 and p99, not only average latency, for user experience.`,
  }),

  def({
    id: 'english-testing-level1',
    name: '英文 · 单元测试理念',
    description: '测试金字塔与断言短文',
    category: '英文文章',
    tags: ['English', 'Level 1', '测试', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    content: `//: 💡 单元测试
Unit tests verify small pieces of logic in isolation.
They should be fast, deterministic, and easy to read.

//: 💡 好断言
Assert behavior, not implementation details.
A failing test should point to a clear, fixable problem.`,
  }),

  def({
    id: 'english-agile-level1',
    name: '英文 · 敏捷协作短语',
    description: 'standup、sprint、backlog 常用表达',
    category: '英文文章',
    tags: ['English', 'Level 1', '协作', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    content: `//: 💡 站会
In standup, share what you finished, what you will do next,
and any blockers that need help.

//: 💡 迭代
A sprint is a short timebox to deliver a vertical slice of value.
Keep the backlog ordered by user impact and technical risk.`,
  }),

  def({
    id: 'english-fintech-compliance-level3',
    name: '英文 · 合规与 KYC 入门',
    description: '了解客户、反洗钱意识（概念向）',
    category: '英文文章',
    tags: ['English', 'Level 3', 'FinTech', '合规'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    content: `//: 💡 KYC
Know Your Customer processes verify identity and assess risk
before providing financial services.

//: 💡 AML 意识
Anti-money-laundering controls monitor unusual patterns and escalate suspicious activity.
Engineers should design audit logs and access controls that support compliance reviews.`,
  }),

  def({
    id: 'english-cloud-basics-level2',
    name: '英文 · 云计算基础概念',
    description: 'IaaS/PaaS 与弹性伸缩短文',
    category: '英文文章',
    tags: ['English', 'Level 2', '云', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 服务模型
IaaS provides virtual machines and networks.
PaaS focuses on deploying applications without managing every server detail.

//: 💡 弹性
Autoscaling adds or removes capacity as load changes.
Design services to be stateless where possible to scale horizontally.`,
  }),

  def({
    id: 'english-machine-learning-level2',
    name: '英文 · 机器学习入门表述',
    description: '训练、过拟合与特征',
    category: '英文文章',
    tags: ['English', 'Level 2', '机器学习', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 训练与泛化
A model learns patterns from training data and should generalize to new examples.
Overfitting memorizes noise and performs poorly on unseen data.

//: 💡 特征
Features are measurable inputs used by the model.
Good features often matter as much as complex algorithms.`,
  }),

  def({
    id: 'english-devops-ci-level2',
    name: '英文 · CI/CD 基础',
    description: '持续集成与部署流水线概念',
    category: '英文文章',
    tags: ['English', 'Level 2', 'DevOps', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 持续集成
Continuous integration merges small changes frequently
and runs automated tests on every change.

//: 💡 持续部署
Continuous delivery keeps software always releasable.
Automate builds, tests, and release checks to reduce risk.`,
  }),

  def({
    id: 'english-observability-level2',
    name: '英文 · 可观测性三支柱',
    description: 'metrics、logs、traces',
    category: '英文文章',
    tags: ['English', 'Level 2', '运维', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 指标与日志
Metrics show trends over time. Logs capture discrete events with context.
Use both to detect and diagnose problems.

//: 💡 链路追踪
Distributed traces connect requests across services.
They help find latency bottlenecks in microservice systems.`,
  }),

  def({
    id: 'english-fintech-blockchain-level2',
    name: '英文 · 区块链基础表述',
    description: '账本、共识与不可篡改直觉',
    category: '英文文章',
    tags: ['English', 'Level 2', 'FinTech', '区块链'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 分布式账本
A blockchain is a shared ledger where transactions are grouped into blocks
and linked using cryptographic hashes.

//: 💡 共识
Consensus protocols help nodes agree on the next valid state.
Immutability is practical, not absolute, and depends on network assumptions.`,
  }),

  def({
    id: 'english-sql-basics-level1',
    name: '英文 · SQL 查询概念',
    description: 'SELECT、WHERE、JOIN 短文',
    category: '英文文章',
    tags: ['English', 'Level 1', 'SQL', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    content: `//: 💡 查询
SELECT chooses columns. WHERE filters rows.
ORDER BY sorts the result set for presentation or pagination.

//: 💡 连接
JOIN combines rows from related tables using a key.
Prefer clear join conditions to avoid unexpected row multiplication.`,
  }),

  def({
    id: 'english-design-patterns-level2',
    name: '英文 · 设计模式入门',
    description: '工厂、策略与单一职责',
    category: '英文文章',
    tags: ['English', 'Level 2', '设计模式', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 模式是沟通工具
Design patterns name recurring solutions so teams can discuss trade-offs quickly.
Do not force a pattern where a simple function is enough.

//: 💡 策略模式
Strategy encapsulates interchangeable algorithms behind a common interface.
It helps when business rules change without rewriting callers.`,
  }),

  def({
    id: 'english-fintech-esg-level2',
    name: '英文 · ESG 投资概念',
    description: '环境、社会与治理因素',
    category: '英文文章',
    tags: ['English', 'Level 2', 'FinTech', 'ESG'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 ESG 因素
Environmental, social, and governance factors can affect long-term risk and return.
Investors may integrate ESG data alongside traditional financial analysis.

//: 💡 披露
Clear disclosure helps compare companies, but standards still vary by region and industry.`,
  }),

  def({
    id: 'english-privacy-gdpr-level2',
    name: '英文 · 数据隐私基础',
    description: '最小化采集与用户权利意识',
    category: '英文文章',
    tags: ['English', 'Level 2', '隐私', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 数据最小化
Collect only the personal data you need for a stated purpose.
Delete or anonymize data when it is no longer required.

//: 💡 用户权利
Users may request access, correction, or deletion depending on jurisdiction.
Build product workflows that can support these requests.`,
  }),

  def({
    id: 'english-cache-level2',
    name: '英文 · 缓存策略直觉',
    description: '命中率、失效与一致性',
    category: '英文文章',
    tags: ['English', 'Level 2', '性能', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    content: `//: 💡 为什么缓存
Caching stores expensive results so repeated reads become cheap.
Measure hit rate and latency to validate benefit.

//: 💡 失效
Stale data is a common bug. Choose TTLs and invalidation rules carefully.
Consistency requirements differ for feeds, balances, and static assets.`,
  }),

  def({
    id: 'english-fintech-derivatives-level3',
    name: '英文 · 衍生品基础词汇',
    description: '期权、期货与对冲直觉',
    category: '英文文章',
    tags: ['English', 'Level 3', 'FinTech', '衍生品'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    content: `//: 💡 远期与期货
Forwards and futures are agreements to transact an asset at a future date and price.
Futures are typically standardized and cleared.

//: 💡 期权与对冲
An option gives the right, not the obligation, to buy or sell.
Derivatives can hedge risk or amplify exposure depending on how they are used.`,
  }),

  def({
    id: 'english-refactoring-level1',
    name: '英文 · 重构原则短句',
    description: '小步修改与保持测试绿色',
    category: '英文文章',
    tags: ['English', 'Level 1', '重构', '计算科学'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    content: `//: 💡 小步重构
Refactor in small steps with frequent verification.
Prefer renaming and extracting functions over large rewrites.

//: 💡 测试保护
Keep automated tests green while restructuring.
Behavior should stay the same unless you intentionally change it.`,
  }),
]
