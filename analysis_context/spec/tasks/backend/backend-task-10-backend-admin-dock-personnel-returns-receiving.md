# 任務摘要
實作後台管理功能之後端支援：碼頭列表 CRUD、碼頭人員列表 CRUD、退貨單列表（後台）與倉儲收貨資訊查詢（列表與入庫分貨/越庫作業編輯連動）。

# 來源 Spec
- 00-overview.spec.md（後台管理功能）
- 03-backend.spec.md（後台管理功能：碼頭、人員、退貨單、倉儲收貨查詢）

# 對應頁面名稱
- dock-list、dock-form、dock-personnel-list、dock-personnel-form、return-slip-admin、warehouse-receiving-query、content-block-dock-forgot-password、notification-list-form、internal-site-form、delivery-order-admin

# 責任範圍
- 碼頭管理：列表搜尋（關鍵字、所屬廠區）、CRUD、啟用狀態；刪除僅允許未曾安排過車次之碼頭。
- 碼頭人員管理：列表搜尋（姓名/帳號、所屬廠區）、CRUD、啟用狀態；刪除僅允許未曾登入過之人員；密碼儲存與驗證符合安全規範。
- 退貨單列表（後台）：搜尋欄位與列表欄位依 PRD FR68；彙整規則、單號、狀態流轉與前台一致並雙向同步。
- 倉儲收貨資訊查詢：列表搜尋與排序（先狀態再回報時間）；入庫分貨/越庫作業編輯頁之讀寫與前台收貨明細連動；「是否異動」於下貨完成後若後台有修改則標記為「是」。

# 驗收標準
- 碼頭/人員 CRUD 與刪除條件正確；退貨單後台與前台資料一致；倉儲收貨查詢與編輯連動正確。

# 備註
- 後台既有功能擴增（通知列表發送類型、內部廠區入庫分貨配送點、配送單管理作業類型與退貨作業）之後端 API 依現有後台架構擴充，可與本任務或 backend-task-08 協調實作順序。
