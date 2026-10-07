# 油猴脚本模板

## 技术栈

- Node.js + pnpm
- TypeScript + React + Vite
- `vite-plugin-monkey` 支持油猴脚本构建
- UI 组件库不做预设，由使用者自行决定（可选 antd / MUI / shadcn-ui 等，模板默认只依赖 React）
- Oxlint + Oxfmt 用于 linter 和 formatter
- npm-check-updates 用于依赖更新
- 用于自动构建和发布的 GitHub Actions

## 环境要求

- Node.js `^20.19.0 || >=22.12.0`
- 推荐安装 VS Code 扩展 [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)（`.vscode/extensions.json` 已声明推荐）

## 使用

```bash
pnpm install      # 安装依赖
pnpm dev          # 开发模式（热更新）
pnpm build        # 构建 dist/*.user.js
pnpm typecheck    # 类型检查
pnpm ci           # linter + formatter 检查（CI 使用）
pnpm lint         # Oxlint 自动修复
pnpm format       # Oxfmt 格式化
pnpm dep          # 交互式更新依赖
```

## Lint 与格式化

- [Oxlint](https://oxc.rs/docs/guide/usage/linter) 负责 lint，配置见 `.oxlintrc.json`
- [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) 负责格式化，配置见 `.oxfmtrc.json`
- 格式约定与仓库原 Biome 配置保持一致（120 列、双引号），并在保存时自动排序 import

## UI 组件库

模板不再内置 Ant Design。入口 `src/userscript.tsx` 只挂载了一个 React 根节点，UI 完全自由：

```bash
# 例如选择 Ant Design（React 19 需要额外安装兼容补丁）
pnpm add antd @ant-design/icons @ant-design/v5-patch-for-react-19
```

```tsx
// src/userscript.tsx
import "@ant-design/v5-patch-for-react-19";
import { Button } from "antd";
```

选择其他方案（MUI、shadcn-ui、Arco Design、纯 CSS…）同理，模板不会覆盖你的选择。
