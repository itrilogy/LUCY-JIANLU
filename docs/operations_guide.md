# 见鹿 · JianLu 操作说明

本文档说明 **见鹿（JianLu）** 的品牌资产、本地开发、构建发布与 1Panel / 域名部署操作。  
出品方：**鹿溪联合创新实验室**。上游开源：**Qwerty Learner**。

---

## 1. 产品与仓库

| 项 | 内容 |
| :--- | :--- |
| 产品名 | 见鹿 · JianLu |
| 出品方 | 鹿溪联合创新实验室（LUXI Lab） |
| 定位 | 打字练习 · 单词记忆 · 知识内化 |
| Slogan | 指间林深，心澄见鹿 |
| 线上域名 | `https://qwerty.plod.online/` |
| 公开仓库 | `https://github.com/itrilogy/LUCY-JIANLU` |
| 本地工程 | `/Users/kwangwah/Project/qwerty-learner` |
| 上游原项目 | `https://github.com/RealKai42/qwerty-learner`（remote: `upstream`） |

品牌常量代码：`src/constants/brand.ts`。

---

## 2. 品牌资产（Favicon / 标识）

### 2.1 权威归档位置（Obsidian）

产品标识 **SVG 源文件** 归档于实验室知识库：

```text
/Users/kwangwah/Obsidian/departments/lab/见鹿-JianLu/
  README.md
  brand/
    favicon.svg              # 主源文件（与工程一致）
    见鹿-产品标识.svg         # 中文命名副本
    favicon-16x16.png        # 导出参考
    favicon-32x32.png
    favicon.ico
    apple-touch-icon.png
```

实验室 Logo（鹿形 + LUXI 字标，用于 Footer）归档参考：

```text
/Users/kwangwah/Obsidian/departments/lab/鹿溪联合实验室/
  LUXI LAB Version 2.svg
  品牌与文化体系构建.md
```

### 2.2 工程内路径

| 用途 | 路径 |
| :--- | :--- |
| 站点 favicon（优先 SVG） | `public/favicon.svg` |
| Header / 产品标识引用 | `src/assets/logo.svg`（与 favicon 同源） |
| Footer 实验室 Logo | `src/assets/lab-logo.svg` |
| 栅格兜底 | `public/favicon.ico`、`favicon-16x16.png`、`favicon-32x32.png`、`apple-touch-icon.png` |
| HTML 引用 | `index.html` 中 `<link rel="icon" href="/favicon.svg" type="image/svg+xml" />` |

### 2.3 标识语义

- **鹿溪绿圆角底** `#0D5E42`：品牌  
- **键帽 + 闪烁光标**：打字练习  
- **底部青色溪流** `#00D2FF`：知识流动内化  
- **右上角星点**：源启 / 见鹿  

### 2.4 修改标识后的同步步骤

1. 编辑 Obsidian 归档：  
   `departments/lab/见鹿-JianLu/brand/favicon.svg`
2. 同步到工程：

```bash
SRC="$HOME/Obsidian/departments/lab/见鹿-JianLu/brand/favicon.svg"
PROJ="$HOME/Project/qwerty-learner"
cp "$SRC" "$PROJ/public/favicon.svg"
cp "$SRC" "$PROJ/src/assets/logo.svg"
# 可选：重新导出 png/ico
rsvg-convert -w 32 -h 32 "$PROJ/public/favicon.svg" -o "$PROJ/public/favicon-32x32.png"
rsvg-convert -w 16 -h 16 "$PROJ/public/favicon.svg" -o "$PROJ/public/favicon-16x16.png"
rsvg-convert -w 180 -h 180 "$PROJ/public/favicon.svg" -o "$PROJ/public/apple-touch-icon.png"
```

3. 重新构建并部署（见第 4、5 节）。

从工程回写到 Obsidian（反向同步）：

```bash
cp "$HOME/Project/qwerty-learner/public/favicon.svg" \
   "$HOME/Obsidian/departments/lab/见鹿-JianLu/brand/favicon.svg"
cp "$HOME/Project/qwerty-learner/public/favicon.svg" \
   "$HOME/Obsidian/departments/lab/见鹿-JianLu/brand/见鹿-产品标识.svg"
```

---

## 3. 本地开发

### 环境

- Node.js（建议 18+ / 20）
- Yarn（推荐）或 npm

### 命令

```bash
cd /Users/kwangwah/Project/qwerty-learner
yarn install   # 或 npm install
yarn start     # 或 npm run start → http://localhost:5173
```

### 技术栈摘要

- React 18 + Vite + TypeScript  
- 状态：jotai  
- 构建输出目录：`build/`（`vite.config.ts` → `outDir: 'build'`）  
- 根路径部署时 **不要** 设置 `REACT_APP_DEPLOY_ENV=pages`（该模式会带 `/qwerty-learner` basename）

---

## 4. 生产构建

```bash
cd /Users/kwangwah/Project/qwerty-learner
npm run build
# 或 yarn build
```

产物：

```text
build/
  index.html
  assets/
  dicts/
  sounds/
  favicon.svg
  ...
```

