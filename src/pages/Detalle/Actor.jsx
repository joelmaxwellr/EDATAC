const Actor = ({ character, name, profile_path }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} />
      <h5>{name}</h5>
      <p>{character}</p>
    </div>
  );
};

export default Actor;
