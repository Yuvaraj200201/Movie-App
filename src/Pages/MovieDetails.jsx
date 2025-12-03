import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loding from "../Components/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const API_KEY = "ca8605050cf8e4346a6a80aa2c0d6208";
  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie) return <Loding />;

  return (
    <div className="mt-12 sm:mt-16 text-center p-2 flex flex-col mx-auto md:text-xl sm:text-lg">
      <img
        className="h-72 sm:h-80 rounded-lg object-contain"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="mt-4">
        <p>
          <b>Movie: </b>
          <em>{movie.title}</em>
        </p>
        <p>
          <b>Release Date: </b>
          <em>{movie.release_date}</em>
        </p>
        <p>
          <b>Orijinal Language: </b>
          <em>{movie.original_language}</em>
        </p>
        <p>
          <b>Popularity: </b>
          <em>{movie.popularity}</em>
        </p>
        <p>
          <b>Vote Average: </b>
          <em>{movie.vote_average}</em>
        </p>
        <p>
          <b>Vote Count: </b>
          <em>{movie.vote_count}</em>
        </p>
        <p className="bg-yellow-200 p-2 md:mx-32 lg:mx-64">
          <b>Overview: </b>
          <em>{movie.overview}</em>
        </p>
      </div>
    </div>
  );
};
export default MovieDetails;
