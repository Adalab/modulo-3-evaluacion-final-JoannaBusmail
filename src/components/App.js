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

  const handleSearchMovie = (data) => {
    const inputValue = data.value;

    const newMovieList = {
      ...movieList, [inputValue]
    };
  };
  return (
    <div>
      <h1> Owen Wilson "WOW"</h1>
      {/*Paso por props a movieList el array que contiene mi listado de peliculas*/}
      <MovieSceneList movies={movieList} />
      <Filters
        searchMovie={searchMovie}
        handleSearchMovie={handleSearchMovie}
      />
    </div>
  );
}

export default App;
