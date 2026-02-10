# Task Summary
建立狀態變更與關鍵操作的操作記錄能力，確保出貨/收貨/退貨流程可追溯。

# Source Spec
- analysis_context/spec/00-overview.spec.md（資料整合與追溯、審計）
- analysis_context/spec/03-backend.spec.md（操作記錄、可追溯性）

# Responsibility
- Backend：操作記錄與可追溯性。

# Acceptance Criteria
- 出貨/收貨/退貨的關鍵狀態轉移與操作（例如狀態變更、簽名送出、退貨單修改）皆會被記錄。
- 操作記錄可支援後續查詢與追溯（查詢介面/欄位未定義）。

# Notes
- 審計日誌的查詢 UI/報表未在 spec 中定義；此 Task 僅涵蓋「記錄」責任。
