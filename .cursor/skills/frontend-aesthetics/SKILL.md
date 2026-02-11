---
name: frontend-aesthetics
description: Apply prompting guidelines for distinctive frontend design and modern UI best practices. Use when building or refining web UIs, landing pages, dashboards, or any frontend artifact where the user wants to avoid generic "AI slop" and get creative typography, cohesive color themes, motion, and atmospheric backgrounds. Output must comply with modern UI best practices (accessibility, responsive, touch targets, semantic markup). Trigger on requests for beautiful UI, polished frontend, or when output tends toward Inter/purple-gradient defaults.
---

# Frontend Aesthetics 提示指南

依據 [Anthropic Claude Cookbooks - Prompting for Frontend Aesthetics](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)，在產出或修改前端介面時套用以下美學指引，避免保守、泛用風格，產出有辨識度且精緻的介面。

## 何時套用本技能

- 使用者要求「好看」「有質感」「不要像 AI 做的」的前端
- 產出登入頁、Landing、Dashboard、表單、後台等網頁介面
- 檢視或重構既有前端時，希望提升視覺辨識度與一致性

## 核心美學提示（必須套用）

在產出或修改前端程式碼時，**依下列維度**約束與引導設計，並在回覆中體現這些原則。

### 1. 字體（Typography）

- 選用**有特色、易辨識**的字體，避免泛用字體：Arial、Inter、Roboto、系統預設。
- 可參考：Syne、DM Sans、Crimson Pro、JetBrains Mono、Bricolage Grotesque、IBM Plex 等；依產品調性選擇並明確寫出字體名稱。
- 標題與內文要有**明顯對比**（如字重 100/200 vs 800/900、字級差距 3x+），不要只做 400 vs 600 的微調。

### 2. 色彩與主題（Color & Theme）

- **鎖定一個明確美學**：主色 + 點綴色優於「平均分配」的配色。
- 使用 CSS 變數（或設計 token）維持全站一致。
- 可參考 IDE 主題、文化或品牌美學，但需整站統一，不要東一塊西一塊。

### 3. 動效（Motion）

- 適當使用動畫與微互動（過場、hover、staggered reveal）。
- 純 HTML/CSS 產物優先用 **CSS 動畫**（含 `animation-delay` 做錯落進場）；若為 React 且專案允許，可採用 Motion 等庫。
- **集中用在關鍵時刻**：例如一次頁面載入的錯落進場，比到處零散動效更有感。

### 4. 背景（Backgrounds）

- 營造**層次與氛圍**，避免大片純色。
- 可善用：CSS 漸層、幾何圖案、與主題一致的紋理或光暈，讓背景有情境感。

### 5. 務必避免的「AI 感」套路

- 過度使用的字體：Inter、Roboto、Arial、系統字體。
- 老套配色：尤其是白底 + 紫色漸層。
- 千篇一律的版型與元件樣式。
- 缺乏情境、可套用到任何產品的通用風格。

### 6. 創意與多樣性

- 依**產品情境**做有意識的選擇（例如 B2B 儀表板 vs 消費型 Landing）。
- 在亮色/暗色、字體、風格上**主動做差異化**，避免每次產出都收斂到同一套（例如 Space Grotesk）。

## 現代 UI 最佳實踐（須符合）

產出須同時符合現代 UI 最佳實踐，不得僅追求視覺而犧牲可用性與標準。

- **無障礙（Accessibility）**：足夠的對比度（WCAG AA）、焦點順序與焦點可見、表單具 `<label>` 或 `aria-label`、按鈕/連結語意正確；必要時提供 `aria-*` 與 `role`。
- **響應式（Responsive）**：以 viewport / 斷點考量版面，行動優先或至少支援小螢幕可讀與可操作，避免橫向捲動或元素溢出。
- **觸控與點擊目標**：可點擊/可觸控區域至少約 44×44px，重要按鈕與連結留有足夠間距。
- **語意與結構**：使用語意化 HTML（`<header>`、`<main>`、`<nav>`、`<section>`、`<article>`、`<button>` vs `<a>` 等），標題階層合理（h1→h2→h3）。
- **效能與載入**：字體以 `preconnect` / 非同步載入為佳，動效避免造成 layout thrash；圖片若有則需 `alt`、必要時 `loading="lazy"`。
- **減少動效干擾**：尊重 `prefers-reduced-motion`，提供 `@media (prefers-reduced-motion: reduce)` 降低或關閉動畫。

## 實作要點

- 在撰寫或修改 HTML/CSS/React 時，**先聲明**本頁採用的字體、主色與風格關鍵字（例如「深色、科技感、單一強調色」）。
- 程式碼中實際使用該字體（如 Google Fonts 連結與 `font-family`）、CSS 變數、以及至少一處有節制的動效或背景層次。
- 若使用者指定主題（如「復古」「極簡」「Solarpunk」），則在以上維度內**鎖定該主題**，並在 references 中可選用對應的隔離提示。

## 參考

- 完整範例與對照： [prompting_for_frontend_aesthetics.ipynb](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)
- 僅字體指引或僅主題約束：見 `references/isolated-prompts.md`（可選）。
