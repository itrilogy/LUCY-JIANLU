import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/**
 * 双色球研究作业 · FinTech 起步
 * 源：Research Notes/01-双色球研究作业-洪浩耀的FinTech起步
 */
export const SSQ_FINTECH_ARTICLES: ArticleResource[] = [
  def({
    id: 'ssq-freq-chi-square-py-l2',
    name: 'SSQ · 号码频次与卡方检验',
    description: 'FinTech 起步：频次统计 + 均匀分布检验思路',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'FinTech', '概率', 'SSQ'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    track: 'fintech-code',
    module: 'SSQ-FinTech起步',
    content: `#: 💡 统计红球出现次数
def count_frequency(draws, n=33):
    freq = [0] * (n + 1)
    for reds in draws:
        for x in reds:
            freq[x] += 1
    return freq[1:]

#: 💡 卡方统计量（与均匀期望比较）
def chi_square(freq):
    total = sum(freq)
    expected = total / len(freq)
    return sum((o - expected) ** 2 / expected for o in freq)

draws = [[1, 2, 3, 4, 5, 6], [2, 4, 6, 8, 10, 12]]
print(chi_square(count_frequency(draws)))`,
  }),

  def({
    id: 'ssq-markov-transition-py-l3',
    name: 'SSQ · 转移矩阵与稳态',
    description: 'FinTech 起步：离散状态转移与稳态迭代',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'FinTech', 'Markov', 'SSQ'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    track: 'fintech-code',
    module: 'SSQ-FinTech起步',
    content: `#: 💡 行随机转移矩阵：下一状态概率
def step(pi, P):
    # pi: 1xN, P: NxN
    n = len(pi)
    out = [0.0] * n
    for j in range(n):
        s = 0.0
        for i in range(n):
            s += pi[i] * P[i][j]
        out[j] = s
    return out

#: 💡 迭代逼近稳态分布
def stationary(P, steps=50):
    n = len(P)
    pi = [1.0 / n] * n
    for _ in range(steps):
        pi = step(pi, P)
    return pi

P = [[0.7, 0.3], [0.4, 0.6]]
print(stationary(P))`,
  }),

  def({
    id: 'ssq-feature-state-py-l2',
    name: 'SSQ · 市场状态特征向量',
    description: 'FinTech 起步：从开奖期构造状态向量（简化）',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'FinTech', '特征工程', 'SSQ'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    track: 'fintech-code',
    module: 'SSQ-FinTech起步',
    content: `#: 💡 号码特征：跨度与和值
def number_features(reds):
    reds = sorted(reds)
    span = reds[-1] - reds[0]
    total = sum(reds)
    return [span, total]

#: 💡 拼接市场变量：奖池与投注额（示意缩放）
def market_features(pool, sales):
    return [pool / 1e8, sales / 1e8]

def build_state(reds, pool, sales):
    return number_features(reds) + market_features(pool, sales)

print(build_state([3, 8, 12, 19, 25, 31], 1.2e8, 3.5e8))`,
  }),

  def({
    id: 'ssq-house-edge-py-l2',
    name: 'SSQ · 庄家优势示意',
    description: 'FinTech 起步：派彩比率与 house edge',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'FinTech', '庄家模型', 'SSQ'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    track: 'fintech-code',
    module: 'SSQ-FinTech起步',
    content: `#: 💡 house edge = 1 - 总派彩 / 总投注
def house_edge(sales, total_payout):
    if sales <= 0:
        raise ValueError('sales must be positive')
    return 1.0 - total_payout / sales

#: 💡 期望收益（简化单注）
def expected_payoff(prob_win, prize, cost=2.0):
    return prob_win * prize - cost

print(house_edge(1e8, 0.51e8))
print(expected_payoff(1e-7, 5e6))`,
  }),

  def({
    id: 'ssq-eng-markov-intuition-l2',
    name: 'SSQ 英文 · Markov 与独立开奖',
    description: '概念：号码独立 vs 市场状态 Markov',
    category: '英文文章',
    tags: ['English', 'Level 2', 'FinTech', 'Markov', 'SSQ'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'finance-concept',
    module: 'SSQ-FinTech起步',
    content: `//: 💡 独立开奖
Lottery draws can be modeled as independent.
Past red numbers do not change the next fair draw.

//: 💡 市场状态可 Markov
Market heat, sales, and jackpot feedback may depend on the present state.
Future market state can be Markov even when draws stay independent.`,
  }),

  def({
    id: 'ssq-eng-engineering-l2',
    name: 'SSQ 英文 · 从脚本到服务',
    description: '分析脚本 vs 工程系统：调度、存储、Web',
    category: '英文文章',
    tags: ['English', 'Level 2', '工程', 'SSQ'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'english-literacy',
    module: 'SSQ-FinTech起步',
    content: `//: 💡 分析脚本
Notebooks and one-off scripts explore data quickly.
They often load full JSON and print terminal results.

//: 💡 工程系统
A service needs schedules, indexes, logging, and a Web UI.
Move from ad-hoc scripts to modules, databases, and jobs.`,
  }),
]
