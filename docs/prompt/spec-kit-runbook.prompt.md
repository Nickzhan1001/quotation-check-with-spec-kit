# spec-kit Runbook（可重複產生相同檔案的 SOP）

本 SOP 的目標：讓任何 Agent 在相同 Input 下，都能產出「相同檔案集合」且遵守相同的決策規則（不發明、不補完、不重設計）。

此 SOP 僅適用於 spec-kit 三個流程：
1) 產出 Spec（dev-spec）
2) 由 00–03 推導 API 清單（04-api-inferred）
3) 由 Spec 拆分 Tasks（task-breakdown）

---

## 0. 不可變更規則來源（Single Source of Truth）

執行時一律以以下兩份 Prompt 為最終依據（若 SOP 與 Prompt 衝突，以 Prompt 為準）：
- `docs/prompt/spec-kit-dev-spec.prompt.md`
- `docs/prompt/spec-kit-task-breakdown.prompt.md`

---

## 1. 決策規則（讓思考決斷一致）

### 1.1 Input Boundary（只能用這些當事實）

Spec 產出階段的唯一事實來源：
- `analysis_context/input/prd.md`
- `analysis_context/input/epics.md`
- `analysis_context/input/ux-design-specification.md`

Task 拆分階段的唯一事實來源：
- `analysis_context/spec/00-overview.spec.md`
- `analysis_context/spec/01-routing-pages.spec.md`
- `analysis_context/spec/02-frontend.spec.md`
- `analysis_context/spec/03-backend.spec.md`

API 推導（04）的輸入邊界：僅上述 00–03 四份；產出為 `04-api-inferred.spec.md`。

### 1.2 禁止行為（Hard No）
- 不得新增：功能、頁面、流程、角色責任、非規格中存在的規則。
- 不得補齊：任何 Spec/輸入文件未定義的行為（例如：逾時時間、通知重試策略、離線衝突規則）。
- 不得重設計：產品流程或系統架構。
- 不得輸出實作細節：程式碼、框架寫法、endpoint、DB schema、具體技術方案。

### 1.3 未定義處理（標準化）
- 遇到資訊不足：
  - Spec：標示「未定義」或「需釐清」。
  - Tasks：標示「Blocked / 未定義」，並在 Notes 說明缺哪個定義。

### 1.4 可公開的決策摘要格式（可選）
若使用者要求「顯示思路」，只能輸出簡短摘要（不得逐步推理）：
- 決策摘要（3-5 點）
- 引用到的檔案路徑
- 未定義/風險清單

---

## 2. 流程 A：產出 Spec（dev-spec）

### 2.1 前置條件
- 確認以下檔案存在且內容非空：
  - `analysis_context/input/prd.md`
  - `analysis_context/input/epics.md`
  - `analysis_context/input/ux-design-specification.md`

### 2.2 產出規格（Output Contract）
必須且只能產出 4 份檔案，路徑固定：
- `analysis_context/spec/00-overview.spec.md`
- `analysis_context/spec/01-routing-pages.spec.md`
- `analysis_context/spec/02-frontend.spec.md`
- `analysis_context/spec/03-backend.spec.md`

產出順序（強制）：
1) 00-overview
2) 01-routing-pages
3) 02-frontend
4) 03-backend

H1 標題（強制，檔案第一行，以 dev-spec 為準）：
- `00-overview.spec.md`：`# 00 總覽`
- `01-routing-pages.spec.md`：`# 01 路由與頁面`
- `02-frontend.spec.md`：`# 02 前端行為`
- `03-backend.spec.md`：`# 03 後端責任`

### 2.3 Spec 品質閘門（必過）
- 檔案數量 = 4（不多不少）
- 檔名與路徑正確
- 每份檔案第一行 H1 正確（以 dev-spec 檔案標頭規則為準：00 總覽、01 路由與頁面、02 前端行為、03 後端責任）
- 01-routing-pages.spec.md 中每個頁面之「頁面名稱」欄位**限英文**（如 login、delivery-points-summary）
- 不包含任何技術實作細節（endpoint/DB/框架）
- 所有不確定資訊皆標為「未定義/需釐清」

### 2.4 延伸：推導 API 清單（04-api-inferred）
- **前置條件**：00–03 四份 spec 已產出且位於 `analysis_context/spec/`。
- **輸入**：僅使用 `00-overview.spec.md`、`01-routing-pages.spec.md`、`02-frontend.spec.md`、`03-backend.spec.md`。
- **產出**：`analysis_context/spec/04-api-inferred.spec.md`
- **規則**：僅從四份 spec 推測必要 API 與即時通道；不新增規格未提及之功能；每個 API 標註推導依據（對應 01/02/03 章節）。

---

## 3. 流程 B：由 Spec 拆分 Tasks（task-breakdown）

### 3.1 前置條件
- 確認 `analysis_context/spec/` 已存在且包含 4 份 spec。

### 3.2 產出 Tasks（Output Contract）
Tasks 必須輸出至：
- `analysis_context/spec/tasks/frontend/`
- `analysis_context/spec/tasks/backend/`

命名規則（強制）：
- `<role>-task-<running-number>-<short-description>.md`
  - `role` 只能是 `frontend` 或 `backend`
  - `running-number` 建議 2 位數遞增（01, 02, ...）

每個 Task 檔案必含章節（強制，且標題需完全一致）：
- `# 任務摘要`
- `# 來源 Spec`
- `# 對應頁面名稱`（列出該任務對應之 01-routing-pages 頁面英文名稱，可多個；跨頁面任務可寫「全部前台頁面」或「全部頁面（審計）」等）
- `# 責任範圍`
- `# 驗收標準`
- `# 備註`

### 3.3 Task 拆分原則（讓輸出可排 Sprint）
- 每個 Task 必須可指派給單一角色/單一工程師。
- 每個 Task 描述「要做什麼」，避免「怎麼做」。
- 若 Spec 註記未定義，對應 Task 必須標示為 Blocked / 未定義。

### 3.4 Tasks 品質閘門（必過）
- frontend/backend 目錄存在
- 檔名符合規則且 running number 不重複
- 每檔六個章節齊全（含「對應頁面名稱」；頁面名稱為英文，與 01-routing-pages.spec.md 一致）
- 不包含 spec 之外的新功能

---

## 4. 一鍵執行用 Master Prompt（給其他 Agent 複製貼上）

將以下文字貼到 Agent 對話即可：

```text
請嚴格依下列 Prompt 執行：
- @docs/prompt/spec-kit-dev-spec.prompt.md
- @docs/prompt/spec-kit-task-breakdown.prompt.md

執行規則（強制）：
- 只能使用 prompt 指定的 Input Boundary 當事實來源
- 不得新增功能/頁面/流程/責任
- 資訊不足一律標示「未定義」或「Blocked / 未定義」
- 僅輸出檔案內容本身（依各 prompt final instruction）

執行流程：
1) 先產出 spec（4 份、依順序、H1 必須正確）
2) 依 00–03 推導 API 清單，產出 04-api-inferred.spec.md（僅以四份 spec 為依據，不新增功能）
3) 再由 spec 拆分 tasks（frontend/ backend，檔名與六章節必須正確，含對應頁面名稱且為英文）
4) 最後自我檢查：檔案數量/路徑/檔名/H1/章節/對應頁面名稱齊全
```
