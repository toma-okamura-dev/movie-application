# クラス図

この図は、Movie Applicationのコンポーネントと型定義の関係を示しています。

```mermaid
classDiagram
    class App {
        -keyword: string
        -movieList: Movie[]
        +fetchMovieList()
        +useEffect()
        +render()
    }
    
    class MovieCard {
        +movie: Movie
        +render()
    }
    
    class MovieDetail {
        -movie: Movie
        -movieId: string
        +fetchMovieDetail()
        +useEffect()
        +render()
    }
    
    class Header {
        +children: ReactNode
        +render()
    }
    
    class Movie {
        +id: number
        +original_title: string
        +poster_path: string
        +overview: string
    }
    
    class MovieJson {
        +adult: boolean
        +backdrop_path: string
        +genre_ids: number[]
        +id: number
        +original_language: string
        +original_title: string
        +overview: string
        +popularity: number
        +poster_path: string
        +release_date: string
        +title: string
        +video: boolean
        +vote_average: number
        +vote_count: number
    }
    
    class MovieDetailJson {
        +adult: boolean
        +backdrop_path: string
        +belongs_to_collection: null
        +budget: number
        +genres: Genre[]
        +homepage: string
        +id: string
        +imdb_id: string
        +origin_country: string[]
        +original_language: string
        +original_title: string
        +overview: string
        +popularity: number
        +poster_path: string
        +production_companies: Company[]
        +production_countries: Country[]
        +release_date: string
        +revenue: number
        +runtime: number
        +spoken_languages: Language[]
        +status: string
        +tagline: string
        +title: string
        +video: boolean
        +vote_average: number
        +vote_count: number
    }
    
    class Genre {
        +id: number
        +name: string
    }
    
    class Company {
        +id: number
        +logo_path: string
        +name: string
        +origin_country: string
    }
    
    class Country {
        +iso_3166_1: string
        +name: string
    }
    
    class Language {
        +english_name: string
        +iso_639_1: string
        +name: string
    }
    
    App --> Movie : uses
    App --> MovieJson : uses
    MovieCard --> Movie : uses
    MovieDetail --> Movie : uses
    MovieDetail --> MovieDetailJson : uses
    MovieDetailJson --> Genre : contains
    MovieDetailJson --> Company : contains
    MovieDetailJson --> Country : contains
    MovieDetailJson --> Language : contains
```

## 説明

### コンポーネントクラス

- **App**: メインアプリケーションコンポーネント、映画リストの管理とAPI呼び出しを担当
- **MovieCard**: 個別の映画カード表示コンポーネント
- **MovieDetail**: 映画詳細ページコンポーネント、詳細情報の取得と表示を担当
- **Header**: アプリケーションのヘッダーコンポーネント

### 型定義クラス

- **Movie**: アプリケーション内で使用する映画データの基本型
- **MovieJson**: TMDB APIから取得する映画データの型
- **MovieDetailJson**: TMDB APIから取得する映画詳細データの型

### 関連型クラス

- **Genre**: ジャンル情報
- **Company**: 制作会社情報
- **Country**: 制作国情報
- **Language**: 言語情報

これらの型定義により、TypeScriptの型安全性が保たれ、開発時のエラーを防ぐことができます。
