import '../styles/main.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getApiData from './services/Fetch';
import lsObject from './services/ls';

import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import movieSceneItem from './MovieSceneItem';
import MovieForm from './MovieForm';

function App() {
  //Creo variable de estado donde voy a guardar:
  // mi listado inicial cuando carga la pagina --viene de la API
  //mis cambios en el listado al filtrar
  const [movieList, setMovieList] = useState([]);
  const [searchMovie, setSearchMovie] = useState(lsObject.get('inputs', ''));
  const [searchYear, setSearchYear] = useState('all');
  const [searchDirector, setSearchDirector] = useState('');
  const [searchCharacter, setSearchCharacter] = useState('select');
  const [newMovie, setNewMovie] = useState({
    id: '',
    movieName: '',
    character: '',
  });
  //quiero renderizar una única vez, el listado de la API, cuando se caraga la pagina para eso hago un useEffect y le incluyo como segundo parámetro un array vacío
  useEffect(() => {
    getApiData().then((apiData) => {
      setMovieList(apiData);
      console.log(apiData);
    });
  }, []);

  const addMovie = () => {};

  const changeData = (nombreInput, valueInput) => {
    setNewMovie({ ...newMovie, [nombreInput]: valueInput });
  };
  //cojo el valor del input.
  //el valor lo he pasado por parametros ya que este valor lo recojo del componente filter
  const handleSearchMovie = (value) => {
    setSearchMovie(value);
    lsObject.set('input', value);
    console.log(value);
  };

  const handleSearchYear = (value) => {
    setSearchYear(value);
  };

  const handleSearchDir = (value) => {
    setSearchDirector(value);
  };

  const handleSearchCharacter = (value) => {
    setSearchCharacter(value);
  };

  const handleReset = () => {
    setNewMovie({ movieName: '', character: '' });
  };

  const filters = movieList
    .filter((movieFilter) => {
      return movieFilter.movieName
        .toLowerCase()
        .includes(searchMovie.toLowerCase());
    })
    .filter((dirFilter) => {
      return dirFilter.director
        .toLowerCase()
        .includes(searchDirector.toLowerCase());
    })
    .filter((characterFilter) => {
      if (searchCharacter === 'select') {
        return true;
      } else {
        console.log(searchCharacter);
        return characterFilter.character === searchCharacter;
      }
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

  const getCharacter = () => {
    const characterMovie = movieList.map((character) => character.character);
    const uniqueChar = new Set(characterMovie);
    const uniqueCharacter = [...uniqueChar];
    return uniqueCharacter;
  };

  const notFound = () => {
    if (searchMovie !== '' && filters.length === 0) {
      return <p>{searchMovie} Not Found</p>;
    }
  };
  const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath('/movie/:movieId', pathname);
  console.log(dataPath);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = movieList.find((item) => item.id === movieId);

  console.log({ movieId, movieFound, movieList });

  return (
    <>
      <h1> Owen Wilson "WOW"</h1>

      <div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <MovieForm
                  newMovie={newMovie}
                  addMovie={addMovie}
                  changeData={changeData}
                />
                <Filters
                  //necesita la funcion para guardar en mi variable de search movies el valor que escribe la usuario en el input
                  // y necesito la varibale de estado
                  handleSearchMovie={handleSearchMovie}
                  searchMovie={searchMovie}
                  years={getYear()}
                  handleSearchYear={handleSearchYear}
                  handleSearchDir={handleSearchDir}
                  searchDirector={searchDirector}
                  handleSearchCharacter={handleSearchCharacter}
                  characters={getCharacter()}
                  handleReset={handleReset}
                />
                {notFound()}
                <MovieSceneList movieItem={filters} />
              </>
            }
          />
          <Route
            path='/movie/:movieId'
            element={<MovieSceneDetail movieItem={movieFound} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
