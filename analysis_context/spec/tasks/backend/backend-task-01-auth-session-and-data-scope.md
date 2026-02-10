# Task Summary
提供前台登入/登出所需的後端能力，並確保所有資料存取與寫入操作符合權限與內部廠區資料隔離規則。

# Source Spec
- analysis_context/spec/00-overview.spec.md（安全、資料隔離）
- analysis_context/spec/03-backend.spec.md（登入驗證、會話、權限與資料隔離）

# Responsibility
- Backend：身份驗證、會話管理、授權與資料隔離。

# Acceptance Criteria
- 後端可用後台「碼頭人員列表」作為帳號來源進行登入驗證。
- 驗證失敗可回傳可供前台顯示的錯誤狀態（前台文案為「帳號密碼輸入錯誤」）。
- 後端提供安全登出能力並使既有會話失效。
- 所有清單/查詢/狀態變更皆限制於登入者內部廠區的可見資料範圍。
- 所有寫入操作皆具備權限驗證。

# Notes
- 會話逾時時間與續期策略在 spec 中標示未定義；需以可配置/可擴充方式支援。
