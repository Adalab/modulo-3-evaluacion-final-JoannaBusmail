import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getApiData from './services/Fetch';
import MovieSceneList from './MovieSceneList';
import MovieSceneItem from './MovieSceneItem';

function App() {
  //Creo variable de estado donde voy a guardar:
  // mi listado inicial cuando carga la pagina --viene de la API
  //mis cambios en el listado al filtrar
  const [movieList, setMovieList] = useState([]);

  //quiero renderizar una única vez, el listado de la API, cuando se caraga la pagina para eso hago un useEffect y le incluyo como segundo parámetro un array vacío
  useEffect(() => {
    getApiData().then((apiData) => {
      setMovieList(apiData);
      console.log(apiData);
    });
  }, []);

  return (
    <div>
      <h1> Owen Wilson "WOW"</h1>
      <MovieSceneList movies={movieList}></MovieSceneList>
    </div>
  );
}

export default App;
