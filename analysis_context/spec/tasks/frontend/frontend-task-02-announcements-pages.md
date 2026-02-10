# Task Summary
建立即時公告的列表頁與詳細頁，包含篩選、已讀/未讀、刪除與依篩選條件的批量操作。

# Source Spec
- analysis_context/spec/01-routing-pages.spec.md（公告列表/詳細頁功能區塊）
- analysis_context/spec/02-frontend.spec.md（公告行為規則、批量操作規則）

# Responsibility
- Frontend：公告頁面的資料呈現與互動行為。

# Acceptance Criteria
- 公告列表頁具備：篩選列、勾選/全選、單筆已讀、單筆刪除、已讀/未讀狀態顯示。
- 「全部已讀」與「全部刪除」會依目前篩選條件作用，且操作後列表狀態更新。
- 公告詳細頁顯示：日期、時間、標題、內容；具備刪除與返回列表。

# Notes
- 批量操作成功提示文案與影響筆數呈現方式未定義。
