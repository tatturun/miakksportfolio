## 0. node.js、npmのバージョン
node.js 22.18.0<br>
npm 11.6.1<br>
Next.js 15.5.4

実行は
`npm run dev`

## 1. dockerによる開発
### 1.1 最初のセットアップ時（クローン直後）
メンバーがリポジトリをクローンした後、あなたがやったように以下の手順で済みます。

VS Codeでプロジェクトを開く。

「Reopen in Container」をクリックする。

VS CodeがDockerfileとdevcontainer.jsonを読み込み、イメージのビルド、コンテナの起動、VS Codeの接続のすべてを一括で処理します。Docker Hubからイメージをプルするのと同様に、ローカルにイメージがない場合はビルドから行ってくれます。

### 1.2 開発の終了時（コンテナの停止）
開発を終える際は、以下のいずれかの操作でコンテナが停止します。

最も簡単な方法: VS Codeのウィンドウを閉じる。

VS Codeは通常、接続していたDev Containerを自動的に停止（またはスリープ状態に移行）します。

手動で停止: VS Codeのコマンドパレットから「Dev Containers: Stop Container」を実行する。

注意点: コンテナが停止しても、データは残るように設計されています。

コンテナ本体: 停止します。CPUやメモリは消費しません。

Docker Desktop (Docker Engine): ホストPC（メンバーのPC）上で起動したままになっていることが多いです。完全に終了したい場合は、タスクトレイやメニューバーからDocker Desktop自体を終了する必要があります。

### 1.3 2回目以降の開発開始時
開発を再開する際も、非常に簡単です。

Docker Desktopが起動しているか確認する。 (これがDockerの根幹を動かすサーバーです。もし終了していたら手動で起動する必要があります。)

VS Codeでプロジェクトを開く。

VS Codeの右下のステータスバーにある青いアイコン（< >のようなアイコン）をクリックし、「Dev Containers: Reopen in Container」を選択するか、プロジェクトを開いた際に出るプロンプトに従います。

VS Codeは、停止している既存のコンテナを見つけて、それを**再開（Start）**し、接続してくれます。この際、イメージの再ビルド（時間がかかる処理）は不要です。

まとめると、Docker環境の面倒なライフサイクル管理のほとんどはVS Codeが担ってくれるため、開発者は「コンテナで開く」という操作を意識するだけで開発を始められる、というメリットがあります。

## 2. 開発方針 <a id="2"></a>

- 当該リポジトリは issue ドリブン開発を用いて開発を進めていきます．
  - branch の派生について，まずは issue を登録し，main から分岐させてください．
  - issue 作成の際には template を用いてください．
  - branch の名称は，`{branch_name}/#{issue_num}_{todo}` とすることを推奨します．
    - `{branch_name}` : `add`, `fix`, `update` など
    - `{issue_num}` : issue 番号
    - `{todo}` : やることを英語で記載（例： `add_readme` など）
  - commit メッセージは `[{branch_name}] #{issue_num} {done}` とすることを推奨します．
    - `{branch_name}` : `add`, `fix`, `update` など
    - `{issue_num}` : issue 番号
    - `{done}` : やったことを日本語で要約して記載
  - `{branch_name}`は下記のようにします.足りないのがあれば教えて下さい.
    - 機能追加 add:
    - 機能修正 update:
    - バグ修正 fix:
    - 削除 remove:
    - 仕様の変更 change:
    - 整理 clean:
  - pull request 作成の際にも template を用いますが，github 上から選択できないので，`./PULL_REQUEST_TEMPLATE/feature.md` の中身をコピーし作成してください．
- 基本的にはアジャイル開発チックに進めていきましょう．
  - 機能考えつくして一気に開発していくという流れではなく，色々作って試行錯誤的に完成させていくという流れです．
  - 資料よりもコードを書いたり実装しましょう．

