# Task Summary
提供前台「忘記密碼提示」所需的後端內容讀取能力，內容由後台設定且前台僅純顯示。

# Source Spec
- analysis_context/spec/01-routing-pages.spec.md（網站管理 > 區塊內容管理 > 碼頭-忘記密碼）
- analysis_context/spec/03-backend.spec.md（忘記密碼提示內容責任）

# Responsibility
- Backend：忘記密碼提示文字之資料提供。

# Acceptance Criteria
- 後端可讀取並回傳後台「碼頭-忘記密碼」區塊內容供前台顯示。
- 回傳內容可支援前台於 < 1 秒內載入提示文字（以 PRD/NFR 為目標）。

# Notes
- 後台內容的維護 UI 若已存在於既有系統，僅需確保資料可被前台取用。
