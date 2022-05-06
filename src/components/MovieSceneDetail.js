import { Link } from 'react-router-dom';

function MovieSceneDetail(props) {
  if (props.movieItem === undefined) {
    return <p>Escena no encontrada</p>;
  } else {
    return (
      <article>
        <img
          className='poster'
          alt={props.movieItem.movie}
          src={props.movieItem.poster}
        />
        <h4>{props.movieItem.movieName}</h4>
        <p>{props.movieItem.fullLine}</p>
        <p>{props.movieItem.director}</p>
        {<a href={props.movieItem.audio}>Escucha el WOW </a>}
        {}
        <Link to='/'> Volver</Link>
      </article>
    );
  }
}

export default MovieSceneDetail;
