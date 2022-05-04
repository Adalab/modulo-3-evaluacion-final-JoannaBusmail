import { useEffect, useState } from 'react';
import '../styles/main.scss';
import getApiData from './services/Fetch';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  //Creo variable de estado donde voy a guardar:
  // mi listado inicial cuando carga la pagina --viene de la API
  //mis cambios en el listado al filtrar
  const [movieList, setMovieList] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  //quiero renderizar una única vez, el listado de la API, cuando se caraga la pagina para eso hago un useEffect y le incluyo como segundo parámetro un array vacío
  useEffect(() => {
    getApiData().then((apiData) => {
      setMovieList(apiData);
      console.log(apiData);
    });
  }, []);
  //cojo el valor del input.
  //el valor lo he pasado por parametros ya que este valor lo recojo del componente filter
  const handleSearchMovie = (value) => {
    setSearchMovie(value);
    console.log(value);
  };

  const movieFilters = movieList.filter((eachMovie) => {
    if (searchMovie === '') {
      return true;
    } else {
      return eachMovie.movie === searchMovie;
    }
  });
  return (
    <div>
      <h1> Owen Wilson "WOW"</h1>
      <Filters
        //necesita la funcion para guardar en mi variable de search movies el valor que escribe la usuario en el input
        // y necesito la varibale de estado
        handleSearchMovie={handleSearchMovie}
        searchMovie={searchMovie}
      />
      {/*Paso por props a movieList el array que contiene mi listado de peliculas*/}
      <MovieSceneList movies={movieList} />
    </div>
  );
}

export default App;
