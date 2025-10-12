# アプリケーション全体フローチャート

この図は、Movie Applicationの全体的な処理フローを示しています。

```mermaid
flowchart TD
    A[アプリケーション開始] --> B[main.tsx]
    B --> C[RouterProvider設定]
    C --> D{ルート判定}
    D -->|"/"| E[App コンポーネント]
    D -->|"/movies/:movieId"| F[MovieDetail コンポーネント]
    
    E --> G[HeroSection表示]
    E --> H[検索入力フィールド]
    E --> I[映画リスト表示]
    
    H --> J{キーワード入力}
    J -->|あり| K[検索API呼び出し]
    J -->|なし| L[人気映画API呼び出し]
    
    K --> M[検索結果を映画リストに設定]
    L --> N[人気映画を映画リストに設定]
    
    M --> O[MovieCard一覧表示]
    N --> O
    
    O --> P[MovieCardクリック]
    P --> Q[MovieDetailページへ遷移]
    
    F --> R[映画ID取得]
    R --> S[映画詳細API呼び出し]
    S --> T[映画詳細データ表示]
    
    G --> U[Playボタンクリック]
    U --> V[アラート表示]
    
    G --> W[More Infoボタンクリック]
    W --> X[君の名はの詳細ページへ遷移]
```

## 説明

1. **アプリケーション開始**: main.tsxからアプリケーションが起動
2. **ルーティング**: React Routerによるページ分岐
3. **ホーム画面**: HeroSection、検索機能、映画リスト表示
4. **検索機能**: キーワードに基づく動的な映画検索
5. **映画詳細**: 個別の映画情報表示
6. **ユーザー操作**: ボタンクリックやリンク遷移による画面遷移
