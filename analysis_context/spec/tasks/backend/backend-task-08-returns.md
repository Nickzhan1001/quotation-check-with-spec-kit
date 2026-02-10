# Task Summary
提供退貨作業後端行為：退貨單列表與詳細查詢、狀態（未完成/已立單）、依狀態限制可否編輯、整合運務 App 與後台來源。

# Source Spec
- analysis_context/spec/00-overview.spec.md（退貨作業管理）
- analysis_context/spec/03-backend.spec.md（退貨作業責任、來源整合、編輯規則）

# Responsibility
- Backend：退貨單資料整合、查詢與狀態/編輯規則。

# Acceptance Criteria
- 後端提供退貨單列表查詢，回傳必要欄位與狀態（未完成/已立單），並支援篩選。
- 後端提供退貨單詳細資訊查詢。
- 未完成狀態允許修改退貨商品內容；已立單狀態限制為唯讀。
- 退貨單資料集合整合運務 App 與後台產生的資料來源。

# Notes
- 退貨單狀態轉移條件（何時變更為已立單）在 spec 中未明確定義。
