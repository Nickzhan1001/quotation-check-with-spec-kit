# Task Summary
提供即時公告的後端行為：公告列表查詢、已讀/未讀狀態、單筆/批量已讀與刪除（批量依篩選條件作用）。

# Source Spec
- analysis_context/spec/00-overview.spec.md（即時公告模組）
- analysis_context/spec/03-backend.spec.md（即時公告責任）

# Responsibility
- Backend：公告資料讀取與狀態/刪除操作。

# Acceptance Criteria
- 後端提供公告列表查詢能力，並回傳已讀/未讀狀態。
- 後端支援單筆已讀、批量已讀（以同一篩選條件定義其作用集合）。
- 後端支援單筆刪除、批量刪除（以同一篩選條件定義其作用集合）。
- 批量操作可回傳影響筆數，供前台提示。

# Notes
- 篩選條件的完整集合與欄位在 spec 中未完整定義；需以既有公告系統能力為準並確保前台可用。
