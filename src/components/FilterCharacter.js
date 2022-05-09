function FilterCharacter(props) {
  const handleSelectOptionChar = (ev) => {
    props.handleSearchCharacter(ev.target.value);
  };
  const renderChar = () => {
    return props.characters.map((theCharacter) => {
      return <option value={theCharacter}>{theCharacter}</option>;
    });
  };

  return (
    <>
      <label> Personaje</label>
      <select name='character' onChange={handleSelectOptionChar}>
        <option value='select'>ALL</option>
        {renderChar()}
      </select>
    </>
  );
}
export default FilterCharacter;
