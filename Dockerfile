# Dockerfile

# Node.js 22.18.0をベースイメージとして使用
FROM node:22.18.0

# 作業ディレクトリを /app に設定
WORKDIR /app

# npmのキャッシュを無効にし、権限設定をnpmの標準ユーザーに設定
ARG USERNAME=node
ARG USER_UID=1000

# 依存関係ファイルのみをコピーし、最初にインストール
COPY package.json package-lock.json ./

# 依存関係をインストール（--legacy-peer-depsを削除）
RUN npm install

# アプリケーションの残りのコードをコピー
COPY . .

# Next.jsのデフォルトポート3000を公開
EXPOSE 3000

# コンテナ起動時のデフォルトコマンド
CMD ["npm", "run", "dev"]