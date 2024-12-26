# Node.js CSV Reader Lambda Function

## 簡介
這個專案是一個使用 Node.js 實作的 AWS Lambda 函數，能夠從指定品牌的 CSV 檔案中讀取數據並回傳 JSON 格式的結果。用戶可透過 HTTP 請求的查詢字串參數指定品牌名稱，然後該函數將會讀取對應的 CSV 文件並將內容轉換為 JSON 格式返回。

## 功能
- 接收品牌名稱作為查詢參數。
- 從指定的 CSV 檔案中讀取數據。
- 返回 JSON 格式的數據，包括品牌名稱和 CSV 內容。
- 當無法讀取 CSV 檔案時，返回錯誤訊息。

## 安裝與使用方式

1. **克隆專案**  
   使用 Git 來克隆專案到本地：
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **安裝依賴**
   使用 npm 安裝必要的依賴模組：
   ```sh
   npm install
   ```

3. **部署至 AWS Lambda**
   - 參考 AWS 文檔將函數部署至 Lambda。
   - 設定 API Gateway 以允許 HTTP 請求。

4. **發送請求**
   使用瀏覽器或 API 工具（如 Postman）發送 HTTP GET 請求：
   ```
   GET https://your-api-endpoint?brand=yourBrand
   ```

## 必要的依賴模組清單
- `fs`: Node.js 的核心模組，用於文件系統操作。
- `path`: Node.js 的核心模組，用於處理文件路徑。
- `csv-parser`: 用於解析 CSV 檔案的模組。

## 授權條款
本專案採用 MIT 授權條款。詳細資訊參見 [LICENSE](./LICENSE) 文件。