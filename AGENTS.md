# AGENTS.md - Cursor 專案代理人指南

本專案為 **Cursor** 使用的 Agent Skills 與規則倉庫：技能放在 `.cursor/skills/`，全域規則放在 `.cursor/rules/`。Cursor 會讀取本檔與規則、技能，作為 Chat/Agent 的專案脈絡。

## 專案概覽

- **專案類型**: Cursor Agent Skills 倉庫（含規則與技能）
- **技能路徑**: `.cursor/skills/`
- **規則路徑**: `.cursor/rules/`（`.mdc`）
- **目前技能數量**: 20+（含 docx、pdf、pptx、frontend-design、mcp-builder、pm-checklist、powershell-windows 等）

## 建置 / 驗證 / 測試指令

本專案終端以 **PowerShell** 為準（見 `.cursor/rules/powershell-only.mdc`），以下指令皆為 PowerShell 或可於 PowerShell 執行的 Python 呼叫。

### 驗證單一技能
```powershell
python .cursor/skills/skill-creator/scripts/quick_validate.py .cursor/skills/<skill-name>
```

### 驗證全部技能
```powershell
Get-ChildItem -Path .cursor/skills -Directory | ForEach-Object {
  Write-Host "Validating: $($_.FullName)"
  python .cursor/skills/skill-creator/scripts/quick_validate.py $_.FullName
  if ($LASTEXITCODE -ne 0) { Write-Host "FAILED: $($_.Name)" }
}
```

### 用範本建立新技能
```powershell
python .cursor/skills/skill-creator/scripts/init_skill.py <skill-name> --path .cursor/skills
```

### 打包技能供分發
```powershell
python .cursor/skills/skill-creator/scripts/package_skill.py .cursor/skills/<skill-name>
```

## 程式與文件風格規範

### 技能目錄結構
每個技能為一資料夾，內含 `SKILL.md`（必要）；Cursor 會從 `.cursor/skills/`、`.claude/skills/`、`.codex/skills/` 自動探索並載入。建議結構：
```
.cursor/skills/
└── skill-name/              # 資料夾名稱須與 frontmatter 的 name 一致
    ├── SKILL.md             # 必要：主說明，含 YAML frontmatter
    ├── .openskills.json     # 選用：技能中繼資料
    ├── scripts/             # 選用：可執行腳本（Python/Bash）
    ├── references/          # 選用：按需載入的參考文件
    └── assets/              # 選用：模板、圖片、字型等資產
```

### SKILL.md 格式要求

**YAML Frontmatter（必要）**
```yaml
---
name: skill-name
description: 清楚說明技能用途與觸發情境（何時應使用）
license: Complete terms in LICENSE.txt
---
```

**Frontmatter 欄位（依 Cursor 文件）**
- `name`（必要）：技能識別名，hyphen-case，**須與該技能所在資料夾名稱一致**
- `description`（必要）：觸發條件與用途；Cursor 依此判斷是否在對話中採用該技能
- `license`：授權說明（選用）
- `compatibility`：相容性說明（選用）
- `metadata`：其他補充資訊（選用）
- `disable-model-invocation`：設為 `true` 時，技能**僅**在使用者於 Agent 對話中手動輸入 `/skill-name` 時載入，不會被自動依情境選用（選用）

### 命名規範

**技能名稱（資料夾與 frontmatter `name` 一致）**
- 技能資料夾名稱須與 `SKILL.md` 內 frontmatter 的 `name` 相同（Cursor 官方要求）
- 使用 `hyphen-case`（例如：`skill-creator`、`frontend-design`）
- 僅允許小寫英文字母、數字、連字號
- 不可有開頭/結尾連字號，不可連續兩個連字號
- 長度上限 64 字元

**檔名規範**
- `SKILL.md` 必須全大寫
- `scripts/`、`references/`、`assets/` 目錄需小寫
- Python 檔名採 `lowercase_with_underscores.py`

### 撰寫風格

**SKILL.md 內容**
- 以祈使句或不定詞風格撰寫（例如「擷取文字...」「建立文件...」）
- 建議 500 行以內，過長內容拆到 `references/`
- 優先放具體範例，避免過度抽象敘述
- 採漸進式揭露：metadata → SKILL.md → references

**腳本（scripts）**
- 使用 Python 3
- 可行時加入型別註記（type hints）
- 需有清楚 docstring 說明用途與用法
- 納入技能前先實際執行驗證

### 匯入、格式化、型別、命名、錯誤處理

**匯入（Imports）**
- Python 匯入順序建議：標準庫 → 第三方 → 專案內部
- 避免未使用的匯入

