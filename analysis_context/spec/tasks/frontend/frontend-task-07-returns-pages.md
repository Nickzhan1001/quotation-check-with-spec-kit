# Task Summary
建立退貨單列表頁與退貨單詳細頁，並依退貨單狀態切換編輯/唯讀。

# Source Spec
- analysis_context/spec/01-routing-pages.spec.md（退貨單列表/詳細頁）
- analysis_context/spec/02-frontend.spec.md（狀態對應操作規則）

# Responsibility
- Frontend：退貨作業頁面呈現與互動。

# Acceptance Criteria
- 退貨單列表顯示必要欄位（退貨單號/建立日期/原配送單號/客戶簡稱/退貨類型/狀態）並支援篩選。
- 狀態為未完成時顯示「編輯」入口；狀態為已立單時顯示「查看」入口。
- 退貨單詳細頁可依狀態切換可編輯/唯讀，並顯示完整退貨單資訊與退貨商品內容。

# Notes
- 退貨單狀態轉移規則（何時由未完成變已立單）未在前台規格中定義。
