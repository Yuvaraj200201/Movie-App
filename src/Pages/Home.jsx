import MovieCards from "../Components/MovieCards";
import GenreFilter from "../Components/GenreFilter";
import { useContext } from "react";
import { MoviesContext } from "../Context/Movies&FilterContext";

const Home = () => {
  const { movies, page, setPage, search, setSearch } =
    useContext(MoviesContext);
  console.log("Movies List", movies);
  return (
    <section className="p-2 md:p-4 lg:p-6 mt-12">
      {/* Search & GenreFilter */}
      <div className="flex justify-center items-center gap-2 md:gap-4 z-20 mb-4">
        <input
          className="border border-solid-2px bg-black  border-blue-700 
        text-white w-3/4 md:w-1/2 p-1 sm:p-2 bg-opacity-60 placeholder:text-white 
        rounded-md backdrop-blur-md"
          type="text"
          placeholder="Search Movies..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <GenreFilter />
      </div>

      {/* Create a Movie cards */}

      <div className="grid gap-2 md:gap-3 lg:gap-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie) => {
          return <MovieCards key={movie.id} movie={movie} />;
        })}
      </div>

      {/* Previous & Next buttons */}
      <div className="flex justify-between items-center m-2 mt-6">
        <button
          hidden={page == 1}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          className="bg-green-900 text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-sm"
        >
          PREV
        </button>
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          className="bg-green-900 text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-sm"
        >
          NEXT
        </button>
      </div>
    </section>
  );
};
export default Home;
