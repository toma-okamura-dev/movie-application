import { useEffect, useState } from "react";
import { Link } from "react-router";
import MovieCard from "./MovieCard";
import "./App.css";
import type { Movie, MovieJson } from "./types";

function App() {
  const fetchMovieList = async () => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    let url = "";
    if (keyword) {
      url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        keyword
      )}&include_adult=false&language=ja&page=1`;
    } else {
      url = "https://api.themoviedb.org/3/movie/popular?language=ja&page=1";
    }
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();
    const result = data.results;
    const movieList = result.map((movie: MovieJson) => ({
      id: movie.id,
      original_title: movie.title,
      poster_path: movie.poster_path,
    }));
    setMovieList(movieList);
  };
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovieList();
  }, [keyword]);

  // HeroSection用のダミーデータ（君の名は）
  const heroTitle = "君の名は";
  const heroYear = 2016;
  const heroOverview =
    "1ヵ月後に1000年ぶりの彗星が訪れる日本。東京で暮らす平凡な男子高校生・瀧と、山深い村で都会の生活に憧れながら憂鬱な日々を送る女子高校生・三葉。つながりのない2人は、互いが入れ替わる不思議な夢を見る。";
  const heroImage =
    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yLglTwyFOUZt5fNKm0PWL1PK5gm.jpg";
  const heroMovieId = "372058"; // 君の名はのTMDB ID

  return (
    <div>
      <section className="hero-section">
        {heroImage && (
          <>
            <img className="hero-section-bg" src={heroImage} alt={heroTitle} />
            <div className="hero-section-gradient" />
          </>
        )}
        <div className="hero-section-content">
          <h1 className="hero-section-title">{heroTitle}</h1>
          <div className="hero-section-badges">
            <span className="hero-section-badge">{heroYear}</span>
          </div>
          {heroOverview && (
            <div className="hero-section-overview">{heroOverview}</div>
          )}
          <div className="hero-section-actions">
            <button 
              className="hero-section-btn hero-section-btn-primary"
              onClick={() => alert('申し訳ございません！まだ未実装です！！')}
            >
              ▶ Play
            </button>
            <Link 
              to={`/movies/${heroMovieId}`}
              className="hero-section-btn hero-section-btn-secondary"
            >
              More Info
            </Link>
          </div>
        </div>
      </section>
      <div className="app-search-wrap">
        <input
          type="text"
          className="app-search"
          placeholder="映画タイトルで検索..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <section className="movie-row-section">
        <h2 className="movie-row-title">
          {keyword ? `「${keyword}」の検索結果` : "人気映画"}
        </h2>
        <div className="movie-row-scroll">
          {/* 修正：MovieCard をループで描画 */}
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

      </section>
     
</div>
  );
}

export default App;
