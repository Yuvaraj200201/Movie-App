import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const API_KEY = "ca8605050cf8e4346a6a80aa2c0d6208";
  useEffect(() => {
    const fetchGenreList = async () => {
      const url = `http://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
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
    let url = `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
    if (search) {
      url = `http://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}&page=${page}`;
    } else if (selectedGenre) {
      url = `http://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre}&api_key=${API_KEY}&page=${page}`;
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
        setSelectedGenre
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
