const http = require('http');

const server = http.createServer(function(request, response) {
    // 確実に自分のコードだとわかるように、日付や名前を入れるのがプロのデバッグです
    const now = new Date().toLocaleString('ja-JP');
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`
        <html>
            <body style="background-color: #f0f8ff; text-align: center; padding-top: 50px;">
                <h1>🚀 Azure Container Registry + Azure App Service デプロイ成功！PipeLineつながっている！！</h1>
                <p>このメッセージが表示されていれば、あなたのコードが動いています。</p>
                <p>更新時刻: ${now}</p>
            </body>
        </html>
    `);
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log(`Server running at http://localhost:${port}`);