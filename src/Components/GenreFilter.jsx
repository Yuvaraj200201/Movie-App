import { useContext } from "react";
import { MoviesContext } from "../Context/Movies&FilterContext";

const GenreFilter = () => {
  const { genreList, setSelectedGenre, setSearch, setPage, selectedGenre } =
    useContext(MoviesContext);
  const handleGenreChange = (e) => {
    const newGenreId = e.target.value;
    setSelectedGenre(newGenreId === "" ? null : newGenreId);
    setSearch("");
    setPage(1);
  };
  return (
    <select
      className="py-1.5 sm:p-2 bg-gray-900 backdrop-blur-md text-center
     opacity-60 rounded-sm border text-white text-sm"
      onChange={handleGenreChange}
      value={selectedGenre || ""}
    >
      <option
        className="bg-gray-800 text-white rounded"
        onClick={() => handleGenreClick(null)}
        value=""
      >
        All Genres
      </option>
      {genreList.map((genre) => (
        <option
          key={genre.id}
          className="bg-gray-800 text-white rounded hover:bg-blue-600"
          value={genre.id}
        >
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
