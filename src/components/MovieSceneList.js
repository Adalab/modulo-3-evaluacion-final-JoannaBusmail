import MovieSceneItem from './MovieSceneItem';
// Recibo por PROPS el array que contiene mi lista de  peliculas.
//Para recorrerlo y para transformar ese array en LI, tengo que hacer un map
function movieSceneList(props) {
  const movieElement = props.movies.map((movieItem, index) => {
    return (
      <li key={index}>
        {/*le mando a movieSceneItem un objeto*/}
        <MovieSceneItem movieItem={movieItem} />
      </li>
    );
  });
  //Retorno el array que me da el MAP- esto me da 50 peliculas iguales. tengo que cambiar los datos variables en el componente de movieSceneItem
  return (
    <section>
      <ul>{movieElement}</ul>
    </section>
  );
}

export default movieSceneList;
