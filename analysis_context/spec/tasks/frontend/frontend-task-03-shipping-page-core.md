# Task Summary
建立出貨作業頁的核心畫面：篩選列（僅影響未排車次列表）、碼頭儀錶板、未排車次列表，並呈現狀態顏色。

# Source Spec
- analysis_context/spec/01-routing-pages.spec.md（出貨作業頁三區塊、未排車次列表、碼頭儀錶板）
- analysis_context/spec/02-frontend.spec.md（狀態顏色系統、碼頭儀錶板顯示規則、篩選影響範圍）

# Responsibility
- Frontend：出貨作業頁面布局與狀態呈現。

# Acceptance Criteria
- 出貨作業頁包含三區塊：篩選列、碼頭儀錶板、未排車次列表。
- 篩選列的變更只影響未排車次列表顯示內容，不影響碼頭儀錶板。
- 碼頭儀錶板一碼頭一組，預設底色綠色，並可依狀態顯示綠/藍/紅（`#8eba34`/`#3a9cd8`/`#f68480`）。
- 未排車次列表能以顏色標示狀態（綠/藍/紅）。

# Notes
- 可選車次下拉候選的條件由後端提供；前台僅需依回傳內容顯示。
