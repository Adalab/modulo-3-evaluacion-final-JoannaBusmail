import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const handleSubmit = (ev) => {
  ev.preventDefault();
};

function Filters(props) {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterMovie
          handleSearchMovie={props.handleSearchMovie}
          searchMovie={props.searchMovie}
        />
        <FilterYear
          years={props.years}
          handleSearchYear={props.handleSearchYear}
        />
      </form>
    </section>
  );
}
export default Filters;
