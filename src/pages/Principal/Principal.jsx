import MovieList from "./MovieList";

const Principal = ({ movies,onAddFavorite }) => {
  return (
    <>
      <MovieList movies={movies} onAddFavorite={onAddFavorite} />
    </>
  );
};

export default Principal;
