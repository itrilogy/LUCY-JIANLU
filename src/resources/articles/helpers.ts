import type { ArticleResource, ArticleTrack } from '@/typings'

/** 由 content 自动补全 length / lineCount */
export function def(
  resource: Omit<ArticleResource, 'length' | 'lineCount'> &
    Partial<Pick<ArticleResource, 'length' | 'lineCount'>>,
): ArticleResource {
  const content = resource.content ?? ''
  const tags = [...(resource.tags || [])]
  if (resource.track && !tags.includes(resource.track)) {
    tags.push(resource.track)
  }
  if (resource.module && !tags.includes(resource.module)) {
    tags.push(resource.module)
  }
  return {
    ...resource,
    tags,
    content,
    length: resource.length ?? content.length,
    lineCount: resource.lineCount ?? content.split(/\r?\n/).length,
  }
}

/** 为既有资源批量挂上 track / module 标签（不改 content） */
export function withTrack(
  list: ArticleResource[],
  track: ArticleTrack,
  module: string,
): ArticleResource[] {
  return list.map((item) => {
    const tags = new Set(item.tags || [])
    tags.add(track)
    tags.add(module)
    return { ...item, track, module, tags: Array.from(tags) }
  })
}
