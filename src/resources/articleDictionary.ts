/**
 * 文章词典入口（稳定导入路径）
 *
 * 资源按课程树整理，详见：
 * - docs/article_curriculum_map.md  （Obsidian 知识工程 + SAFTI 映射）
 * - docs/article_resource_authoring_guide.md
 *
 * 模块目录 src/resources/articles/
 *   path-knowledge-eng.ts   KE A–F
 *   path-safti-concepts.ts   SAFTI 概念/跨课/地基
 *   path-js|python|ts.ts     程序设计语法
 *   path-fintech.ts          金融代码场景
 *   path-english.ts          技术英文素养
 */
export {
  ARTICLE_RESOURCES,
  articleResourceById,
  articlesByTrack,
  articlesByModulePrefix,
} from './articles'
