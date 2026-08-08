import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/** Path B · Python 计算科学语法阶梯 */
export const PYTHON_ARTICLES: ArticleResource[] = [
  def({
    id: 'python-basics-level1',
    name: 'Python 阶乘与列表推导式',
    description: 'Level 1：缩进、异常与列表推导式',
    category: '代码片段',
    tags: ['Python', 'Level 1', '控制流', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    content: `#: 💡 阶乘与边界检查
def factorial(n):
    if n < 0:
        raise ValueError('n must be non-negative')
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

#: 💡 列表推导式过滤偶数并平方
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x ** 2 for x in numbers if x % 2 == 0]
print(even_squares)`,
  }),

  def({
    id: 'python-dict-loop-level1',
    name: 'Python 字典与 for 遍历',
    description: 'Level 1：dict 读写与 items 遍历',
    category: '代码片段',
    tags: ['Python', 'Level 1', '字典', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    content: `#: 💡 词频统计
def word_count(words):
    counts = {}
    for w in words:
        if w in counts:
            counts[w] += 1
        else:
            counts[w] = 1
    return counts

stats = word_count(['buy', 'sell', 'buy', 'hold'])
for key, value in stats.items():
    print(key, value)`,
  }),

  def({
    id: 'python-while-if-level1',
    name: 'Python while 与多分支 if',
    description: 'Level 1：while、elif 与输入校验风格',
    category: '代码片段',
    tags: ['Python', 'Level 1', '控制流', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    content: `#: 💡 用 while 累加直到上限
def sum_until(limit):
    total = 0
    n = 1
    while total + n <= limit:
        total += n
        n += 1
    return total, n - 1

#: 💡 多分支评分
def grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 60:
        return 'C'
    else:
        return 'F'`,
  }),

  def({
    id: 'python-string-list-level1',
    name: 'Python 字符串与列表切片',
    description: 'Level 1：split/join、切片与 strip',
    category: '代码片段',
    tags: ['Python', 'Level 1', '字符串', '列表', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    content: `#: 💡 清洗并拆分标签
def parse_tags(raw):
    parts = raw.split(',')
    return [p.strip().lower() for p in parts if p.strip()]

#: 💡 切片取前缀后缀
def head_tail(items, k=3):
    return items[:k], items[-k:]

print(parse_tags(' FinTech, Python, JS '))`,
  }),

  def({
    id: 'python-functions-modules-level2',
    name: 'Python 函数参数与返回值',
    description: 'Level 2：默认参数与多返回值',
    category: '代码片段',
    tags: ['Python', 'Level 2', '函数', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 默认参数与元组返回
def clamp(value, low=0.0, high=1.0):
    if value < low:
        return low, 'min'
    if value > high:
        return high, 'max'
    return value, 'ok'

x, flag = clamp(1.5, 0.0, 1.0)
print(x, flag)`,
  }),

  def({
    id: 'python-set-tuple-level2',
    name: 'Python 集合与元组',
    description: 'Level 2：set 交并差与 tuple 解包',
    category: '代码片段',
    tags: ['Python', 'Level 2', '集合', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 集合运算
def set_ops(a, b):
    sa, sb = set(a), set(b)
    return {
        'union': sa | sb,
        'inter': sa & sb,
        'diff': sa - sb,
    }

#: 💡 元组解包交换
def swap(x, y):
    return y, x

print(set_ops([1, 2, 3], [2, 3, 4]))`,
  }),

  def({
    id: 'python-try-except-level2',
    name: 'Python 异常 try/except',
    description: 'Level 2：捕获 ValueError 与通用 Exception',
    category: '代码片段',
    tags: ['Python', 'Level 2', '异常', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 安全转换为 float
def to_float(text):
    try:
        return float(text)
    except ValueError:
        return None

#: 💡 除法保护
def safe_div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None`,
  }),

  def({
    id: 'python-lambda-sort-level2',
    name: 'Python lambda 与排序',
    description: 'Level 2：key 函数与 sorted 稳定排序',
    category: '代码片段',
    tags: ['Python', 'Level 2', '排序', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 按分数降序排序学生
def rank_students(rows):
    return sorted(rows, key=lambda r: r['score'], reverse=True)

#: 💡 多关键字：先班级后分数
def rank_by_class(rows):
    return sorted(rows, key=lambda r: (r['class'], -r['score']))`,
  }),

  def({
    id: 'python-stack-queue-level2',
    name: 'Python 栈与队列模拟',
    description: 'Level 2：list 作栈、collections 思路的队列',
    category: '代码片段',
    tags: ['Python', 'Level 2', '数据结构', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 栈：后进先出
def stack_demo():
    st = []
    st.append('A')
    st.append('B')
    return st.pop(), st

#: 💡 队列：用 list 左端出队（教学用）
def queue_demo():
    q = ['A', 'B', 'C']
    first = q.pop(0)
    q.append('D')
    return first, q`,
  }),

  def({
    id: 'python-recursion-level2',
    name: 'Python 递归与尾部思考',
    description: 'Level 2：递归求和与最大深度边界',
    category: '代码片段',
    tags: ['Python', 'Level 2', '递归', '算法', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 列表递归求和
def sum_list(xs):
    if not xs:
        return 0
    return xs[0] + sum_list(xs[1:])

#: 💡 递归找最大值
def max_of(xs):
    if len(xs) == 1:
        return xs[0]
    m = max_of(xs[1:])
    return xs[0] if xs[0] > m else m`,
  }),

  def({
    id: 'python-dataclass-level3',
    name: 'Python 简单数据类与列表处理',
    description: 'Level 3：class 记录 + 过滤排序',
    category: '代码片段',
    tags: ['Python', 'Level 3', '数据结构', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 交易记录
class Trade:
    def __init__(self, symbol, side, qty, price):
        self.symbol = symbol
        self.side = side
        self.qty = qty
        self.price = price

    def notional(self):
        return self.qty * self.price

#: 💡 筛选买单并按名义金额排序
def top_buys(trades, n=3):
    buys = [t for t in trades if t.side == 'BUY']
    buys.sort(key=lambda t: t.notional(), reverse=True)
    return buys[:n]`,
  }),

  def({
    id: 'python-binary-search-level3',
    name: 'Python 二分查找',
    description: 'Level 3：有序序列二分模板',
    category: '代码片段',
    tags: ['Python', 'Level 3', '算法', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 二分查找，失败返回 -1
def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
  }),

  def({
    id: 'python-generators-level3',
    name: 'Python 生成器 yield',
    description: 'Level 3：惰性序列与生成器函数',
    category: '代码片段',
    tags: ['Python', 'Level 3', '生成器', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 生成前 n 个自然数
def naturals(n):
    i = 0
    while i < n:
        yield i
        i += 1

#: 💡 管道式过滤
def only_even(stream):
    for x in stream:
        if x % 2 == 0:
            yield x

print(list(only_even(naturals(10))))`,
  }),

  def({
    id: 'python-comprehension-dict-level2',
    name: 'Python 字典推导式',
    description: 'Level 2：dict/set 推导式',
    category: '代码片段',
    tags: ['Python', 'Level 2', '推导式', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 列表转索引字典
def index_map(items):
    return {item: i for i, item in enumerate(items)}

#: 💡 过滤字典
def filter_scores(scores, low=60):
    return {k: v for k, v in scores.items() if v >= low}

print(index_map(['a', 'b', 'c']))`,
  }),

  def({
    id: 'python-file-lines-level2',
    name: 'Python 按行处理文本（模拟）',
    description: 'Level 2：字符串行拆分与计数（不依赖真实 IO）',
    category: '代码片段',
    tags: ['Python', 'Level 2', '文本处理', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 模拟读取多行日志
def count_errors(log_text):
    lines = log_text.splitlines()
    n = 0
    for line in lines:
        if 'ERROR' in line:
            n += 1
    return n

sample = 'INFO ok\\nERROR fail\\nWARN x\\nERROR y'
print(count_errors(sample))`,
  }),

  def({
    id: 'python-matrix-sum-level3',
    name: 'Python 二维列表求和',
    description: 'Level 3：矩阵遍历与行列和',
    category: '代码片段',
    tags: ['Python', 'Level 3', '矩阵', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 矩阵元素总和
def matrix_sum(mat):
    total = 0
    for row in mat:
        for v in row:
            total += v
    return total

#: 💡 每行求和
def row_sums(mat):
    return [sum(row) for row in mat]`,
  }),

  def({
    id: 'python-enumerate-zip-level1',
    name: 'Python enumerate 与 zip',
    description: 'Level 1：带下标遍历与并行迭代',
    category: '代码片段',
    tags: ['Python', 'Level 1', '迭代', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    content: `#: 💡 enumerate 打印索引
def print_indexed(items):
    for i, x in enumerate(items):
        print(i, x)

#: 💡 zip 合并两列
def pairs(xs, ys):
    return list(zip(xs, ys))

print(pairs(['a', 'b'], [1, 2]))`,
  }),

  def({
    id: 'python-fstring-level1',
    name: 'Python f-string 格式化',
    description: 'Level 1：插值与小数位数',
    category: '代码片段',
    tags: ['Python', 'Level 1', '字符串', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 1,
    content: `#: 💡 f-string 基础
def greet(name, score):
    return f'Hello {name}, score={score}'

#: 💡 保留两位小数
def money(amount):
    return f'{amount:.2f}'

print(greet('Ada', 98))
print(money(12.5))`,
  }),

  def({
    id: 'python-counter-level2',
    name: 'Python 手动 Counter',
    description: 'Level 2：不用 collections 的频次统计',
    category: '代码片段',
    tags: ['Python', 'Level 2', '字典', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 统计出现次数
def counter(items):
    c = {}
    for x in items:
        c[x] = c.get(x, 0) + 1
    return c

#: 💡 取出现最多的键
def most_common(c):
    best_k, best_v = None, -1
    for k, v in c.items():
        if v > best_v:
            best_k, best_v = k, v
    return best_k, best_v`,
  }),

  def({
    id: 'python-sliding-window-level3',
    name: 'Python 滑动窗口最大和',
    description: 'Level 3：定长窗口和的 O(n) 算法',
    category: '代码片段',
    tags: ['Python', 'Level 3', '算法', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 长度为 k 的子数组最大和
def max_window_sum(nums, k):
    if k <= 0 or k > len(nums):
        raise ValueError('invalid k')
    s = sum(nums[:k])
    best = s
    for i in range(k, len(nums)):
        s += nums[i] - nums[i - k]
        if s > best:
            best = s
    return best`,
  }),

  def({
    id: 'python-two-pointers-level3',
    name: 'Python 双指针有序两数和',
    description: 'Level 3：左右指针逼近目标',
    category: '代码片段',
    tags: ['Python', 'Level 3', '算法', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 有序数组两数之和索引
def two_sum_sorted(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        s = nums[lo] + nums[hi]
        if s == target:
            return lo, hi
        if s < target:
            lo += 1
        else:
            hi -= 1
    return None`,
  }),

  def({
    id: 'python-decorators-level3',
    name: 'Python 装饰器计时示意',
    description: 'Level 3：装饰器包装函数',
    category: '代码片段',
    tags: ['Python', 'Level 3', '装饰器', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 简易计时装饰器（伪时间）
def timed(fn):
    def wrapper(*args, **kwargs):
        # start = time.time()
        result = fn(*args, **kwargs)
        # print('elapsed', time.time() - start)
        return result
    return wrapper

@timed
def add(a, b):
    return a + b

print(add(1, 2))`,
  }),

  def({
    id: 'python-context-manager-level3',
    name: 'Python 上下文管理器类',
    description: 'Level 3：__enter__ / __exit__ 模板',
    category: '代码片段',
    tags: ['Python', 'Level 3', '资源管理', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 计资源占用的上下文
class Resource:
    def __init__(self, name):
        self.name = name
        self.open = False

    def __enter__(self):
        self.open = True
        return self

    def __exit__(self, exc_type, exc, tb):
        self.open = False
        return False

with Resource('db') as r:
    print(r.name, r.open)`,
  }),

  def({
    id: 'python-bfs-level3',
    name: 'Python BFS 最短层数',
    description: 'Level 3：图的广度优先遍历入门',
    category: '代码片段',
    tags: ['Python', 'Level 3', '图算法', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    content: `#: 💡 无权图 BFS 最短边数
def bfs_distance(graph, start, goal):
    from collections import deque
    q = deque([(start, 0)])
    seen = {start}
    while q:
        node, dist = q.popleft()
        if node == goal:
            return dist
        for nxt in graph.get(node, []):
            if nxt not in seen:
                seen.add(nxt)
                q.append((nxt, dist + 1))
    return -1`,
  }),

  def({
    id: 'python-normalize-vector-level2',
    name: 'Python 向量 L2 归一化',
    description: 'Level 2：数值计算入门',
    category: '代码片段',
    tags: ['Python', 'Level 2', '数值', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 L2 范数
def l2_norm(vec):
    return sum(x * x for x in vec) ** 0.5

#: 💡 单位向量
def normalize(vec):
    n = l2_norm(vec)
    if n == 0:
        raise ValueError('zero vector')
    return [x / n for x in vec]`,
  }),

  def({
    id: 'python-groupby-manual-level2',
    name: 'Python 手动 group by',
    description: 'Level 2：按键聚合成字典列表',
    category: '代码片段',
    tags: ['Python', 'Level 2', '数据处理', '计算科学'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    content: `#: 💡 按字段分组
def group_by(rows, key):
    g = {}
    for row in rows:
        k = row[key]
        if k not in g:
            g[k] = []
        g[k].append(row)
    return g

rows = [
    {'city': 'SH', 'v': 1},
    {'city': 'BJ', 'v': 2},
    {'city': 'SH', 'v': 3},
]
print(group_by(rows, 'city'))`,
  }),
]
