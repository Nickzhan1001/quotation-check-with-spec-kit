# Task Summary
提供出貨作業的通知責任與即時同步：通知運務推播、通知未到時的額外通知，以及狀態/集合變更的即時同步推送。

# Source Spec
- analysis_context/spec/00-overview.spec.md（即時同步與通知）
- analysis_context/spec/03-backend.spec.md（出貨通知責任、即時同步）

# Responsibility
- Backend：通知發送與即時同步推送。

# Acceptance Criteria
- 後端支援由前台觸發的「通知運務」推播通知發送至運務 App。
- 當狀態設定為「通知未到」時，後端需發送通知給運務與運務部後台主管。
- 任何碼頭狀態/車次狀態/列表集合變動可在 < 3 秒內同步到前台（推送或可被前台取得）。

# Notes
- 運務部後台主管的對象定義、通知內容與失敗重試策略在 spec 中標示未定義。
