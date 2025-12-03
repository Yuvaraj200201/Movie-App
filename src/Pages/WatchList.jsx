import { useContext, useState } from "react";
import { WatchListContext } from "../Context/WatchListContext";
import MovieCards from "../Components/MovieCards";
import { Link } from "react-router-dom";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);

  const [search, setSearch] = useState("");
  const searchedMovie = watchList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="text-center">
      <input
        className="border border-solid-2px bg-black  border-blue-700 
        text-white w-3/4 md:w-1/2 p-1 sm:p-2 bg-opacity-60 placeholder:text-white 
        rounded-md backdrop-blur-md fixed top-14 left-1/2 transform -translate-x-1/2 z-10 mb-2 sm:mt-3"
        type="text"
        placeholder="Search Movies..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {watchList.length == 0 ? (
        <Link to="/">
          <button className="bg-green-600 mt-60 px-4 py-2 text-white font-bold rounded-md hover:scale-90">
            Add Movies
          </button>
        </Link>
      ) : (
        <div className="p-2 md:p-4 lg:p-6 mt-28">
          <div className="grid gap-2 md:gap-3 lg:gap-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {searchedMovie.map((movie) => {
              return <MovieCards key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default WatchList;
