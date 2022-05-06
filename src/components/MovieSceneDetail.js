function movieSceneDetail(props) {
  console.log(props);
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
      {/*<a href={props.movieItem.audio}></a>*/}
    </article>
  );
}

export default movieSceneDetail;
