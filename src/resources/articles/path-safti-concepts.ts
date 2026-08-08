import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/**
 * Track: finance-concept (+ 部分 fintech-code 衔接)
 * 对齐 SAFTI 金融科技学院知识网络：
 * 00导航 → 01大一上 → 02大一下 → 03跨课 → 04金融地基 → 05大二预览
 */
export const SAFTI_CONCEPT_ARTICLES: ArticleResource[] = [
  // ── 01 大一上 · 微观 ──────────────────────────────────────
  def({
    id: 'safti-micro-supply-demand-en-l1',
    name: 'SAFTI · 供需模型英文',
    description: '大一上微观：supply、demand、equilibrium',
    category: '英文文章',
    tags: ['SAFTI', '微观经济学', 'Level 1', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'finance-concept',
    module: 'SAFTI-01-微观',
    content: `//: 💡 供需
Demand slopes down: higher prices usually mean lower quantity demanded.
Supply slopes up: higher prices encourage more quantity supplied.

//: 💡 均衡
Equilibrium is where supply meets demand.
A price ceiling below equilibrium can create shortages.`,
  }),

  def({
    id: 'safti-micro-elasticity-en-l2',
    name: 'SAFTI · 弹性与边际英文',
    description: '大一上微观：elasticity、marginal thinking',
    category: '英文文章',
    tags: ['SAFTI', '微观经济学', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-01-微观',
    content: `//: 💡 价格弹性
Price elasticity of demand measures how quantity responds to price changes.
Elastic demand reacts strongly; inelastic demand reacts weakly.

//: 💡 边际决策
Rational choices compare marginal benefit and marginal cost.
Ignore sunk costs that cannot be recovered.`,
  }),

  def({
    id: 'safti-micro-asymmetric-info-en-l2',
    name: 'SAFTI · 信息不对称英文',
    description: '逆向选择与道德风险入门表述',
    category: '英文文章',
    tags: ['SAFTI', '微观经济学', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-01-微观',
    content: `//: 💡 逆向选择
Adverse selection appears when one side hides quality before a contract.
Used cars and insurance markets are classic examples.

//: 💡 道德风险
Moral hazard appears when behavior changes after protection is granted.
Monitoring and incentives can reduce the gap.`,
  }),

  // ── 01 大一上 · FinTech 导论 ──────────────────────────────
  def({
    id: 'safti-fintech-def-en-l1',
    name: 'SAFTI · FinTech 定义与技术栈',
    description: '导论：金融 + 技术栈英文短文',
    category: '英文文章',
    tags: ['SAFTI', 'FinTech导论', 'Level 1', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'finance-concept',
    module: 'SAFTI-01-FinTech导论',
    content: `//: 💡 定义
FinTech applies software, data, and networks to financial services.
It covers payments, lending, wealth, insurance, and market infrastructure.

//: 💡 技术栈直觉
Typical stacks combine APIs, cloud services, mobile clients,
risk engines, and compliance logging.`,
  }),

  def({
    id: 'safti-fintech-products-en-l1',
    name: 'SAFTI · 金融产品全景英文',
    description: '股权、债权、基金、保险概念',
    category: '英文文章',
    tags: ['SAFTI', '金融产品', 'Level 1', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'finance-concept',
    module: 'SAFTI-01-FinTech导论',
    content: `//: 💡 基础产品
Equities are ownership claims. Bonds are debt claims with coupons.
Funds pool capital across many assets for diversification.

//: 💡 保险
Insurance transfers specified risks for a premium.
Pricing depends on probability, severity, and costs.`,
  }),

  def({
    id: 'safti-fintech-regulation-en-l2',
    name: 'SAFTI · 金融监管框架入门',
    description: '导论：审慎监管与行为监管意识',
    category: '英文文章',
    tags: ['SAFTI', '监管', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-01-FinTech导论',
    content: `//: 💡 为什么监管
Finance can create systemic risk and consumer harm.
Rules set capital, disclosure, and conduct standards.

//: 💡 合规工程
Engineers should design audit trails, access control, and data retention
as product requirements, not afterthoughts.`,
  }),

  // ── 01 程序设计衔接（金融语境代码） ───────────────────────
  def({
    id: 'safti-prog-types-finance-py-l1',
    name: 'SAFTI · Python 金融数据类型',
    description: '程序设计：int/float/str/list/dict 金融例子',
    category: '代码片段',
    tags: ['SAFTI', '程序设计', 'Python', 'Level 1'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    track: 'cs-programming',
    module: 'SAFTI-01-程序设计',
    content: `#: 💡 金融语境中的基本类型
shares = 100
price = 15.68
ticker = 'AAPL'
buy_signal = True
prices = [10.0, 11.2, 10.8]
book = {'AAPL': 150.0, 'TSLA': 700.0}

#: 💡 计算名义本金
notional = shares * price
print(ticker, notional, buy_signal)
print(book['AAPL'])`,
  }),

  def({
    id: 'safti-prog-control-trade-py-l1',
    name: 'SAFTI · 交易信号 if 控制流',
    description: '程序设计：条件判断驱动买卖信号',
    category: '代码片段',
    tags: ['SAFTI', '程序设计', 'Python', 'Level 1'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    track: 'cs-programming',
    module: 'SAFTI-01-程序设计',
    content: `#: 💡 均线金叉示意信号
def signal(short_ma, long_ma):
    if short_ma > long_ma:
        return 'BUY'
    elif short_ma < long_ma:
        return 'SELL'
    else:
        return 'HOLD'

print(signal(10.5, 10.2))`,
  }),

  // ── 01 高数 · 金融应用 ────────────────────────────────────
  def({
    id: 'safti-math-marginal-en-l2',
    name: 'SAFTI · 边际与弹性直觉英文',
    description: '高数金融应用：边际变化',
    category: '英文文章',
    tags: ['SAFTI', '高等数学', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-01-高数',
    content: `//: 💡 边际
A marginal change is a small increment from the current position.
In finance, think of one extra unit of risk or one extra dollar invested.

//: 💡 近似
Derivatives give local linear approximations.
For small rate moves, duration-like tools estimate price sensitivity.`,
  }),

  def({
    id: 'safti-math-compound-code-l1',
    name: 'SAFTI · 复利公式代码（Python）',
    description: '复利的力量：FV=PV(1+r)^n',
    category: '代码片段',
    tags: ['SAFTI', '金融地基', '复利', 'Python', 'Level 1'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    track: 'fintech-code',
    module: 'SAFTI-04-金融地基',
    content: `#: 💡 FV = PV * (1+r)**n
def future_value(pv, r, n):
    return pv * (1 + r) ** n

#: 💡 72 法则：翻倍年数约 72/(100r)
def years_to_double(rate):
    return 72 / (rate * 100)

print(future_value(10000, 0.08, 10))
print(years_to_double(0.08))`,
  }),

  // ── 02 大一下 · 宏观 ──────────────────────────────────────
  def({
    id: 'safti-macro-gdp-en-l1',
    name: 'SAFTI · GDP 与物价英文',
    description: '宏观：名义/实际 GDP 与通胀意识',
    category: '英文文章',
    tags: ['SAFTI', '宏观经济学', 'Level 1', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'finance-concept',
    module: 'SAFTI-02-宏观',
    content: `//: 💡 GDP
GDP measures the market value of final goods and services
produced in an economy over a period.

//: 💡 通胀
Inflation is a sustained rise in the general price level.
Real variables adjust nominal figures for price changes.`,
  }),

  def({
    id: 'safti-macro-monetary-en-l2',
    name: 'SAFTI · 货币政策工具英文',
    description: '利率、准备金与公开市场操作概念',
    category: '英文文章',
    tags: ['SAFTI', '宏观经济学', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-02-宏观',
    content: `//: 💡 政策利率
Central banks influence short-term rates to stabilize inflation and growth.
Lower policy rates tend to ease financial conditions.

//: 💡 传导
Monetary policy transmits through banks, asset prices, and expectations.
Lags are long and variable, so communication matters.`,
  }),

  // ── 02 会计 ───────────────────────────────────────────────
  def({
    id: 'safti-acct-equation-en-l1',
    name: 'SAFTI · 会计恒等式英文',
    description: 'Assets = Liabilities + Equity',
    category: '英文文章',
    tags: ['SAFTI', '会计学', 'Level 1', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 1,
    track: 'finance-concept',
    module: 'SAFTI-02-会计',
    content: `//: 💡 恒等式
Assets equal liabilities plus equity.
Every transaction keeps the identity in balance.

//: 💡 三张报表
The balance sheet is a snapshot. The income statement shows flow over time.
The cash flow statement reconciles cash changes.`,
  }),

  def({
    id: 'safti-acct-double-entry-py-l2',
    name: 'SAFTI · 复式记账分录模拟',
    description: '会计：借方贷方平衡校验代码',
    category: '代码片段',
    tags: ['SAFTI', '会计学', 'Python', 'Level 2'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    track: 'fintech-code',
    module: 'SAFTI-02-会计',
    content: `#: 💡 分录：[{account, side, amount}]
def is_balanced(entries):
    debit = sum(e['amount'] for e in entries if e['side'] == 'DR')
    credit = sum(e['amount'] for e in entries if e['side'] == 'CR')
    return abs(debit - credit) < 1e-9

entries = [
    {'account': 'Cash', 'side': 'DR', 'amount': 100},
    {'account': 'Revenue', 'side': 'CR', 'amount': 100},
]
print(is_balanced(entries))`,
  }),

  // ── 02 线代 / 概率 ────────────────────────────────────────
  def({
    id: 'safti-linalg-portfolio-en-l3',
    name: 'SAFTI · 矩阵与投资组合英文',
    description: '线代扩展：权重向量与收益',
    category: '英文文章',
    tags: ['SAFTI', '线性代数', 'Level 3', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    track: 'finance-concept',
    module: 'SAFTI-02-线代',
    content: `//: 💡 权重向量
A portfolio can be a vector of weights that sum to one.
Asset returns form another vector over the same assets.

//: 💡 点积直觉
Expected portfolio return is a weighted sum of asset expected returns.
Covariance matrices describe how assets move together.`,
  }),

  def({
    id: 'safti-prob-var-en-l3',
    name: 'SAFTI · 概率与 VaR 直觉英文',
    description: '统计→风控：分位数损失概念',
    category: '英文文章',
    tags: ['SAFTI', '概率论', '风险', 'Level 3', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    track: 'finance-concept',
    module: 'SAFTI-02-概率',
    content: `//: 💡 分位数
A quantile cuts a distribution at a probability level.
The 5% left-tail return is often used in simple VaR stories.

//: 💡 VaR
Value-at-Risk estimates a loss threshold that is not exceeded
with a chosen confidence over a horizon. It is not the worst loss.`,
  }),

  def({
    id: 'safti-prob-expected-value-py-l2',
    name: 'SAFTI · 期望与方差代码',
    description: '概率论：离散分布均值方差',
    category: '代码片段',
    tags: ['SAFTI', '概率论', 'Python', 'Level 2'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    track: 'cs-programming',
    module: 'SAFTI-02-概率',
    content: `#: 💡 离散期望 E[X]=Σ x p(x)
def expected_value(xs, ps):
    return sum(x * p for x, p in zip(xs, ps))

#: 💡 方差 Var=E[X^2]-E[X]^2
def variance(xs, ps):
    mu = expected_value(xs, ps)
    ex2 = expected_value([x * x for x in xs], ps)
    return ex2 - mu * mu

xs = [-0.1, 0.0, 0.1]
ps = [0.25, 0.5, 0.25]
print(expected_value(xs, ps), variance(xs, ps))`,
  }),

  // ── 03 跨课连接 ──────────────────────────────────────────
  def({
    id: 'safti-bridge-econ-finance-en-l2',
    name: 'SAFTI · 经济→金融桥梁英文',
    description: '跨课：利率、风险与定价语言',
    category: '英文文章',
    tags: ['SAFTI', '跨课连接', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-03-跨课',
    content: `//: 💡 从市场到资产
Micro price theory becomes security pricing when cash flows are timed and risky.
Discount rates embed time preference and risk premia.

//: 💡 模型是地图
Models simplify. Always ask which assumption fails in a crisis.`,
  }),

  def({
    id: 'safti-bridge-math-code-en-l2',
    name: 'SAFTI · 数学→编程→数据通路',
    description: '跨课：公式落地为可测代码',
    category: '英文文章',
    tags: ['SAFTI', '跨课连接', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-03-跨课',
    content: `//: 💡 三角链路
Math defines relationships. Code computes them on data.
Tests check edge cases the formula silently assumes.

//: 💡 可重复
Store inputs, seeds, and versions so results can be audited later.`,
  }),

  // ── 04 金融认知地基 ───────────────────────────────────────
  def({
    id: 'safti-found-behavior-en-l2',
    name: 'SAFTI · 行为金融偏差英文',
    description: '过度自信、损失厌恶等',
    category: '英文文章',
    tags: ['SAFTI', '金融地基', '行为金融', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-04-金融地基',
    content: `//: 💡 损失厌恶
Losses hurt more than equal gains please.
This can lead to holding losers too long.

//: 💡 过度自信
Overconfidence inflates trading volume and underestimates risk.
Check base rates before acting on a vivid story.`,
  }),

  def({
    id: 'safti-found-crisis-en-l2',
    name: 'SAFTI · 金融危机历史课英文',
    description: '杠杆、流动性与信心螺旋',
    category: '英文文章',
    tags: ['SAFTI', '金融地基', '危机', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-04-金融地基',
    content: `//: 💡 共同模式
Many crises combine leverage, maturity mismatch, and fragile confidence.
When funding freezes, forced sales push prices further down.

//: 💡 教训
Liquidity is not the same as solvency, but they interact under stress.
Diversification fails when correlations spike toward one.`,
  }),

  def({
    id: 'safti-found-emh-en-l2',
    name: 'SAFTI · 有效市场与指数基金',
    description: '扩展阅读：EMH 与被动投资表述',
    category: '英文文章',
    tags: ['SAFTI', '金融地基', 'EMH', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-04-金融地基',
    content: `//: 💡 EMH 直觉
If prices reflect available information quickly,
beating the market after costs is hard on average.

//: 💡 指数化
Index funds accept market beta at low fees.
Active strategies need a clear edge and discipline.`,
  }),

  def({
    id: 'safti-found-fixed-income-en-l2',
    name: 'SAFTI · 固定收益基础英文',
    description: '票息、到期与利率风险意识',
    category: '英文文章',
    tags: ['SAFTI', '金融地基', '固收', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-04-金融地基',
    content: `//: 💡 债券现金流
A plain vanilla bond pays coupons and repays principal at maturity.
Price moves inversely with yields, all else equal.

//: 💡 久期直觉
Longer cash flows are more sensitive to rate changes.
Duration summarizes first-order interest rate risk.`,
  }),

  def({
    id: 'safti-found-defi-en-l3',
    name: 'SAFTI · DeFi 与 Web3 金融入门',
    description: '扩展阅读：智能合约与链上交易概念',
    category: '英文文章',
    tags: ['SAFTI', '金融地基', 'DeFi', 'Level 3', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 3,
    track: 'finance-concept',
    module: 'SAFTI-04-金融地基',
    content: `//: 💡 智能合约
Smart contracts encode rules that execute on a blockchain.
They reduce some intermediaries but introduce code and oracle risk.

//: 💡 DeFi 乐高
Lending pools, AMMs, and stablecoins can be composed.
Composability multiplies both innovation and contagion paths.`,
  }),

  def({
    id: 'safti-found-esg-en-l2',
    name: 'SAFTI · ESG 与可持续金融',
    description: '扩展阅读：E/S/G 因素',
    category: '英文文章',
    tags: ['SAFTI', '金融地基', 'ESG', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-04-金融地基',
    content: `//: 💡 ESG
Environmental, social, and governance factors may affect long-run risk.
Data quality and greenwashing remain practical challenges.

//: 💡 整合
Some investors exclude industries; others engage for transition.
Be clear whether the goal is values, risk, or both.`,
  }),

  // ── 05 大二预览 · SQL ─────────────────────────────────────
  def({
    id: 'safti-sql-select-level2',
    name: 'SAFTI · SQL 金融查询入门',
    description: '大二预览：SELECT 持仓与成交',
    category: '技术文档',
    tags: ['SAFTI', 'SQL', '数据库', 'Level 2'],
    language: 'english',
    codeLanguage: 'sql',
    level: 2,
    track: 'cs-programming',
    module: 'SAFTI-05-数据库',
    content: `//: 💡 查询持仓
SELECT symbol, qty, market_value
FROM positions
WHERE account_id = 'A001'
ORDER BY market_value DESC;

//: 💡 聚合成交量
SELECT symbol, SUM(qty) AS total_qty
FROM trades
WHERE trade_date = '2026-06-12'
GROUP BY symbol;`,
  }),

  def({
    id: 'safti-sql-join-level3',
    name: 'SAFTI · SQL JOIN 客户订单',
    description: '大二预览：多表连接',
    category: '技术文档',
    tags: ['SAFTI', 'SQL', '数据库', 'Level 3'],
    language: 'english',
    codeLanguage: 'sql',
    level: 3,
    track: 'cs-programming',
    module: 'SAFTI-05-数据库',
    content: `//: 💡 客户与订单连接
SELECT c.name, o.order_id, o.notional
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.status = 'FILLED'
ORDER BY o.notional DESC;`,
  }),

  // ── 理性投资框架 ──────────────────────────────────────────
  def({
    id: 'safti-invest-framework-en-l2',
    name: 'SAFTI · 理性投资框架英文',
    description: '金融地基：目标、约束、分散、成本',
    category: '英文文章',
    tags: ['SAFTI', '金融地基', '投资框架', 'Level 2', 'English'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SAFTI-04-金融地基',
    content: `//: 💡 目标与约束
Define horizon, risk capacity, and liquidity needs before picking products.
A strategy that ignores constraints is not a plan.

//: 💡 成本与行为
Fees, taxes, and impulsive trading erode compounding.
Process beats prediction for most individual investors.`,
  }),
]
