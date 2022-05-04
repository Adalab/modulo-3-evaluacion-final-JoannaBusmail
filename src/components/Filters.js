import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section>
      <form>
        <FilterMovie
          handleSearchMovie={props.handleSearchMovie}
          searchMovie={props.searchMovie}
        />
        <FilterYear />
      </form>
    </section>
  );
}

export default filter;
