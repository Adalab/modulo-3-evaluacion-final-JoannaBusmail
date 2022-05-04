const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((movie) => {
        return {
          id: movie.movie,
          poster: movie.poster,
          movieName: movie.movie,
          fullLine: movie.full_line,
          year: movie.year,
          director: movie.director,
          audio: movie.audio,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default getApiData;
