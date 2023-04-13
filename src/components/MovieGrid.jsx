import MovieCard from "./MovieCard";
function MovieGrid(props) {
  const { movies } = props;
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          image={movie.Poster}
          year={movie.Year}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
