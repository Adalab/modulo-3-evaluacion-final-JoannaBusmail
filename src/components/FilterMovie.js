function FilterMovie(props) {
  const handleInputSearchMovies = (ev) => {
    ev.preventDefault();
    props.handleSearchMovie(ev.target.value);
  };
  return (
    <>
      <label htmlFor=''> Movie: </label>
      <input
        type='text'
        id=''
        value={props.searchMovie}
        onChange={handleInputSearchMovies}
      ></input>
    </>
  );
}
export default FilterMovie;
