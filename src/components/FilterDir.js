function FilterDir(props) {
  const handleInputSearchDir = (ev) => {
    props.handleSearchDir(ev.target.value);
  };
  return (
    <>
      <label htmlFor=''> Movie: </label>
      <input
        type='text'
        id=''
        value={props.searchDirector}
        onChange={handleInputSearchDir}
      ></input>
    </>
  );
}

export default FilterDir;
