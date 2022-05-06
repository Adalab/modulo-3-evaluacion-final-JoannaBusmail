import { Link } from 'react-router-dom';

function MovieSceneDetail(props) {
  if (props.movieItem === undefined) {
    return <p>Escena no encontrada</p>;
  } else {
    return (
      <>
        <article>
          <img
            className='poster'
            alt={props.movieItem.movie}
            src={props.movieItem.poster}
          />
          <h4>Película: {props.movieItem.movieName}</h4>
          <p>Frase WOW: {props.movieItem.fullLine}</p>
          <p>Director: {props.movieItem.director}</p>
          {
            <a href={props.movieItem.audio} target='_blank'>
              Escucha el WOW{' '}
            </a>
          }
        </article>
        <Link to='/'> Volver</Link>
      </>
    );
  }
}

export default MovieSceneDetail;
