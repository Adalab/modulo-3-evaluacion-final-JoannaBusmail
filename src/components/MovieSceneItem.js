import '../styles/components/movieSceneItemStyles.scss';
import { Link } from 'react-router-dom';

//Recibo por props solo los datos que quiero pintar  al carga la página

function movieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movieItem.id}`}>
      <article>
        <img
          className='poster'
          alt={props.movieItem.movie}
          src={props.movieItem.poster}
        />
        <h4>{props.movieItem.movieName}</h4>
        <p>{props.movieItem.fullLine}</p>
        <p>{props.movieItem.year}</p>
      </article>
    </Link>
  );
}

export default movieSceneItem;
