# Frontend (Nuxt 3)

此資料夾為碼頭前台系統的前端專案，使用 Nuxt 3（Vue 3 + TypeScript）。

## 環境需求

- Node.js 20+
- npm 10+

## 安裝與啟動

```powershell
npm install
npm run dev
```

開發伺服器預設為 `http://localhost:3000`。

## 常用指令

```powershell
npm run dev
npm run typecheck
npm run build
npm run preview
```

## 目錄結構（Nuxt 慣例）

```text
frontend/
├─ assets/                 # 會被打包處理的資產（含全域 SCSS）
├─ components/             # 元件（自動匯入）
├─ layouts/                # Layouts
├─ pages/                  # 檔案式路由
├─ services/               # API / HTTP 封裝
├─ stores/                 # Pinia stores
├─ types/                  # 型別
├─ app.vue
├─ nuxt.config.ts
└─ tsconfig.json
```

## 路由初始規劃

- `/login`：登入頁（停用預設 layout）
- `/shipping`：出貨作業
- `/receiving`：收貨作業
- `/returns`：退貨作業
- `/announcements`：即時公告

## 環境變數

- `NUXT_PUBLIC_API_BASE_URL`：後端 API base URL（前端可讀）
