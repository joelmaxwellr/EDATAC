import React, { useEffect } from "react";
import MovieList from "../Principal/MovieList";

const Favoritos = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <p>Funciona</p>
      <MovieList movies={props.favoritos} onAddFavorite={(e) => {}} />
    </div>
  );
};

export default Favoritos;
