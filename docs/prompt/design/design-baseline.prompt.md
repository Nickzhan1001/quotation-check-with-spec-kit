# 設計基準（Design Baseline）

本文件為本專案設計稿與前端產出之共用基準，供 .pen 設計、實作與 prompt 引用。

---

## 畫布與版面

- **預設畫布**：1920 × 1080（登入頁、出貨作業頁等主要頁面）。
- **版面**：以 `fill_container` 與 padding / gap 控制；主內容區必要時可設 max-width 以維持可讀性。

---

## 字體（Typography）

- **標題、中文主視覺**：**Noto Sans TC**（700 為主）。
- **內文、表單、列表、英文**：**DM Sans**（400 / 500 / 600 依層級）。
- **禁止**：Inter、Roboto、Arial、系統預設字體。
- **層級**：標題與內文字級比建議 ≥2x（例如 28–32px 標題 vs 14px 內文）。

---

## 色彩 Token（CSS 變數 / 設計變數）

產出設計或程式碼時請使用以下 token 名稱與色值，以維持全站一致。

| Token | 色值 | 用途 |
|-------|------|------|
| `accent-primary` | `#0D6E6E` | 主按鈕、連結、選中態、品牌強調 |
| `accent-primary-hover` | `#0A5858` | 主按鈕 hover |
| `accent-secondary` | `#E07B54` | 次要強調（登入頁等） |
| `bg-primary` | `#FAFAFA` | 頁面背景 |
| `bg-surface` | `#FFFFFF` | 卡片、表單區、模態背景 |
| `bg-muted` | `#F5F5F5` | 次要區塊、輸入區背景 |
| `border-primary` | `#E5E5E5` | 邊框、分割線 |
| `border-divider` | `#F0F0F0` | 區塊間分隔 |
| `text-primary` | `#1A1A1A` | 主要文字 |
| `text-secondary` | `#666666` | 次要說明文字 |
| `text-tertiary` | `#888888` | 輔助文字 |
| `text-muted` | `#AAAAAA` | placeholder、禁用態 |
| `error-red` | `#DC3545` | 錯誤文字、錯誤圖示 |
| `error-bg` | `#FFF0F0` | 錯誤區塊背景 |
| `status-pending` | `#8eba34` | 待出貨（出貨作業） |
| `status-waiting` | `#3a9cd8` | 缺貨待料 |
| `status-notify` | `#f68480` | 通知未到 |

---

## 間距、圓角與陰影

- **間距**：區塊 padding 常用 24 / 32；元件 gap 常用 8 / 12 / 16 / 24。
- **圓角**：按鈕、輸入框、卡片常用 8px；大區塊可用 12px。
- **陰影**：設計稿不使用陰影（實作時可依需求另加）。

---

## 導航欄（Navigation Bar）

### 基本設定

- **背景色**：`#0d6e6e`（與 `accent-primary` 一致）
- **高度**：64px
- **水平內距**：左右各 40px
- **底部邊框**：`$border-primary`，1px
- **布局**：`space_between`（左側標題、中間導航項目、右側用戶操作）

### 系統標題

- **位置**：導航欄左側
- **文字**：「昶青碼頭系統」
- **字體**：Noto Sans TC，20px，700（粗體）
- **顏色**：`#FFFFFF`（白色）

### 導航項目

- **字體**：Noto Sans TC，16px
- **一般狀態**：
  - 文字顏色：`#FFFFFF`
  - 圖示顏色：`#FFFFFF`
  - 字重：500
  - 內距：上下 12px，左右 16px
- **活動狀態**：
  - 文字顏色：`#FFFFFF`
  - 圖示顏色：`#FFFFFF`
  - 字重：600
  - 背景：`rgba(255, 255, 255, 0.15)`（半透明白色）
  - 底部邊框：`#FFFFFF`，2px

### 用戶操作區

- **用戶圖示**：`#FFFFFF`，20×20px
- **登出按鈕**：
  - 文字：`#FFFFFF`，Noto Sans TC，14px，500
  - 圖示：`#FFFFFF`，16×16px
  - 邊框：`#FFFFFF`，1px
  - 背景：透明
  - 圓角：6px
  - 內距：上下 8px，左右 12px

### 設計原則

- 所有文字與圖示在深色背景上使用白色 (`#FFFFFF`) 以確保對比度與可讀性
- 活動狀態使用半透明白色背景與白色底部邊框以突出顯示
- 導航項目間距使用 `gap: 8` 維持視覺一致性

---

## 燈箱（Dialog/Modal）

### Overlay 遮罩

> **注意**：以下 Overlay 遮罩規範**僅在設計燈箱（Dialog/Modal）時使用**。一般頁面（如列表頁、詳細頁）不應使用 overlay，應直接使用頁面背景色 `$bg-primary`。

