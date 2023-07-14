import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text"><b>Released Date: </b>{movie.Released}</p>
          <p className="card-text"><b>Genre: </b>{movie.Genre}</p>
          <p className="card-text"><b>IMDB Rating: </b>{movie.imdbRating} / 10</p>
          <p className="card-text"><b>Language: </b>{movie.Language}</p>
          <p className="card-text"><b>Cast: </b>{movie.Actors}</p>
          <p className="card-text"><b>Plot: </b>{movie.Plot}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          <NavLink to="/" className="back-btn">
            Book Ticket
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
