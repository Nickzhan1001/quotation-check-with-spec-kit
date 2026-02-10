# Task Summary
提供簽名送出與完成鎖定的後端行為：接收並保存簽名資料、完成收貨、鎖定已完成任務避免再次修改。

# Source Spec
- analysis_context/spec/00-overview.spec.md（敏感資料保護、可靠性）
- analysis_context/spec/03-backend.spec.md（簽名與完成鎖定責任）

# Responsibility
- Backend：簽名資料接收保存、完成狀態更新與鎖定規則。

# Acceptance Criteria
- 後端可接收運務簽名資料並保存。
- 簽名送出成功後，後端更新任務收貨狀態為已完成。
- 已完成任務需限制再次進入配送點總表與後續修改（後端需在讀寫層面強制）。

# Notes
- 簽名資料加密/保護方式在 spec 中標示未定義（僅要求需保護）。
