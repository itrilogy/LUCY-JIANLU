import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/** Path A · JavaScript 计算科学语法阶梯 */
export const JS_ARTICLES: ArticleResource[] = [
  def({
    id: 'js-basics-level1',
    name: 'JS 基础控制流与函数',
    description: 'Level 1：if-else、for 循环与函数声明',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', '控制流', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 示例 1：检查用户年龄并判断是否成年
function checkAdult(age) {
  // 验证输入年龄是否大于等于 18 岁
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

//: 💡 示例 2：使用 for 循环计算 1 到 N 的累加和
function calculateSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}`,
  }),

  def({
    id: 'js-variables-types-level1',
    name: 'JS 变量声明与基本类型',
    description: 'Level 1：let/const、number/string/boolean 与模板字符串',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', '变量', '类型', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 使用 const / let 声明变量
const appName = 'Qwerty Learner';
let attemptCount = 0;
const isReady = true;

//: 💡 模板字符串与 typeof
function describeUser(name, score) {
  attemptCount += 1;
  const message = \`User \${name} scored \${score}\`;
  return {
    message,
    typeOfScore: typeof score,
    attempts: attemptCount,
    ready: isReady,
  };
}`,
  }),

  def({
    id: 'js-while-switch-level1',
    name: 'JS while 与 switch',
    description: 'Level 1：while 倒计时与 switch 分支选择',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', '控制流', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 while 循环：倒计时到 0
function countdown(n) {
  let x = n;
  while (x > 0) {
    console.log(x);
    x -= 1;
  }
  return 'done';
}

//: 💡 switch：根据状态码返回文案
function statusText(code) {
  switch (code) {
    case 200:
      return 'OK';
    case 404:
      return 'Not Found';
    case 500:
      return 'Server Error';
    default:
      return 'Unknown';
  }
}`,
  }),

  def({
    id: 'js-string-methods-level1',
    name: 'JS 字符串常用方法',
    description: 'Level 1：trim、includes、split、toUpperCase',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', '字符串', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 清洗输入并规范化
function normalizeToken(raw) {
  const s = raw.trim().toLowerCase();
  if (s.length === 0) {
    return null;
  }
  return s;
}

//: 💡 拆分 CSV 字段
function parseCsvLine(line) {
  return line.split(',').map((part) => part.trim());
}

//: 💡 检查前缀
function isOrderId(id) {
  return id.startsWith('ORD-') && id.includes('-');
}`,
  }),

  def({
    id: 'js-array-basics-level1',
    name: 'JS 数组增删与遍历',
    description: 'Level 1：push/pop、indexOf、for...of',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', '数组', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 栈式操作：push 与 pop
function stackDemo() {
  const stack = [];
  stack.push(1);
  stack.push(2);
  const top = stack.pop();
  return { stack, top };
}

//: 💡 for...of 求和
function sumList(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}`,
  }),

  def({
    id: 'js-array-map-filter-level2',
    name: 'JS 数组 map / filter / reduce',
    description: 'Level 2：数组高阶方法与链式调用',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '数组', 'API', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 过滤偶数并平方，再求总和
function processNumbers(nums) {
  const evenSquares = nums
    .filter((n) => n % 2 === 0)
    .map((n) => n * n);
  const total = evenSquares.reduce((acc, cur) => acc + cur, 0);
  return { evenSquares, total };
}

//: 💡 对象数组筛选映射
function activeNames(users) {
  return users
    .filter((u) => u.active === true)
    .map((u) => u.name);
}`,
  }),

  def({
    id: 'js-object-json-level2',
    name: 'JS 对象字面量与 JSON',
    description: 'Level 2：解构、扩展运算符与 JSON 序列化',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '对象', 'JSON', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 对象解构与合并
function mergeProfile(base, patch) {
  const { id, name } = base;
  const next = { ...base, ...patch, id, name };
  return next;
}

//: 💡 JSON 往返
function roundTrip(data) {
  const text = JSON.stringify(data);
  const parsed = JSON.parse(text);
  return parsed;
}`,
  }),

  def({
    id: 'js-set-map-level2',
    name: 'JS Set 与 Map',
    description: 'Level 2：去重、键值映射与 has/get',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '集合', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 Set 去重
function unique(list) {
  return Array.from(new Set(list));
}

//: 💡 Map 统计频次
function freqMap(items) {
  const m = new Map();
  for (const item of items) {
    const prev = m.get(item) || 0;
    m.set(item, prev + 1);
  }
  return m;
}

const scores = freqMap(['A', 'B', 'A', 'C', 'B', 'A']);
console.log(scores.get('A'));`,
  }),

  def({
    id: 'js-try-catch-level2',
    name: 'JS 异常处理 try/catch',
    description: 'Level 2：抛错、捕获与 finally',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '异常', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 安全解析 JSON
function safeParse(text) {
  try {
    return { ok: true, data: JSON.parse(text) };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

//: 💡 业务校验抛错
function requirePositive(n) {
  if (typeof n !== 'number' || n <= 0) {
    throw new Error('n must be a positive number');
  }
  return n;
}`,
  }),

  def({
    id: 'js-closure-level2',
    name: 'JS 闭包与工厂函数',
    description: 'Level 2：闭包保存私有状态',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '闭包', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 闭包计数器工厂
function createCounter(start = 0) {
  let count = start;
  return {
    inc() {
      count += 1;
      return count;
    },
    value() {
      return count;
    },
  };
}

//: 💡 使用闭包实例
const c = createCounter(5);
c.inc();
console.log(c.value());`,
  }),

  def({
    id: 'js-recursion-level2',
    name: 'JS 递归入门',
    description: 'Level 2：递归求和与斐波那契（小 n）',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '递归', '算法', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 递归求和 1..n
function sumTo(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sumTo(n - 1);
}

//: 💡 朴素斐波那契（教学用，注意复杂度）
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}`,
  }),

  def({
    id: 'js-sort-search-level2',
    name: 'JS 排序与线性查找',
    description: 'Level 2：sort 比较函数与 index 查找',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '算法', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 数字升序排序
function sortAsc(nums) {
  return [...nums].sort((a, b) => a - b);
}

//: 💡 线性查找第一个匹配
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`,
  }),

  def({
    id: 'js-async-level3',
    name: 'JS 异步编程 Promise & async/await',
    description: 'Level 3：Promise 延时与 async/await',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'Async', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 封装延迟 Promise
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//: 💡 async/await 顺序请求
async function fetchUserData(userId) {
  await delay(500);
  if (!userId) {
    throw new Error('User ID is required');
  }
  return { id: userId, role: 'developer' };
}`,
  }),

  def({
    id: 'js-promise-all-level3',
    name: 'JS Promise.all 并行',
    description: 'Level 3：并行等待多个异步结果',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'Async', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 模拟异步任务
function task(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
}

//: 💡 Promise.all 汇总
async function runBatch() {
  const results = await Promise.all([
    task('A', 100),
    task('B', 120),
    task('C', 80),
  ]);
  return results;
}`,
  }),

  def({
    id: 'js-class-oop-level3',
    name: 'JS 类与简单封装',
    description: 'Level 3：class、constructor 与方法',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', 'OOP', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 用 class 封装计数器
class Counter {
  constructor(start = 0) {
    this.value = start;
  }

  inc() {
    this.value += 1;
    return this.value;
  }

  reset() {
    this.value = 0;
  }
}

const counter = new Counter(10);
counter.inc();
console.log(counter.value);`,
  }),

  def({
    id: 'js-debounce-level3',
    name: 'JS 防抖 debounce 思路',
    description: 'Level 3：闭包 + 定时器实现输入防抖',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '工程实践', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 简易 debounce：延迟执行最后一次调用
function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, wait);
  };
}

//: 💡 用于搜索框
const onSearch = debounce((q) => {
  console.log('search', q);
}, 300);`,
  }),

  def({
    id: 'js-module-pattern-level3',
    name: 'JS 模块导出模式',
    description: 'Level 3：纯函数工具模块的组织方式',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '模块', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 工具函数集合（可视为 utils 模块）
export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export function average(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

//: 💡 组合使用
export function normalizeScore(score) {
  return clamp(score, 0, 100);
}`,
  }),

  def({
    id: 'js-binary-search-level3',
    name: 'JS 二分查找',
    description: 'Level 3：有序数组二分查找模板',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '算法', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 在升序数组中二分查找 target，找不到返回 -1
function binarySearch(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}`,
  }),

  def({
    id: 'js-linked-list-level3',
    name: 'JS 简易链表节点',
    description: 'Level 3：节点结构与遍历打印',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '数据结构', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 链表节点
function createNode(value, next = null) {
  return { value, next };
}

//: 💡 遍历输出
function toArray(head) {
  const out = [];
  let cur = head;
  while (cur) {
    out.push(cur.value);
    cur = cur.next;
  }
  return out;
}

const n3 = createNode(3);
const n2 = createNode(2, n3);
const n1 = createNode(1, n2);
console.log(toArray(n1));`,
  }),

  def({
    id: 'js-regex-basics-level2',
    name: 'JS 正则基础匹配',
    description: 'Level 2：test、match 与简单邮箱/数字模式',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '正则', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 是否为纯数字字符串
function isDigits(s) {
  return /^\\d+$/.test(s);
}

//: 💡 粗略邮箱校验（教学用）
function looksLikeEmail(s) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s);
}

//: 💡 提取字符串中的数字
function extractNumbers(text) {
  const m = text.match(/\\d+/g);
  return m ? m.map(Number) : [];
}`,
  }),

  def({
    id: 'js-ternary-destructure-level1',
    name: 'JS 三元与数组解构',
    description: 'Level 1：条件表达式与解构赋值',
    category: '代码片段',
    tags: ['JavaScript', 'Level 1', '语法糖', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 1,
    content: `//: 💡 三元表达式选择标签
function label(score) {
  return score >= 60 ? 'pass' : 'fail';
}

//: 💡 数组解构交换
function swap(a, b) {
  ;[a, b] = [b, a];
  return [a, b];
}

//: 💡 剩余参数收集
function headRest(first, ...rest) {
  return { first, rest };
}`,
  }),

  def({
    id: 'js-date-basics-level2',
    name: 'JS Date 与时间戳',
    description: 'Level 2：Date 构造、时间戳差与格式化雏形',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '日期', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 毫秒差转秒
function secondsBetween(a, b) {
  return Math.abs(b.getTime() - a.getTime()) / 1000;
}

//: 💡 是否同一天（本地时区）
function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

//: 💡 YYYY-MM-DD 简易格式
function formatYmd(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return \`\${y}-\${m}-\${day}\`;
}`,
  }),

  def({
    id: 'js-optional-chain-level2',
    name: 'JS 可选链与空值合并',
    description: 'Level 2：?. 与 ?? 安全取值',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '语法糖', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 深层安全读取
function cityOf(user) {
  return user?.address?.city ?? 'unknown';
}

//: 💡 默认配置合并
function withDefaults(input) {
  return {
    page: input?.page ?? 1,
    size: input?.size ?? 20,
    q: input?.q ?? '',
  };
}`,
  }),

  def({
    id: 'js-flatmap-level2',
    name: 'JS flatMap 与扁平化',
    description: 'Level 2：二维结构展开与映射',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '数组', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 flatMap：一对多映射后扁平
function expandTags(posts) {
  return posts.flatMap((p) => p.tags || []);
}

//: 💡 去重标签
function uniqueTags(posts) {
  return Array.from(new Set(expandTags(posts)));
}`,
  }),

  def({
    id: 'js-queue-class-level3',
    name: 'JS 队列类实现',
    description: 'Level 3：enqueue/dequeue 与 size',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '数据结构', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 简易队列
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }
}`,
  }),

  def({
    id: 'js-throttle-level3',
    name: 'JS 节流 throttle',
    description: 'Level 3：固定间隔内最多执行一次',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '工程实践', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 throttle：间隔 wait 毫秒至多触发一次
function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      return fn.apply(this, args);
    }
  };
}

const onScroll = throttle(() => {
  console.log('scroll');
}, 200);`,
  }),

  def({
    id: 'js-deep-clone-level3',
    name: 'JS 深拷贝（JSON 法）',
    description: 'Level 3：结构化克隆的简化与局限',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '对象', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 JSON 深拷贝（无法处理函数/循环引用）
function deepCloneJson(obj) {
  return JSON.parse(JSON.stringify(obj));
}

//: 💡 浅拷贝对照
function shallowClone(obj) {
  return { ...obj };
}

const a = { x: 1, nest: { y: 2 } };
const b = deepCloneJson(a);
b.nest.y = 9;
console.log(a.nest.y);`,
  }),

  def({
    id: 'js-event-emitter-level3',
    name: 'JS 简易事件总线',
    description: 'Level 3：on/emit 订阅发布模式',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '设计模式', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 迷你 EventEmitter
function createBus() {
  const map = new Map();
  return {
    on(type, fn) {
      const list = map.get(type) || [];
      list.push(fn);
      map.set(type, list);
    },
    emit(type, payload) {
      const list = map.get(type) || [];
      for (const fn of list) {
        fn(payload);
      }
    },
  };
}

const bus = createBus();
bus.on('tick', (n) => console.log(n));
bus.emit('tick', 1);`,
  }),

  def({
    id: 'js-memoize-level3',
    name: 'JS 记忆化 memoize',
    description: 'Level 3：缓存纯函数结果',
    category: '代码片段',
    tags: ['JavaScript', 'Level 3', '性能', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 3,
    content: `//: 💡 单参数记忆化
function memoize(fn) {
  const cache = new Map();
  return function (key) {
    if (cache.has(key)) {
      return cache.get(key);
    }
    const val = fn(key);
    cache.set(key, val);
    return val;
  };
}

const fib = memoize(function f(n) {
  if (n <= 1) return n;
  return f(n - 1) + f(n - 2);
});`,
  }),

  def({
    id: 'js-pipeline-level2',
    name: 'JS 函数管道 compose',
    description: 'Level 2：从右到左组合纯函数',
    category: '代码片段',
    tags: ['JavaScript', 'Level 2', '函数式', '计算科学'],
    language: 'javascript',
    codeLanguage: 'javascript',
    level: 2,
    content: `//: 💡 管道：从右向左执行
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

const trimLower = compose(
  (s) => s.toLowerCase(),
  (s) => s.trim(),
);
console.log(trimLower('  Hello '));`,
  }),
]
