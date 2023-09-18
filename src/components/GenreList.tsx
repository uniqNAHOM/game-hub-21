import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { Data } = useGenres();
  return (
    <ul>
      {Data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
