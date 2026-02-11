# 設計缺漏分析報告

依 `epics.md`、`prd.md`、`ux-design-specification.md` 及 frontend-task spec 對照 `design.pen` 設計稿之缺漏檢查結果。

**檢查日期**：2025-02-11

---

## 一、已補齊之缺漏

### 1. 簽名板燈箱（Signature Pad Dialog）
- **Spec 來源**：frontend-task-06、UX §簽名板、PRD FR37–38、Epics Story 5.20–5.21
- **需求**：點擊「收貨完成」後跳出簽名板燈箱；簽名板至少 300×150px；支援觸控繪製、清除、送出；送出成功後關閉並返回收貨列表
- **狀態**：已補齊
- **設計稿節點**：`Zas4C` (Signature Pad Dialog Canvas)，位於 x:4040, y:1280
- **內容**：標題「請簽名確認收貨」、簽名區 400×180px、清除按鈕、送出按鈕

### 2. 退貨列表篩選與表格結構
- **Spec 來源**：frontend-task-07、02-frontend.spec §6.1、UX「退貨作業 > 列表頁」
- **需求**：6 組篩選（關鍵字、建立日期、客戶簡稱、溫層、退貨類型、狀態）；列表含勾選格、退貨單號、建立日期、客戶簡稱、溫層、退貨類型、狀態、操作（編輯/查看）
- **狀態**：已補齊
- **設計稿節點**：`btgQQ` (Return List Page)
- **內容**：6 組篩選、表頭列、3 筆退貨單範例（含勾選、編輯/查看按鈕）

---

## 二、建議再確認或細化之項目

### 1. 功能列：即時公告 icon
- **Spec**：UX 功能列為「即時公告（小鈴鐺 icon）」，可顯示未讀數量
- **現況**：設計稿為 `bell` icon，未設計未讀數量 badge
- **建議**：若需未讀數量，可於小鈴鐺旁加數字 badge

### 2. 退貨單編輯／彙整單編輯頁
- **Spec**：純顯示欄位、退貨資料表格、新增商品燈箱、檔案上傳（限 PDF/PNG/JPG）
- **現況**：已有基本頁面結構（DGIJj、sbS52）
- **建議**：逐一對照 Spec 欄位與操作，補齊「新增商品」燈箱、檔案上傳區、退貨資訊表格欄位（商品名稱、退貨數量、備註、刪除規則）

### 3. 退貨單查看／彙整單查看頁
- **Spec**：純顯示，唯讀
- **現況**：已有頁面（tZ93n、RS7yb）
- **建議**：確認所有欄位為純顯示、無可編輯元件

### 4. 收貨明細：進入時間動態更新
- **Spec**：frontend-task-06 要求進入時間動態更新
- **現況**：設計稿為靜態，無法呈現「動態更新」
- **建議**：設計稿註記「進入時間需即時更新」，實作時以即時資料處理

### 5. 彙整退貨單錯誤提示
- **Spec**：若勾選不符條件，顯示「請選擇同客戶溫層的未完成退貨單」
- **現況**：設計稿未呈現此錯誤狀態
- **建議**：可加一版「彙整失敗」提示燈箱或 inline 錯誤訊息 mockup

---

## 三、設計稿頁面清單與對應路由

| 頁面名稱 | 設計節點 ID | 對應路由 | 備註 |
|----------|-------------|----------|------|
| Login Page | rHXiG | /login | |
| Login - Error State | teX0Y | /login?error | |
| Login - Forgot Password | VI131 | /login/forgot | |
| Shipping Page | Shp01 | /shipping | |
| Delivery Details Dialog | dpODf | (燈箱) | 車次詳細配送單 |
| **Signature Pad Dialog** | **Zas4C** | **(燈箱)** | **收貨完成簽名** |
| Announcement List | 2GIda | /announcements | |
| Announcement Detail | KVzhe | /announcements/:id | |
| Receiving List | W3aJj | /receiving | |
| Delivery Points Summary | 3GNCk | /receiving/:taskId/summary | |
| Receiving Detail (Inbound) | Y4m97 | /receiving/:taskId/detail/inbound | |
| Receiving Detail (Cross-Dock) | csVOT | /receiving/:taskId/detail/cross-dock | |
| Return List | btgQQ | /return-list | 已補篩選與列表結構 |
| Return Slip Edit | DGIJj | /return-slip-edit/:id | |
| Return Slip View | tZ93n | /return-slip-view/:id | |
| Consolidated Slip Edit | sbS52 | /consolidated-slip-edit/:id | |
| Consolidated Slip View | RS7yb | /consolidated-slip-view/:id | |

---

## 四、依功能分列之版面配置（座標）

- **Row 0** (y=0)：登入相關（Login、Login Error、Login Forgot Password）
- **Row 1** (y=1280)：出貨作業、Delivery Details Dialog、Signature Pad Dialog
- **Row 2** (y=2560)：即時公告
- **Row 3** (y=3840)：收貨作業
- **Row 4** (y=5120)：退貨作業

---

## 五、結論

主要缺漏「簽名板燈箱」與「退貨列表篩選／表格結構」已於 design.pen 中補齊。其餘為欄位細節、動態行為與錯誤狀態等，建議於實作前再對 Spec 逐項對照，並視需要補充設計 mockup。
