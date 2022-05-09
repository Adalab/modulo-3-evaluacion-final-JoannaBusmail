import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import FilterDir from './FilterDir';
import FilterCharacter from './FilterCharacter';

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
        <FilterDir
          handleSearchDir={props.handleSearchDir}
          searchDirector={props.searchDirector}
        />
        <FilterCharacter
          handleSearchCharacter={props.handleSearchCharacter}
          characters={props.characters}
        />
      </form>
    </section>
  );
}
export default Filters;
