import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const apikey = import.meta.env.VITE_TMDB_API_KEY;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchGenreList = async () => {
      const url = `${baseUrl}/genre/movie/list?api_key=${apikey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGenreList(data.genres || []);
      } catch (error) {
        console.log("Error fetching genre list", error);
      }
    };
    fetchGenreList();
  }, []);

  useEffect(() => {
    let url = `${baseUrl}/movie/popular?api_key=${apikey}&page=${page}`;
    if (search) {
      url = `${baseUrl}/search/movie?query=${search}&api_key=${apikey}&page=${page}`;
    } else if (selectedGenre) {
      url = `${baseUrl}/discover/movie?with_genres=${selectedGenre}&api_key=${apikey}&page=${page}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((err) => console.log("Error fetching movies", err));
  }, [page, search, selectedGenre]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        page,
        setPage,
        search,
        setSearch,
        genreList,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
