# Movie Application ドキュメント

/docsディレクトリには、Movie Applicationの設計とアーキテクチャを説明するMermaidダイアグラムが含まれています。

## ダイアグラム一覧

### 1. [フローチャート](./docs/01-flowchart.md01-flowchart.md)
アプリケーション全体の処理フローを示します。
- アプリケーションの起動から画面遷移まで
- ユーザー操作による画面の変化
- API呼び出しの流れ

### 2. [クラス図](./docs/02-class-diagram.md)
コンポーネントと型定義の関係を示します。
- Reactコンポーネントの構造
- TypeScript型定義の関係
- コンポーネント間の依存関係

### 3. [状態遷移図](./docs/03-state-diagram.md)
アプリケーションの状態変化を示します。
- ユーザー操作による状態の遷移
- API呼び出し中の状態管理
- エラーハンドリングの状態

### 4. [シーケンス図](./docs/04-sequence-diagram.md)
ユーザー操作とAPI呼び出しの時系列を示します。
- コンポーネント間の相互作用
- API通信の流れ
- ユーザー操作の処理順序

### 5. [コンポーネント関係図](./docs/05-component-relationships.md)
アプリケーションの構造と依存関係を示します。
- コンポーネントの階層構造
- 外部依存関係
- 型定義の使用関係

## アプリケーション概要

Movie Applicationは、React + TypeScript + Viteで構築された映画情報アプリケーションです。

### 主要機能

1. **映画一覧表示**: TMDB APIから人気映画を取得・表示
2. **映画検索**: キーワードによる映画検索機能
3. **映画詳細表示**: 個別映画の詳細情報表示
4. **レスポンシブデザイン**: モバイル・デスクトップ対応

### 技術スタック

- **フロントエンド**: React 19, TypeScript
- **ルーティング**: React Router
- **ビルドツール**: Vite
- **スタイリング**: CSS Modules
- **API**: TMDB (The Movie Database) API
- **アイコン**: Lucide React

### アーキテクチャの特徴

1. **コンポーネント指向**: 再利用可能なコンポーネント設計
2. **型安全性**: TypeScriptによる型定義の徹底
3. **状態管理**: React Hooksによる状態管理
4. **外部API統合**: RESTful APIとの統合
5. **レスポンシブデザイン**: モバイルファーストのデザイン

## 使用方法

各ダイアグラムファイルは、Mermaid記法で記述されています。以下の方法で表示できます：

1. **GitHub**: GitHub上で直接Mermaid図を表示
2. **Mermaid Live Editor**: [https://mermaid.live/](https://mermaid.live/) で図を確認・編集
3. **VS Code**: Mermaid拡張機能を使用してローカルで表示
4. **ドキュメント生成ツール**: GitBook、Docusaurus等で統合表示

## 更新履歴

- 2025年10月: 初回作成
  - アプリケーション全体の設計図を作成
  - 5種類のダイアグラムを追加
  - ドキュメント化完了
