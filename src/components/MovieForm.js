function MovieForm(props) {
  const handleNewMovie = (ev) => {
    ev.preventDefault();
    props.addMovie();
  };

  const handleInput = (ev) => {
    const nombreInput = ev.target.id;
    const valueInput = ev.target.value;
    props.changeData(nombreInput, valueInput);
  };
  return (
    <>
      <label>nombre </label>
      <input
        type='text'
        id='movieName'
        value={props.newMovie.name}
        onChange={handleInput}
      ></input>
      <label>personaje </label>
      <input
        type='text'
        id='character'
        value={props.newMovie.character}
        onChange={handleInput}
      ></input>
      <button onClick={handleNewMovie}>Guardar</button>
    </>
  );
}
export default MovieForm;
