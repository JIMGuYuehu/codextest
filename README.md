# Weiji Hu — personal homepage

英文 / 中文学术主页。原生 HTML、CSS、JavaScript，无需安装依赖或构建。完整页面在 `public/`，可双击 `public/index.html` 预览。

## GitHub Pages

主页发布仓库：`JIMGuYuehu/jimguyuehu.github.io`。只上传本目录内容，不要上传 JIMLOG 工作区。

1. 将 `public/` 和 `.github/` 上传到新仓库根目录，默认分支使用 `main`。
2. 在仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
3. 在 Actions 运行 `Deploy personal homepage to GitHub Pages`。之后对 `main` 的更新会自动发布。
4. 主页地址为 `https://jimguyuehu.github.io/`，只有部署成功后才可访问。页面资源均使用相对路径。

部署只打包 `public/`。无需独立域名。

## 修改内容

- `public/index.html`：个人介绍、经历、成果及链接；`data-en` / `data-zh` 为中英文文本。
- `public/styles.css`：颜色、字体、布局及响应式样式。
- `public/script.js`：语言切换及年份。
- `public/assets/arctic-orbital-hero.jpg`：AI 生成的北极概念插画，不是卫星数据或科研结果。

无需外部字体、分析服务、远程脚本或登录。语言偏好仅保存在浏览器本地。

## 内容依据

- 本地 2026 年中英文学术简历：教育经历、研究方向、ORCID 及学术邮箱。
- EGU 2026 摘要：https://meetingorganizer.copernicus.org/EGU26/EGU26-571.html
- ACP 2023 论文：https://acp.copernicus.org/articles/23/4545/2023/
- GitHub 已连接账号：JIMGuYuehu。

会议摘要与期刊论文分开展示。研究部分描述问题与方法，不将初步研究写成已经证实的结论。未将内部研究日志、服务器信息、电话或私人访问计划放入网站。

公开简介以科学问题、资料分析与物理解释为主。当前博士研究的模拟资料由导师／课题组提供，不将这些模拟或 hindcast 的设计、运行和生成归为个人贡献。后续修改沿用这一归属；正式成果标题和作者列表保持原文。