检查：

```bash
test -f build/index.html && test -d build/dicts && du -sh build
```

---

## 5. 部署到 1Panel（OpenResty 静态站）

### 5.1 站点信息（当前环境）

| 项 | 值 |
| :--- | :--- |
| 域名 | `qwerty.plod.online` |
| 网站根目录（宿主机） | `/opt/1panel/apps/openresty/openresty/www/sites/qwerty.plod.online/index` |
| 容器内 root（Nginx conf） | `/www/sites/qwerty.plod.online/index` |
| 站点 conf | `/opt/1panel/apps/openresty/openresty/conf/conf.d/qwerty.plod.online.conf` |
| OpenResty 容器名示例 | `1Panel-openresty-frZ0`（以 `docker ps` 为准） |

### 5.2 上传构建产物

将 **`build/` 目录内的文件** 同步到站点根目录（不是上传外层 `build` 文件夹名）：

```bash
# 示例：本机 → VPS（请使用 SSH 密钥，勿在文档/聊天中保存明文密码）
rsync -avz --delete \
  ./build/ \
  root@<VPS_IP>:/opt/1panel/apps/openresty/openresty/www/sites/qwerty.plod.online/index/
```

### 5.3 Nginx / OpenResty 要点

- **静态站**，无需 Node 常驻进程。  
- **SPA 回退**（必填，否则刷新子路由 404）：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

- 1Panel 已配置本站 SSL 时，保留其 `ssl_certificate` / `ssl_certificate_key`。  
- **只改本站 conf 文件**，不会影响 1Panel 其他站点；改完务必 `nginx -t` 再 reload。  
- 推荐 TLS：`ssl_protocols TLSv1.3 TLSv1.2;`（可关闭 TLSv1 / TLSv1.1）。

Reload 示例：

```bash
docker exec 1Panel-openresty-frZ0 nginx -t
docker exec 1Panel-openresty-frZ0 nginx -s reload
```

### 5.4 Cloudflare

- DNS：域名 A/AAAA 指向 VPS（或按你现有代理设置）。  
- SSL 模式建议：**Full** 或 **Full (strict)**（源站已有 1Panel 证书时优先 strict）。  
- 边缘证书与源站证书类型（RSA / ECC）可独立选择；现代站点源站与边缘均可优先 ECC。

### 5.5 发布后自检

```bash
curl -sI https://qwerty.plod.online/ | head -5
curl -sI https://qwerty.plod.online/gallery | head -5   # 应 200，非 404
curl -s https://qwerty.plod.online/ | grep -oE '<title>[^<]+</title>'
curl -sI https://qwerty.plod.online/favicon.svg | head -5
curl -sI https://qwerty.plod.online/dicts/knowledge-from-articles.json | head -5
```

预期标题含：`见鹿 JianLu`。

---

## 6. Git 远程约定

```text
origin    → https://github.com/itrilogy/LUCY-JIANLU.git     # 公开产品仓
upstream  → https://github.com/RealKai42/qwerty-learner.git
```

推送到公开仓：

```bash
git add -A
git commit -m "..."
git push origin HEAD:master
```

---

## 7. 二次开发与版权说明

- 功能与引擎大量继承 **Qwerty Learner**。  
- Footer **社媒 / 捐赠 / VSCode 插件** 等链接与文案保持上游，并注明二次开发出处。  
- 产品品牌（见鹿、实验室 Logo、课程内容、Knowledge 词库、文章练习）为实验室侧定制。  
- 分发时遵守仓库 `LICENSE` 及上游许可。

---

## 8. 相关文档索引

| 文档 | 说明 |
| :--- | :--- |
| [README.md](../README.md) | 产品介绍与特色 |
| [article_curriculum_map.md](./article_curriculum_map.md) | 文章课程轨道映射 |
| [article_resource_authoring_guide.md](./article_resource_authoring_guide.md) | 文章资源编写 |
| [article_typing_design_spec.md](./article_typing_design_spec.md) | 文章打字设计 |
| Obsidian `lab/见鹿-JianLu/` | 品牌资产与产品备忘 |
| Obsidian `lab/鹿溪联合实验室/` | 实验室 CI / Logo / 协议 |

---

## 9. 常见问题

**Q: 刷新 `/gallery` 404？**  
A: 站点 conf 缺少 `try_files ... /index.html`，按 5.3 配置并 reload。

**Q: 词库或音频 404？**  
A: 确认 `build/dicts`、`build/sounds` 已上传到站点根目录。

**Q: 页面资源路径多一层目录？**  
A: 不要用 `REACT_APP_DEPLOY_ENV=pages` 做根域名部署。

**Q: 改 favicon 浏览器仍显示旧图标？**  
A: 强刷或清缓存；确认 `public/favicon.svg` 已进 `build/` 并已 rsync。

**Q: 会不会改坏 1Panel 其它站？**  
A: 只编辑 `qwerty.plod.online.conf` 不会影响其它站点；避免改全局 `nginx.conf`。

---

*文档维护：与见鹿产品工程同步更新。*
