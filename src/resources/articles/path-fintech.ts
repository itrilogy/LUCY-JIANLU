import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/** Path C · 金融科技场景（JS / Python） */
export const FINTECH_ARTICLES: ArticleResource[] = [
  def({
    id: 'fintech-simple-interest-js-level1',
    name: 'FinTech · 单利计算（JS）',
    description: 'Level 1：本金 × 利率 × 期限',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', 'FinTech', '利息'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 单利 Interest = P × r × t
function simpleInterest(principal, annualRate, years) {
  if (principal < 0 || annualRate < 0 || years < 0) {
    throw new Error('Inputs must be non-negative');
  }
  const interest = principal * annualRate * years;
  const total = principal + interest;
  return { interest, total };
}

const result = simpleInterest(10000, 0.05, 3);
console.log(result.interest, result.total);`,
  }),

  def({
    id: 'fintech-compound-interest-js-level2',
    name: 'FinTech · 复利与年化（JS）',
    description: 'Level 2：复利终值与循环累乘',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '复利'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 A = P × (1 + r/n)^(n×t)
function compoundAmount(principal, annualRate, years, compoundsPerYear) {
  const n = compoundsPerYear;
  const factor = Math.pow(1 + annualRate / n, n * years);
  return principal * factor;
}

//: 💡 循环逐步复利
function compoundByLoop(principal, annualRate, years, compoundsPerYear) {
  let balance = principal;
  const periods = years * compoundsPerYear;
  const ratePerPeriod = annualRate / compoundsPerYear;
  for (let i = 0; i < periods; i++) {
    balance = balance * (1 + ratePerPeriod);
  }
  return balance;
}`,
  }),

  def({
    id: 'fintech-balance-guard-js-level1',
    name: 'FinTech · 余额校验与转账守卫',
    description: 'Level 1：金额与余额合法性',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', 'FinTech', '风控入门'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 转账前校验
function canTransfer(balance, amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    return { ok: false, reason: 'INVALID_AMOUNT' };
  }
  if (amount <= 0) {
    return { ok: false, reason: 'NON_POSITIVE' };
  }
  if (amount > balance) {
    return { ok: false, reason: 'INSUFFICIENT_FUNDS' };
  }
  return { ok: true, reason: 'OK' };
}

function transfer(balance, amount) {
  const check = canTransfer(balance, amount);
  if (!check.ok) {
    throw new Error(check.reason);
  }
  return balance - amount;
}`,
  }),

  def({
    id: 'fintech-fx-convert-js-level2',
    name: 'FinTech · 汇率换算与点差',
    description: 'Level 2：中间价与 bid/ask',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '外汇'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 中间价换算
function convert(baseAmount, midRate) {
  return baseAmount * midRate;
}

//: 💡 点差 bps → 客户买卖价
function clientRate(midRate, spreadBps, side) {
  const half = (spreadBps / 10000) / 2;
  if (side === 'BUY') {
    return midRate * (1 + half);
  }
  return midRate * (1 - half);
}

const buyRate = clientRate(7.2, 20, 'BUY');
console.log(convert(1000, buyRate));`,
  }),

  def({
    id: 'fintech-portfolio-weights-js-level2',
    name: 'FinTech · 组合权重与归一化',
    description: 'Level 2：市值占比与权重和校验',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '组合'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 持仓权重
function portfolioWeights(positions) {
  const total = positions.reduce((s, p) => s + p.marketValue, 0);
  if (total <= 0) {
    throw new Error('Total market value must be positive');
  }
  return positions.map((p) => ({
    symbol: p.symbol,
    weight: p.marketValue / total,
  }));
}

function weightsSumOk(weights, eps = 1e-8) {
  const sum = weights.reduce((s, w) => s + w.weight, 0);
  return Math.abs(sum - 1) < eps;
}`,
  }),

  def({
    id: 'fintech-risk-volatility-js-level3',
    name: 'FinTech · 简单波动率与收益序列',
    description: 'Level 3：日收益与样本标准差',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'FinTech', '风险'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 简单收益率
function simpleReturns(prices) {
  const rets = [];
  for (let i = 1; i < prices.length; i++) {
    rets.push(prices[i] / prices[i - 1] - 1);
  }
  return rets;
}

//: 💡 样本均值与标准差
function meanStd(values) {
  const n = values.length;
  if (n < 2) {
    throw new Error('Need at least 2 observations');
  }
  const mean = values.reduce((a, b) => a + b, 0) / n;
  let varSum = 0;
  for (let i = 0; i < n; i++) {
    const d = values[i] - mean;
    varSum += d * d;
  }
  const std = Math.sqrt(varSum / (n - 1));
  return { mean, std };
}`,
  }),

  def({
    id: 'fintech-npv-js-level3',
    name: 'FinTech · 净现值 NPV',
    description: 'Level 3：现金流折现求和',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'FinTech', '估值'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 NPV = Σ CF_t / (1+r)^t
function npv(rate, cashFlows) {
  let total = 0;
  for (let t = 0; t < cashFlows.length; t++) {
    total += cashFlows[t] / Math.pow(1 + rate, t);
  }
  return total;
}

//: 💡 初始投资为负现金流
const flows = [-1000, 300, 400, 500];
console.log(npv(0.1, flows));`,
  }),

  def({
    id: 'fintech-loan-amort-js-level3',
    name: 'FinTech · 等额本息月供',
    description: 'Level 3：贷款月供公式（amortization 入门）',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'FinTech', '贷款'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 等额本息月供 M = P × r(1+r)^n / ((1+r)^n - 1)
function monthlyPayment(principal, annualRate, months) {
  if (months <= 0) {
    throw new Error('months must be positive');
  }
  const r = annualRate / 12;
  if (r === 0) {
    return principal / months;
  }
  const pow = Math.pow(1 + r, months);
  return (principal * r * pow) / (pow - 1);
}

console.log(monthlyPayment(500000, 0.045, 360));`,
  }),

  def({
    id: 'fintech-fee-tier-js-level2',
    name: 'FinTech · 阶梯手续费',
    description: 'Level 2：按交易额分档计费',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '费用'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 阶梯费率
function tradingFee(notional) {
  let rate = 0.001;
  if (notional >= 1000000) {
    rate = 0.0003;
  } else if (notional >= 100000) {
    rate = 0.0005;
  }
  return notional * rate;
}

//: 💡 最低费用封顶可选
function feeWithFloor(notional, floor = 1) {
  return Math.max(floor, tradingFee(notional));
}`,
  }),

  def({
    id: 'fintech-margin-level2',
    name: 'FinTech · 保证金与杠杆示意',
    description: 'Level 2：名义本金、杠杆与所需保证金',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '杠杆'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 保证金 = 名义本金 / 杠杆
function requiredMargin(notional, leverage) {
  if (leverage <= 0) {
    throw new Error('leverage must be positive');
  }
  return notional / leverage;
}

//: 💡 可用杠杆上限
function maxNotional(equity, leverage) {
  return equity * leverage;
}`,
  }),

  def({
    id: 'fintech-settlement-t1-js-level2',
    name: 'FinTech · T+1 交收日计算（简化）',
    description: 'Level 2：跳过周末的简易交收日',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '清算'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 从交易日向后推进 1 个工作日（忽略节假日）
function nextBusinessDay(date) {
  const d = new Date(date.getTime());
  d.setDate(d.getDate() + 1);
  const day = d.getDay();
  if (day === 6) {
    d.setDate(d.getDate() + 2);
  } else if (day === 0) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}

function settlementT1(tradeDate) {
  return nextBusinessDay(tradeDate);
}`,
  }),

  def({
    id: 'fintech-credit-score-js-level2',
    name: 'FinTech · 简化信用分规则',
    description: 'Level 2：多因子加权打分（示意，非真实模型）',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '信贷'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 教学用线性打分
function creditScore(input) {
  let score = 500;
  score += Math.min(100, input.yearsEmployed * 10);
  score += input.hasStableIncome ? 50 : 0;
  score -= input.latePayments * 20;
  score = Math.max(300, Math.min(850, score));
  return score;
}

function riskBand(score) {
  if (score >= 750) return 'LOW';
  if (score >= 650) return 'MEDIUM';
  return 'HIGH';
}`,
  }),

  def({
    id: 'fintech-compound-python-level2',
    name: 'FinTech · 复利与定投（Python）',
    description: 'Level 2：复利终值与每月定投循环',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'FinTech', '复利', '定投'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 期末复利
def compound_fv(principal, annual_rate, years, n=12):
    return principal * (1 + annual_rate / n) ** (n * years)

#: 💡 每月定投
def dca_future_value(monthly, annual_rate, months):
    r = annual_rate / 12
    balance = 0.0
    for _ in range(months):
        balance = balance * (1 + r) + monthly
    return balance

print(compound_fv(10000, 0.06, 10))
print(dca_future_value(1000, 0.06, 120))`,
  }),

  def({
    id: 'fintech-order-validate-python-level2',
    name: 'FinTech · 订单字段校验（Python）',
    description: 'Level 2：symbol/side/qty/price 校验',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'FinTech', '交易'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 校验订单
def validate_order(order):
    required = ['symbol', 'side', 'qty', 'price']
    for key in required:
        if key not in order:
            return False, f'missing:{key}'
    if order['side'] not in ('BUY', 'SELL'):
        return False, 'invalid_side'
    if order['qty'] <= 0 or order['price'] <= 0:
        return False, 'non_positive'
    return True, 'ok'

def order_notional(order):
    ok, reason = validate_order(order)
    if not ok:
        raise ValueError(reason)
    return order['qty'] * order['price']`,
  }),

  def({
    id: 'fintech-moving-average-python-level3',
    name: 'FinTech · 简单移动平均 SMA',
    description: 'Level 3：滑动窗口均线与金叉示意',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', '量化入门'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 SMA
def sma(prices, period):
    if period <= 0:
        raise ValueError('period must be positive')
    if len(prices) < period:
        return []
    out = []
    for i in range(period - 1, len(prices)):
        window = prices[i - period + 1 : i + 1]
        out.append(sum(window) / period)
    return out

def golden_cross(short_ma, long_ma):
    if len(short_ma) < 2 or len(long_ma) < 2:
        return False
    return short_ma[-2] <= long_ma[-2] and short_ma[-1] > long_ma[-1]`,
  }),

  def({
    id: 'fintech-irr-stub-python-level3',
    name: 'FinTech · IRR 牛顿迭代示意',
    description: 'Level 3：内部收益率数值解入门（教学简化）',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', '估值'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 NPV 函数
def npv(rate, cash_flows):
    total = 0.0
    for t, cf in enumerate(cash_flows):
        total += cf / (1 + rate) ** t
    return total

#: 💡 简易牛顿法求 IRR（教学用）
def irr(cash_flows, guess=0.1, tol=1e-6, max_iter=50):
    r = guess
    for _ in range(max_iter):
        f = npv(r, cash_flows)
        # numerical derivative
        f1 = npv(r + 1e-6, cash_flows)
        deriv = (f1 - f) / 1e-6
        if abs(deriv) < 1e-12:
            break
        r_next = r - f / deriv
        if abs(r_next - r) < tol:
            return r_next
        r = r_next
    return r`,
  }),

  def({
    id: 'fintech-position-pnl-python-level2',
    name: 'FinTech · 持仓盈亏计算',
    description: 'Level 2：成本价、现价与浮动盈亏',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'FinTech', '交易'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 多头浮动盈亏
def long_pnl(qty, cost, mark):
    return qty * (mark - cost)

#: 💡 含手续费的净盈亏
def net_pnl(qty, cost, mark, fee=0.0):
    return long_pnl(qty, cost, mark) - fee

print(net_pnl(100, 10.0, 10.5, fee=2.0))`,
  }),

  def({
    id: 'fintech-cashflow-schedule-python-level2',
    name: 'FinTech · 简单现金流日程',
    description: 'Level 2：生成固定期数的还款计划金额列表',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'FinTech', '贷款'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 等额本金：每期本金固定
def equal_principal_schedule(principal, periods):
    if periods <= 0:
        raise ValueError('periods must be positive')
    pmt_principal = principal / periods
    return [pmt_principal for _ in range(periods)]

#: 💡 剩余本金序列
def remaining_principal(principal, schedule):
    left = principal
    out = []
    for p in schedule:
        left -= p
        out.append(left)
    return out`,
  }),

  def({
    id: 'fintech-var-historical-js-level3',
    name: 'FinTech · 历史模拟 VaR 入门',
    description: 'Level 3：分位数损失（教学简化）',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'FinTech', '风险'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 历史模拟：取收益分布左侧分位
function historicalVar(returns, alpha = 0.05) {
  if (returns.length === 0) {
    throw new Error('empty returns');
  }
  const sorted = [...returns].sort((a, b) => a - b);
  const idx = Math.floor(alpha * sorted.length);
  const q = sorted[Math.max(0, idx)];
  // VaR as positive loss number
  return -q;
}`,
  }),

  def({
    id: 'fintech-twap-python-level3',
    name: 'FinTech · TWAP 时间加权均价',
    description: 'Level 3：等权时间切片均价',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', '交易'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 简化 TWAP：各时间片价格算术平均
def twap(prices):
    if not prices:
        raise ValueError('empty prices')
    return sum(prices) / len(prices)

#: 💡 与 VWAP 对比：成交量加权
def vwap(prices, volumes):
    num = 0.0
    den = 0.0
    for p, v in zip(prices, volumes):
        num += p * v
        den += v
    if den == 0:
        raise ValueError('zero volume')
    return num / den`,
  }),

  def({
    id: 'fintech-apr-apy-js-level2',
    name: 'FinTech · APR 与 APY 换算',
    description: 'Level 2：名义年利率与有效年利率',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '利率'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 APY = (1 + APR/n)^n - 1
function aprToApy(apr, n) {
  return Math.pow(1 + apr / n, n) - 1;
}

//: 💡 反解近似：已知 APY 求 APR（数值牛顿可另写）
function apyToAprApprox(apy, n) {
  return n * (Math.pow(1 + apy, 1 / n) - 1);
}

console.log(aprToApy(0.05, 12));`,
  }),

  def({
    id: 'fintech-break-even-js-level1',
    name: 'FinTech · 盈亏平衡销量',
    description: 'Level 1：固定成本、单价与变动成本',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', 'FinTech', '经营'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 盈亏平衡量 = 固定成本 / (单价 - 单位变动成本)
function breakEvenUnits(fixedCost, price, variableCost) {
  const margin = price - variableCost;
  if (margin <= 0) {
    throw new Error('price must exceed variable cost');
  }
  return Math.ceil(fixedCost / margin);
}

console.log(breakEvenUnits(10000, 50, 30));`,
  }),

  def({
    id: 'fintech-roi-js-level1',
    name: 'FinTech · ROI 投资回报率',
    description: 'Level 1：收益相对成本的百分比',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', 'FinTech', '指标'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 ROI = (gain - cost) / cost
function roi(gain, cost) {
  if (cost === 0) {
    throw new Error('cost must be non-zero');
  }
  return (gain - cost) / cost;
}

function roiPercent(gain, cost) {
  return roi(gain, cost) * 100;
}`,
  }),

  def({
    id: 'fintech-cagr-js-level2',
    name: 'FinTech · CAGR 复合年化收益',
    description: 'Level 2：期初期末价值年化',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '收益'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 CAGR = (end/start)^(1/years) - 1
function cagr(startValue, endValue, years) {
  if (startValue <= 0 || years <= 0) {
    throw new Error('invalid inputs');
  }
  return Math.pow(endValue / startValue, 1 / years) - 1;
}

console.log(cagr(10000, 16105, 5));`,
  }),

  def({
    id: 'fintech-sharpe-js-level3',
    name: 'FinTech · 夏普比率示意',
    description: 'Level 3：(超额收益) / 波动率',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'FinTech', '风险'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 简化夏普：meanExcess / std
function sharpe(returns, riskFree = 0) {
  const n = returns.length;
  if (n < 2) {
    throw new Error('need returns');
  }
  const excess = returns.map((r) => r - riskFree);
  const mean = excess.reduce((a, b) => a + b, 0) / n;
  let v = 0;
  for (const x of excess) {
    v += (x - mean) * (x - mean);
  }
  const std = Math.sqrt(v / (n - 1));
  if (std === 0) {
    return 0;
  }
  return mean / std;
}`,
  }),

  def({
    id: 'fintech-limit-order-match-js-level3',
    name: 'FinTech · 限价单撮合示意',
    description: 'Level 3：买一卖一能否成交',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'FinTech', '交易'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 买价 >= 卖价则可撮合
function canMatch(bidPrice, askPrice) {
  return bidPrice >= askPrice;
}

//: 💡 成交价取中间或做市规则（教学用中间价）
function midPrice(bid, ask) {
  return (bid + ask) / 2;
}

function tryMatch(bid, ask) {
  if (!canMatch(bid, ask)) {
    return null;
  }
  return midPrice(bid, ask);
}`,
  }),

  def({
    id: 'fintech-bond-price-python-level3',
    name: 'FinTech · 固息债价格近似',
    description: 'Level 3：票息贴现 + 面值贴现',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', '固收'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 年付息债券价格
def bond_price(face, coupon_rate, ytm, years):
    coupon = face * coupon_rate
    price = 0.0
    for t in range(1, years + 1):
        price += coupon / (1 + ytm) ** t
    price += face / (1 + ytm) ** years
    return price

print(bond_price(100, 0.05, 0.06, 3))`,
  }),

  def({
    id: 'fintech-drawdown-python-level3',
    name: 'FinTech · 最大回撤',
    description: 'Level 3：净值曲线最大峰值回撤',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', '风险'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 最大回撤（正数表示回撤幅度）
def max_drawdown(equity_curve):
    peak = equity_curve[0]
    max_dd = 0.0
    for x in equity_curve:
        if x > peak:
            peak = x
        dd = (peak - x) / peak if peak != 0 else 0.0
        if dd > max_dd:
            max_dd = dd
    return max_dd`,
  }),

  def({
    id: 'fintech-kelly-python-level3',
    name: 'FinTech · 凯利公式示意',
    description: 'Level 3：胜率赔率下的仓位比例',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', '仓位'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 Kelly f* = p - (1-p)/b ，b 为赔率净收益比
def kelly_fraction(p_win, b_odds):
    if b_odds <= 0 or p_win < 0 or p_win > 1:
        raise ValueError('invalid inputs')
    f = p_win - (1 - p_win) / b_odds
    return max(0.0, f)

print(kelly_fraction(0.55, 1.0))`,
  }),

  def({
    id: 'fintech-rebalance-js-level2',
    name: 'FinTech · 组合再平衡差额',
    description: 'Level 2：目标权重与当前市值差',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', 'FinTech', '组合'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 计算各资产应调整金额
function rebalanceDeltas(totalValue, currentValues, targetWeights) {
  const deltas = {};
  for (const symbol of Object.keys(targetWeights)) {
    const target = totalValue * targetWeights[symbol];
    const cur = currentValues[symbol] || 0;
    deltas[symbol] = target - cur;
  }
  return deltas;
}`,
  }),

  def({
    id: 'fintech-currency-round-js-level1',
    name: 'FinTech · 金额四舍五入到分',
    description: 'Level 1：货币最小单位处理',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', 'FinTech', '精度'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 四舍五入到 2 位小数（教学用）
function roundMoney(amount) {
  return Math.round(amount * 100) / 100;
}

//: 💡 分整数运算再还原
function addMoney(a, b) {
  const cents = Math.round(a * 100) + Math.round(b * 100);
  return cents / 100;
}

console.log(addMoney(0.1, 0.2));`,
  }),

  def({
    id: 'fintech-duration-python-level3',
    name: 'FinTech · 麦考利久期示意',
    description: 'Level 3：现金流加权平均到期时间',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', '固收'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 麦考利久期（年付息简化）
def macaulay_duration(face, coupon_rate, ytm, years):
    coupon = face * coupon_rate
    price = 0.0
    weighted = 0.0
    for t in range(1, years + 1):
        cf = coupon if t < years else coupon + face
        df = cf / (1 + ytm) ** t
        price += df
        weighted += t * df
    return weighted / price`,
  }),
]