**格式化（Formatting）**
- 維持既有檔案風格一致
- Markdown 使用清楚標題層級與短段落
- 程式區塊提供可直接執行的範例

**型別（Types）**
- Python 函式參數與回傳型別可註記時盡量註記
- 避免用模糊型別掩蓋錯誤

**命名（Naming）**
- 技能名稱用 `hyphen-case`
- Python 變數/函式用 `snake_case`
- 常數使用全大寫（`UPPER_CASE`）

**錯誤處理（Error Handling）**
- 錯誤訊息必須可操作（指出原因與下一步）
- 驗證失敗時回傳非 0 exit code
- 驗證腳本至少檢查：frontmatter 格式、必要欄位、命名規範

### 技能設計原則

1. **保持精簡**：每段內容都要回答「Agent 真的需要這段嗎？」
2. **控制自由度**：依任務脆弱度決定指引要多具體
3. **避免雜訊檔案**：不要新增 README.md、CHANGELOG.md 等非必要檔案
4. **漸進揭露**：核心流程放 SKILL.md，細節放 references
5. **觸發條件寫在 description**：何時使用技能應放在 frontmatter，供 Cursor 比對使用者意圖

### 參考文件（references）組織

大型技能可按領域拆分：
```
references/
├── finance.md
├── sales.md
└── api_docs.md
```

若單檔超過 100 行，建議加上目錄（Table of Contents）。

## 可用技能清單

| 技能 | 說明 |
|------|------|
| algorithmic-art | 以 p5.js 建立生成式藝術 |
| brand-guidelines | 套用 Anthropic 品牌色與字體規範 |
| canvas-design | 產生 PNG/PDF 視覺設計作品 |
| doc-coauthoring | 文件共編流程與寫作引導 |
| docx | DOCX 文件建立與編輯 |
| find-skills | 協助發現與安裝 Agent 技能 |
| frontend-design | 高品質前端介面設計與實作 |
| internal-comms | 內部溝通文件撰寫 |
| mcp-builder | MCP 伺服器開發指南 |
| pdf | PDF 處理工具集 |
| pm-checklist | PM 確認清單流程 |
| pm-checklist-normalizer | PM 清單正規化與名詞解釋 |
| pm-requirement-checklist | 依 PRD/Epics 產出 PM 確認清單 |
| powershell-windows | PowerShell 語法與錯誤處理（終端僅用 PowerShell 時必用） |
| pptx | 簡報建立與編輯 |
| skill-creator | 建立與維護技能的指南 |
| slack-gif-creator | Slack 動態 GIF 製作 |
| template | 技能範本結構 |
| theme-factory | 套用主題到各類產出物 |
| web-artifacts-builder | 多元件 Web Artifact 建置 |
| webapp-testing | 使用 Playwright 進行 Web 測試 |
| xlsx | 試算表建立、編輯與分析 |

## 重要補充

- 本專案不是一般 Node.js/Python 套件專案（無 `package.json` / `pyproject.toml`）
- **技能載入**：Cursor 啟動時會自動探索 `.cursor/skills/` 等技能目錄；Agent 依 `description` 與當前情境判斷是否採用。使用者也可在 Agent 對話輸入 **`/`** 從清單手動選擇技能，或對設為 `disable-model-invocation: true` 的技能輸入 **`/skill-name`** 明確叫用。
- **規則**：`.cursor/rules/` 內規則（如 `powershell-only.mdc`）為專案級、與技能並存；執行終端指令時須遵守規則。
- **AGENTS.md**：Cursor 會將專案根目錄的 `AGENTS.md` 與 `.cursor/rules/` 一併作為 Agent 的專案脈絡（CLI Agent 同理）。
- `scripts/` 內腳本可直接執行；修改技能後建議先跑驗證再提交。

## Cursor 規則與技能整合

- **規則**：專案規則存放於 `.cursor/rules/`，以 Markdown 或 `.mdc` 撰寫，可版本控管；用於專案知識、工作流程或風格約束，Chat/Agent 會自動套用。
- **技能**：`.cursor/skills/` 內每個技能為一資料夾且含 `SKILL.md`；Agent 依情境與 `description` 決定是否採用，或由使用者以 `/`、`/skill-name` 手動叫用。
- **本檔**：`AGENTS.md` 與 `CLAUDE.md`（若有）在專案根目錄時，Cursor 會將其與 `.cursor/rules/` 一併當作規則使用。請與規則、技能內容保持一致；新增或修改規則／技能時同步更新本檔，避免代理人指令衝突。
