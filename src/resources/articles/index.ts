import type { ArticleResource } from '@/typings'
import { withTrack } from './helpers'
import { ENGLISH_ARTICLES } from './path-english'
import { FINTECH_ARTICLES } from './path-fintech'
import { JS_ARTICLES } from './path-js'
import { KNOWLEDGE_ENG_ARTICLES } from './path-knowledge-eng'
import { PYTHON_ARTICLES } from './path-python'
import { ROBOTICS_ARTICLES } from './path-robotics'
import { SAFTI_CONCEPT_ARTICLES } from './path-safti-concepts'
import { SOPHIE_PHILOSOPHY_ARTICLES } from './path-sophie-philosophy'
import { SSQ_FINTECH_ARTICLES } from './path-ssq-fintech'
import { TS_ARTICLES } from './path-ts'

/**
 * 文章 / 代码练习资源总表（课程树对齐版）
 *
 * 轨道说明见 docs/article_curriculum_map.md
 *
 * 1. knowledge-eng  — Obsidian / Markdown / Mermaid 知识工程
 * 2. cs-programming — SAFTI 程序设计 + 计算科学 + ROS2/OOMWOO
 * 3. fintech-code   — 金融科技编程 + 双色球 FinTech 起步
 * 4. finance-concept— SAFTI 金融认知 / 跨课概念
 * 5. english-literacy — 技术英文 + 《苏菲的世界》哲学精读
 */
export const ARTICLE_RESOURCES: ArticleResource[] = [
  // ── 0. 知识工程（建议与「搭笔记系统」同步开始）──────────────
  ...KNOWLEDGE_ENG_ARTICLES,

  // ── 1. SAFTI 概念与跨课（英文 + 少量代码）──────────────────
  ...SAFTI_CONCEPT_ARTICLES,

  // ── 2. 程序设计语法阶梯（挂 SAFTI-程序设计 / CS 标签）─────
  ...withTrack(JS_ARTICLES, 'cs-programming', 'SAFTI-01-程序设计'),
  ...withTrack(PYTHON_ARTICLES, 'cs-programming', 'SAFTI-01-程序设计'),
  ...withTrack(TS_ARTICLES, 'cs-programming', 'SAFTI-01-程序设计'),
  ...ROBOTICS_ARTICLES,

  // ── 3. 金融科技代码场景 + 双色球 FinTech 起步 ─────────────
  ...withTrack(FINTECH_ARTICLES, 'fintech-code', 'SAFTI-FinTech代码'),
  ...SSQ_FINTECH_ARTICLES,

  // ── 4. 通用技术英文 + 哲学主题精读 ────────────────────────
  ...withTrack(ENGLISH_ARTICLES, 'english-literacy', 'English-Tech'),
  ...SOPHIE_PHILOSOPHY_ARTICLES,
]

export const articleResourceById: Record<string, ArticleResource> = Object.fromEntries(
  ARTICLE_RESOURCES.map((a) => [a.id, a]),
)

/** 按轨道筛选 */
export function articlesByTrack(track: string): ArticleResource[] {
  return ARTICLE_RESOURCES.filter((a) => a.track === track || a.tags.includes(track))
}

/** 按课程模块前缀筛选，如 SAFTI-01 / KE-A */
export function articlesByModulePrefix(prefix: string): ArticleResource[] {
  return ARTICLE_RESOURCES.filter(
    (a) => (a.module && a.module.startsWith(prefix)) || a.tags.some((t) => t.startsWith(prefix)),
  )
}
