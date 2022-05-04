function FilterMovie(props) {
  const handleInputSearchMovies = (ev) => {
   props.handleInputSearchMovies({
  value: ev.target.value,
});
  return (
    <>
      <label htmlFor='movieFilter'>Movies:</label>
      <input
        type='text'
        id='movie'
        name='movie'
        value={props.searchMovie}
        onChange={handleInputSearchMovies}
      ></input>
    </>
  );
}

export default FilterMovie;
