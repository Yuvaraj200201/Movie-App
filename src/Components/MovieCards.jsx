import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../Context/WatchListContext";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { toggleWatchList, watchList } = useContext(WatchListContext);

  const inWatchList = watchList.some((m) => m.id == movie.id);

  return (
    <div className="w-fit relative">
      <Link to={`/movie/${movie.id}`}>
        <img
          className="w-full min-h-24 rounded-lg object-contain"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>

      <button
        className="absolute text-[6vw] md:text-[3vw] top-2 left-2 z-10"
        onClick={() => toggleWatchList(movie)}
      >
        {inWatchList ? (
          <FaHeart className="text-red-600" />
        ) : (
          <FaRegHeart className="text-red-600" />
        )}
      </button>
    </div>
  );
};
export default MovieCard;
