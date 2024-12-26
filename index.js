// 載入 Node.js 的核心模塊
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Lambda 函數的主體
exports.handler = async (event) => {
    // 從 HTTP 請求的 query string 參數中獲取品牌名
    const brand = event.queryStringParameters.brand;
    
    console.log(brand);

    return await main(brand);
};

// 讀取 CSV 檔案的函數
function readCsv(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}

async function main(brand) {
    // 構建 CSV 文件的路徑
    const filePath = `./${brand}.csv`

    // 讀取 CSV 檔案並解析為 JSON
    try {
        const data = await readCsv(filePath);

        console.log(data);
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({brand:brand,data:data})
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error reading the CSV file' })
        };
    }
}

//main('schwarzkopf');