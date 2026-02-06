# AGENTS.md - Claude Skills 倉庫作業指南

本專案是「Claude Skills Repository」，用來存放可被 Claude 載入的技能套件。

## 專案概覽

- **專案類型**: Claude Skills Kit
- **主要路徑**: `.claude/skills/`
- **目前技能數量**: 17 個（含 docx、pdf、pptx、frontend-design、mcp-builder 等）

## 建置 / 驗證 / 測試指令

### 驗證單一技能（相當於單一測試）
```bash
python .claude/skills/skill-creator/scripts/quick_validate.py .claude/skills/<skill-name>
```

### 驗證全部技能
```bash
for skill in .claude/skills/*/; do
  echo "Validating: $skill"
  python .claude/skills/skill-creator/scripts/quick_validate.py "$skill" || echo "FAILED: $skill"
done
```

### 用範本建立新技能
```bash
python .claude/skills/skill-creator/scripts/init_skill.py <skill-name> --path .claude/skills
```

### 打包技能供分發
```bash
python .claude/skills/skill-creator/scripts/package_skill.py .claude/skills/<skill-name>
```

## 程式與文件風格規範

### 技能目錄結構
每個技能都應遵循以下結構：
```
skill-name/
├── SKILL.md                 # 必要：主說明，含 YAML frontmatter
├── .openskills.json         # 技能中繼資料
├── scripts/                 # 選用：可執行腳本（Python/Bash）
├── references/              # 選用：按需載入的參考文件
└── assets/                  # 選用：模板、圖片、字型等資產
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

**允許的 frontmatter 欄位**
- `name`（必要）：技能識別名，hyphen-case
- `description`（必要）：完整觸發條件與用途
- `license`：授權說明
- `allowed-tools`：可用工具清單
- `metadata`：其他補充資訊

### 命名規範

**技能名稱**
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
- 採漸進式揭露：metadata -> SKILL.md -> references

**腳本（scripts）**
- 使用 Python 3
- 可行時加入型別註記（type hints）
- 需有清楚 docstring 說明用途與用法
- 納入技能前先實際執行驗證

### 匯入、格式化、型別、命名、錯誤處理

**匯入（Imports）**
- Python 匯入順序建議：標準庫 -> 第三方 -> 專案內部
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

1. **保持精簡**：每段內容都要回答「Claude 真的需要這段嗎？」
2. **控制自由度**：依任務脆弱度決定指引要多具體
3. **避免雜訊檔案**：不要新增 README.md、CHANGELOG.md 等非必要檔案
4. **漸進揭露**：核心流程放 SKILL.md，細節放 references
5. **觸發條件寫在 description**：何時使用技能應放在 frontmatter

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
| frontend-design | 高品質前端介面設計與實作 |
| internal-comms | 內部溝通文件撰寫 |
| mcp-builder | MCP 伺服器開發指南 |
| pdf | PDF 處理工具集 |
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
- 技能由 Claude 依 `SKILL.md` frontmatter 的 `description` 自動判斷載入
- `scripts/` 內腳本可直接執行
- 修改技能後，建議先跑驗證再提交

## Cursor / Copilot 規則整合

- 目前專案未發現 `.cursorrules`
- 目前專案未發現 `.cursor/rules/`
- 目前專案未發現 `.github/copilot-instructions.md`
- 若未來新增上述規則，請同步更新本檔，避免代理人指令衝突
