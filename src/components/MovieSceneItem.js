//Recibo por props solo los datos que quiero pintar  al carga la página

function movieSceneItem(props) {
  return (
    <article>
      <img alt={props.movieItem.movie} src={props.movieItem.poster} />
      <h4>{props.movieItem.movieName}</h4>
      <p>{props.movieItem.fullLine}</p>
      <p>{props.movieItem.year}</p>
    </article>
  );
}

export default movieSceneItem;
