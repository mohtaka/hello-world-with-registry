# 1. 実行環境のみを持つ軽量なベースイメージ（約40MB程度）
FROM node:20-alpine

# 2. アプリの配置場所を決定
WORKDIR /usr/src/app

# 3. ソースコードをコピー
# node_modulesがないので、カレントディレクトリのjsファイルを移すだけ
COPY . .

# 4. App Serviceが使用するポートを環境変数で固定
ENV PORT 8080
EXPOSE 8080

# 5. 実行ユーザーをroot以外に変更（セキュリティの基本）
USER node

# 6. アプリの起動（npm start）
CMD ["npm", "start"]