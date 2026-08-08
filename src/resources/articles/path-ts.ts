import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/** Path D · TypeScript 类型与领域建模 */
export const TS_ARTICLES: ArticleResource[] = [
  def({
    id: 'ts-types-account-level2',
    name: 'TS · 账户与交易类型注解',
    description: 'Level 2：interface、联合类型与只读字段',
    category: '代码片段',
    tags: ['TypeScript', 'Level 2', '类型系统', 'FinTech'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 2,
    content: `//: 💡 买卖方向与账户
type Side = 'BUY' | 'SELL';

interface Account {
  readonly id: string;
  currency: string;
  balance: number;
}

//: 💡 带类型的转账
function applyTrade(account: Account, side: Side, amount: number): Account {
  if (amount <= 0) {
    throw new Error('amount must be positive');
  }
  const next = side === 'BUY' ? account.balance - amount : account.balance + amount;
  if (next < 0) {
    throw new Error('insufficient balance');
  }
  return { ...account, balance: next };
}`,
  }),

  def({
    id: 'ts-generics-list-level2',
    name: 'TS · 泛型列表工具',
    description: 'Level 2：泛型函数与约束',
    category: '代码片段',
    tags: ['TypeScript', 'Level 2', '泛型', '计算科学'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 2,
    content: `//: 💡 泛型 first
function first<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

//: 💡 约束：必须有 id
function byId<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find((x) => x.id === id);
}`,
  }),

  def({
    id: 'ts-enum-status-level2',
    name: 'TS · 枚举与订单状态机',
    description: 'Level 2：状态枚举与合法迁移',
    category: '代码片段',
    tags: ['TypeScript', 'Level 2', '状态机', 'FinTech'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 2,
    content: `//: 💡 订单状态
enum OrderStatus {
  New = 'NEW',
  Partial = 'PARTIAL',
  Filled = 'FILLED',
  Cancelled = 'CANCELLED',
}

//: 💡 是否允许取消
function canCancel(status: OrderStatus): boolean {
  return status === OrderStatus.New || status === OrderStatus.Partial;
}`,
  }),

  def({
    id: 'ts-utility-types-level3',
    name: 'TS · Partial 与 Pick 工具类型',
    description: 'Level 3：更新补丁与投影类型',
    category: '代码片段',
    tags: ['TypeScript', 'Level 3', '类型系统', '计算科学'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 3,
    content: `//: 💡 用户资料
interface Profile {
  id: string;
  name: string;
  email: string;
  age: number;
}

//: 💡 部分更新
function patchProfile(base: Profile, patch: Partial<Profile>): Profile {
  return { ...base, ...patch, id: base.id };
}

//: 💡 仅公开字段
type PublicProfile = Pick<Profile, 'id' | 'name'>;`,
  }),

  def({
    id: 'ts-result-type-level3',
    name: 'TS · Result 成功/失败联合',
    description: 'Level 3：可辨识联合表达业务结果',
    category: '代码片段',
    tags: ['TypeScript', 'Level 3', '类型系统', 'FinTech'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 3,
    content: `//: 💡 可辨识联合
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parseAmount(text: string): Result<number> {
  const n = Number(text);
  if (Number.isNaN(n) || n <= 0) {
    return { ok: false, error: 'INVALID' };
  }
  return { ok: true, value: n };
}

function double(text: string): Result<number> {
  const r = parseAmount(text);
  if (!r.ok) {
    return r;
  }
  return { ok: true, value: r.value * 2 };
}`,
  }),

  def({
    id: 'ts-readonly-map-level2',
    name: 'TS · Readonly 与只读数组',
    description: 'Level 2：防止意外突变的类型标注',
    category: '代码片段',
    tags: ['TypeScript', 'Level 2', '类型系统', '计算科学'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 2,
    content: `//: 💡 只读配置
interface Config {
  readonly apiBase: string;
  readonly timeoutMs: number;
}

//: 💡 只读数组参数
function sum(nums: readonly number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

const cfg: Config = { apiBase: '/api', timeoutMs: 3000 };`,
  }),

  def({
    id: 'ts-type-guard-level3',
    name: 'TS · 类型守卫 is',
    description: 'Level 3：自定义谓词收窄联合类型',
    category: '代码片段',
    tags: ['TypeScript', 'Level 3', '类型系统', '计算科学'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 3,
    content: `//: 💡 联合消息
type Msg =
  | { type: 'ping' }
  | { type: 'data'; payload: string };

function isData(m: Msg): m is { type: 'data'; payload: string } {
  return m.type === 'data';
}

function handle(m: Msg): string {
  if (isData(m)) {
    return m.payload;
  }
  return 'pong';
}`,
  }),

  def({
    id: 'ts-record-dict-level2',
    name: 'TS · Record 字典类型',
    description: 'Level 2：字符串键到数值的映射',
    category: '代码片段',
    tags: ['TypeScript', 'Level 2', '类型系统', 'FinTech'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 2,
    content: `//: 💡 币种余额表
type Currency = 'USD' | 'CNY' | 'EUR';
type Balances = Record<Currency, number>;

function totalInUsd(b: Balances, fx: Record<Currency, number>): number {
  return b.USD * fx.USD + b.CNY * fx.CNY + b.EUR * fx.EUR;
}`,
  }),

  def({
    id: 'ts-async-typed-level3',
    name: 'TS · 带类型的 async 函数',
    description: 'Level 3：Promise 返回类型与错误处理',
    category: '代码片段',
    tags: ['TypeScript', 'Level 3', 'Async', '计算科学'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 3,
    content: `//: 💡 异步获取报价
interface Quote {
  symbol: string;
  price: number;
}

async function fetchQuote(symbol: string): Promise<Quote> {
  // fake delay
  await Promise.resolve();
  if (!symbol) {
    throw new Error('symbol required');
  }
  return { symbol, price: 100 };
}`,
  }),

  def({
    id: 'ts-class-private-level3',
    name: 'TS · 类私有字段',
    description: 'Level 3：#private 与封装余额',
    category: '代码片段',
    tags: ['TypeScript', 'Level 3', 'OOP', 'FinTech'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 3,
    content: `//: 💡 私有余额字段
class Wallet {
  #balance = 0;

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('invalid');
    this.#balance += amount;
  }

  get balance(): number {
    return this.#balance;
  }
}

const w = new Wallet();
w.deposit(50);`,
  }),

  def({
    id: 'ts-satisfies-level2',
    name: 'TS · 常量对象类型约束',
    description: 'Level 2：as const 与字面量键',
    category: '代码片段',
    tags: ['TypeScript', 'Level 2', '类型系统', '计算科学'],
    language: 'typescript',
    codeLanguage: 'typescript',
    level: 2,
    content: `//: 💡 路由表常量
const routes = {
  home: '/',
  gallery: '/gallery',
  article: '/article-typing',
} as const;

type RouteKey = keyof typeof routes;
type RoutePath = (typeof routes)[RouteKey];

function pathOf(key: RouteKey): RoutePath {
  return routes[key];
}`,
  }),
]
