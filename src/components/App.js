import { useEffect, useState } from 'react';
import { Routes, Route, Links } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import getApiData from './services/Fetch';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import '../styles/main.scss';
function App() {
  //Creo variable de estado donde voy a guardar:
  // mi listado inicial cuando carga la pagina --viene de la API
  //mis cambios en el listado al filtrar
  const [movieList, setMovieList] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [searchYear, setSearchYear] = useState('all');

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

  const handleSearchYear = (value) => {
    setSearchYear(value);
  };

  const filters = movieList
    .filter((movieFilter) => {
      return movieFilter.movieName
        .toLocaleLowerCase()
        .includes(searchMovie.toLocaleLowerCase());
    })
    .filter((yearFilter) => {
      if (searchYear === 'all') {
        return true;
      } else {
        return yearFilter.year === searchYear;
      }
    });

  //filtro por año
  //Tengo que recorrer mi array inicial y sacar solo el dato del año.
  //Una vez lo tengo, tengo que quedarme con valores únicos, es decir no repetir años, ya que esto lo usaré para el select en el componente de filtrar por años.
  //este método me devuelve un objeto, tengo que ocnvertirlo en array con el spread
  //este array que me devuelve tengo que mandarlo por props al componente filterYear
  const getYear = () => {
    const yearMovies = movieList.map((movieYear) => movieYear.year);
    const uniqueYear = new Set(yearMovies);
    const uniques = [...uniqueYear];
    return uniques;
  };
  const { pathname } = useLocation();
  console.log(pathname);
  //me devuelve / que es la URL principal
  const dataPath = matchPath('/movie/:movieId', pathname);
  console.log(dataPath);
  //me devuelve la ruta en un objeto params.movieId

  const movieId = dataPath.params.movieId;
  const movieFound = movieList.find((item) => item.id === movieId);

  return (
    <div>
      <h1> Owen Wilson "WOW"</h1>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Filters
                //necesita la funcion para guardar en mi variable de search movies el valor que escribe la usuario en el input
                // y necesito la varibale de estado
                handleSearchMovie={handleSearchMovie}
                searchMovie={searchMovie}
                years={getYear()}
                handleSearchYear={handleSearchYear}
              />

              {/*Paso por props a movieList el array que contiene mi listado de peliculas*/}
              <MovieSceneList movies={filters} />
            </>
          }
        />
        <Route
          path='/movie/:movieId'
          element={<MovieSceneDetail movie={movieFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
