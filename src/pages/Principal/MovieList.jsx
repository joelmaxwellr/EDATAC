import Movie from "./Movie";
const MovieList = ({ movies, onAddFavorite }) => {
  return (
    <div className="row">
      {movies.map((movie, i) => (
        <Movie key={i} {...movie} onAddFavorite={onAddFavorite} />
      ))}
    </div>
  );
};

export default MovieList;