- **外層畫布底色**：`$bg-primary`（`#FAFAFA`）- 燈箱畫布的背景色
- **Overlay 背景色**：`#00000040`（半透明黑色，約 25% 不透明度，與登入失敗燈箱一致）
- **覆蓋範圍**：覆蓋整個視窗（`fill_container`）
- **布局**：垂直布局（`layout: vertical`），置中對齊，使用 `justifyContent: center` 與 `alignItems: center`
- **互動**：點擊 overlay 可關閉燈箱（實作時需處理）

### 燈箱容器

- **寬度**：800px（固定寬度）
- **高度**：`fit_content`（依內容自動調整）
- **背景色**：`$bg-surface`（白色）
- **圓角**：12px
- **內距**：32px（四周）
- **邊框**：`$border-primary`，1px，inside 對齊
- **布局**：垂直布局（`layout: vertical`），間距 24px
- **陰影**：設計稿不使用陰影（實作時可依需求添加）

### 標題區域

- **布局**：水平布局（`layout: horizontal`），`space_between` 對齊
- **標題文字**：
  - 內容：「車次詳細配送單」（或對應的燈箱標題，如「簽名確認」）
  - 字體：Noto Sans TC，20px 或 24px，700（粗體）
    - 一般燈箱：24px（如配送單詳細）
    - 簡潔燈箱：20px（如登入失敗、簽名確認）
  - 顏色：`$text-primary`
- **關閉按鈕**：
  - 尺寸：32×32px（符合觸控友善需求）
  - 背景：透明
  - 邊框：`$border-primary`，1px
  - 圓角：6px
  - 圖示：X icon（lucide），16×16px
  - 圖示顏色：`$text-secondary`
  - 位置：標題右側

### 內容區域

- **基本資訊區**：
  - 標題：Noto Sans TC，18px，600
  - 資訊行：水平布局，標籤與數值並排
  - 標籤：DM Sans，14px，500，`$text-secondary`
  - 數值：DM Sans，14px，400，`$text-primary`
  - 行間距：12px
- **配送資訊區**：
  - 標題：Noto Sans TC，18px，600
  - 配送點列表：垂直布局，間距 12px
  - 配送點卡片：
    - 背景：`$bg-muted`
    - 圓角：8px
    - 內距：16px
    - 邊框：`$border-primary`，1px
  - 配送單卡片：
    - 背景：`$bg-surface`
    - 圓角：6px
    - 內距：上下 8px，左右 12px

### 操作按鈕區

- **位置**：燈箱最下方
- **布局**：水平布局，右對齊（`justifyContent: flex_end`）
- **間距**：按鈕之間 12px
- **上內距**：16px（與上方內容區隔）
- **按鈕樣式**：
  - **主要按鈕**（完成出車）：
    - 背景：`$accent-primary`
    - 文字：`#FFFFFF`，Noto Sans TC，14px，600
    - 內距：上下 12px，左右 24px
    - 圓角：8px
  - **次要按鈕**（缺貨待料、通知未到、取消）：
    - 背景：透明
    - 文字：`$text-primary`，Noto Sans TC，14px，500
    - 邊框：`$border-primary`，1px
    - 內距：上下 12px，左右 24px
    - 圓角：8px

### 簽名板（Signature Pad）燈箱

簽名板燈箱遵循一般燈箱設計規範，但有以下特定設定：

- **容器寬度**：420px 或 800px（依簽名區域需求調整）
- **標題**：Noto Sans TC，20px，700，「簽名確認」
- **簽名區域**：
  - 高度：300px（固定）
  - 背景：`$bg-muted`（`#FAFAFA`）
  - 圓角：8px
  - 邊框：`$border-primary`，1px
  - 提示文字：DM Sans，14px，`$text-muted`，「請在此處簽名」
- **操作按鈕**：
  - 布局：水平布局，右對齊（`justifyContent: flex_end`）
  - 間距：12px
  - **清除按鈕**：次要按鈕樣式（透明背景，邊框）
  - **送出按鈕**：主要按鈕樣式（`$accent-primary` 背景，白色文字），全寬或 `fit_content`，高度 44px

### 設計原則

- 燈箱遮罩使用半透明黑色（`#00000040`）以突出燈箱內容並降低背景干擾
- 外層畫布使用 `$bg-primary`（`#FAFAFA`）作為底色
- 燈箱容器置中顯示，寬度固定以維持一致的閱讀體驗
- 關閉按鈕位於標題右側，符合常見的使用者預期
- 所有按鈕符合觸控友善需求（至少 44×44px 觸控區域）
- 內容區域使用清晰的層級結構與適當的間距
- 參考設計：`design/login.pen` 中的「登入失敗燈箱」與 `design/receiving-list.pen` 中的「簽名板燈箱」

---

## 觸控與無障礙

- **可點擊／觸控區域**：至少約 44×44px。
- **對比度**：文字與背景須符合 WCAG AA。
- **動效**：實作時支援 `prefers-reduced-motion: reduce`，可降低或關閉動畫。

---

## 參考設計檔

- `design/login.pen`：登入頁（變數、字體、表單與卡片樣式）。
- `design/shipping.pen`：出貨作業頁（篩選列、碼頭儀錶板、未排車次列表與狀態色）。
