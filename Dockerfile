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

# --- 【重要】ここを追加：/app ディレクトリの所有者を非ルートユーザー 'node' に変更 ---
# これにより、バインドマウントされたファイルに対する 'node' ユーザーの書き込み権限を保証します。
RUN chown -R node:node /app

# Next.jsのデフォルトポート3000を公開
EXPOSE 3000

# コンテナ起動時のデフォルトコマンド
CMD ["npm", "run", "dev"]